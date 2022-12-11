"use strict";

const dotenv = require('dotenv');
const fetch = require('node-fetch');
const logger = require('./config/logger.js');
const express = require("express");
const path = require("path");
const deedlockerPi = require("./deedlockerPi")


// Express
var app = express();

// Body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Start Server
const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  logger.info(`Server Running on port ${PORT}`,
  deedlockerPi.getUsers())
);
