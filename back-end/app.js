const dotEnv = require('dotenv');
dotEnv.config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const dbUrl = process.env.DATABASE_URL;
const mongoose = require('mongoose');
const userRoutes = require('./routes/user_routes');
const paymentRoutes = require('./routes/payment_routes')
const orderRoutes = require('./routes/order_routes')
const analyticsRoutes = require('./routes/analytics_routes')
const siteDataRoutes = require('./routes/site_data_routes');
const googleAuthRoutes = require('./routes/google_auth_routes');
const authMiddleware = require('./middleware/auth_middleware')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const productRoutes = require('./routes/product_routes');

const passport = require("passport");
const session = require("cookie-session");
const User = require('./models/user_model');
const generateToken = require('./helper/generate_token');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const clientID = process.env.GOOGLE_CLIENT_ID;

const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
 
  
app.use(cors({   
  origin: [ 
      'http://localhost:5173', 
      'http://localhost:5174',
      'https://niyasportswear.netlify.app',
  ], 
  methods: 'GET, POST, PUT, DELETE',
  credentials: true, 
  
}));  
   

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use((req, res, next) => {
//   console.log(`Request URL: ${req.url}`);
//   next();
// }); 
 
app.use('/product_image', express.static(path.join(__dirname, 'uploads/product_image')));

app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders',orderRoutes)
app.use('/api/analytics',analyticsRoutes);
app.use('/api/site_data',siteDataRoutes);
app.use('/api/payment',paymentRoutes)


mongoose.connect(dbUrl) //mongodb://127.0.0.1:27017/ecommerce local database if u want online use dbUrl
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Could not connect to MongoDB:", error));




app.use(
  session({
    secret: 'nahomlee', // Replace with a secure key
    resave: false, // Prevents saving session if unmodified
    saveUninitialized: false, // Prevents creating session until something is stored
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      secure: false, // Set true if using HTTPS
      httpOnly: true, // Helps prevent XSS attacks
    },
  })
);  

app.use(passport.initialize());
app.use(passport.session());


passport.use(
  new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "/auth/google/callback",
      passReqToCallback: true, // Enable access to `req` in callback
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists
        let user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
          // Create new user
          user = new User({
            first_name: profile.displayName,
            email: profile.emails[0].value,
            role: "user",
            created_at: Date.now(),
          });
          await user.save();
        }

        // Generate a token
        const token = generateToken(user);

        // Update the user with the new refresh token
        user.refreshToken = token;
        await user.save();
        
        console.log(user)
        // Set cookies
        const cookieName = user.role === "admin" ? "adminRefreshToken" : "refreshToken";
        req.res.cookie(cookieName, token, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000, // 72 hours
          secure: true, // Use HTTPS in production
          sameSite: "None",
        });

        // Return the user
        return done(null, user);
      } catch (error) {
        console.error("Error in Google Strategy:", error);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use('/auth', googleAuthRoutes);


app.get("/dashboard", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('http://niyasportswear.netlify.app');
  } else {
    res.redirect("/");
  }
});
app.get('/',(req,res)=>{
  res.send('error')
})

app.listen(port, () => {
  console.log('Server is running on port '+port);
});  