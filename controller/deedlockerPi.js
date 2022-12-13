"use strict";

const dotenv = require('dotenv');
const fetch = require('node-fetch');
const logger = require('../config/logger.js');

// Load Config
dotenv.config({ path: "./config/config.env" });

// Set Base URL
const url = process.env.URL

const deedlockerPi = {
  async hello() {
    const route = '/hello'
  
    const response = await fetch(`${url}${route}`);
  
    if (response.ok) {
      logger.info("Success")
      console.log(await response.json());
    } else {
      logger.error("Fail")
      logger.error(response.status)
    }
  },
  
  async getUsers() {
    const route = '/getUsers'
  
    const response = await fetch(`${url}${route}`);
  
    if (response.ok) {
      logger.info("Success")
      console.log(await response.json());
    } else {
      logger.error("Fail")
      logger.error(response.status)
    }
  }
}

module.exports = deedlockerPi