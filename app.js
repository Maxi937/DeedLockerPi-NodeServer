"use strict";

const dotenv = require('dotenv');
const fetch = require('node-fetch');
const logger = require('./config/logger.js');
const express = require("express");
const path = require("path");
const deedlockerPi = require("./controller/deedlockerPi")


// Express
var app = express();

// Body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Handlebars Helpers
const { formatDate } = require("./config/hbs");

// Handlebars
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
      formatDate,
    }
  })
);
app.set("view engine", ".hbs");

// Start Server
const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  logger.info(`Server Running on port ${PORT}`)
);
