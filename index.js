require('dotenv').config();

const express = require('express');
const connectToDatabase = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;





startServer();