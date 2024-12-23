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



 
 

app.listen(port, () => {
  console.log('Server is running on port '+port);
});  