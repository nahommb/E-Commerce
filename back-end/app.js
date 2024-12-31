const dotEnv = require('dotenv');
dotEnv.config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const dbUrl = process.env.DATABASE_URL;
const mongoose = require('mongoose');
const userRoutes = require('./routes/user_routes');
const orderRoutes = require('./routes/order_routes')
const analyticsRoutes = require('./routes/analytics_routes')
const authMiddleware = require('./middleware/auth_middleware')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const productRoutes = require('./routes/product_routes');

const passport = require("passport");
const session = require("cookie-session");
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

mongoose.connect(dbUrl)
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
    },
    (accessToken, refreshToken, profile, done) => {
      // Save user details to your database
      console.log(profile.emails[0]);
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
 
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.get("/", (req, res) => {
  res.send(req.user ? `Welcome ${req.user.displayName}` : "Please log in.");
});

app.listen(port, () => {
  console.log('Server is running on port '+port);
});  