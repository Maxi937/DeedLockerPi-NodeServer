"use strict";

const dotenv = require('dotenv');
const logger = require('../config/logger.js');

// Load Config
dotenv.config({ path: "./config/config.env" });

// Set Base URL
const url = process.env.URL

const deedlockerPi = {
  ChangeModeRead(req, res){
    logger.info("Read Mode")

    res.render("/index")
  },

  ChangeModeWrite(req, res){
    logger.info("Write Mode")

    res.render("/index")
  },


}

module.exports = deedlockerPi