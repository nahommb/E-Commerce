const dotEnv = require('dotenv');
dotEnv.config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');

const userRoutes = require('./routes/user_routes');
const authMiddleware = require('./middleware/auth_middleware')
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors({
  origin: [
      'http://localhost:5173',
  ],
  methods: 'GET, POST, PUT, DELETE',
  credentials: true,
 
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/api/user', userRoutes);

mongoose.connect('mongodb://localhost:27017/sportsWear')
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Could not connect to MongoDB:", error));




app.listen(port, () => {
  console.log('Server is running on port '+port);
});