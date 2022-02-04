const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');
require('dotenv/config');

//route
const authRoute = require('./routes/auth');


//middleware
app.use(express.json());

app.use(cors())

//route middleware
app.use('/api/user', authRoute);

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log("connected to db")
);

//start listening
app.listen(3001, () => console.log("Server running..."));