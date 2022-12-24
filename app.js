"use strict";

const dotenv = require("dotenv");
var express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const router = require("./router");
const logger = require("./config/logger");

logger.info(__dirname)

// Load env config
dotenv.config({ path: "./config/config.env" });

// Express
var app = express();

// Body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express Static Folder
app.use(express.static(path.join(__dirname, "./public")));

app.set('views', path.join(__dirname, './views'));

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

// Router
app.use("/", router);

// Start Server
const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  logger.info(`Server Running in ${app.get("env")} mode on port ${PORT}`)
);
