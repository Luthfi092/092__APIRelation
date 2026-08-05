require('dotenv').config();

const express = require('express');
const connectToDatabase = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));


startServer();