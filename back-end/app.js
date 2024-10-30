const dotEnv = require('dotenv');
dotEnv.config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user_routes');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRoutes);

mongoose.connect('mongodb://localhost:27017/sportsWear')
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Could not connect to MongoDB:", error));




app.listen(port, () => {
  console.log('Server is running on port '+port);
});