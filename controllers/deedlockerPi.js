"use strict";

const dotenv = require("dotenv");
const logger = require("../config/logger.js");
const spawn = require("child_process").spawn;

// Load Config
dotenv.config({ path: "./config/config.env" });

// Set Base URL
const url = process.env.URL;

const deedlockerPi = {

  ChangeModeRead(req, res) {
    logger.info("Read Mode");
    logger.info("Attempting to run 'python3 Deed-LockerPi/read_boxId.py");
    var process = spawn("python3", [
      "-u",
      "/home/pi/Deed-LockerPi/read_boxId.py",
      { detached: true, stdio: "ignore" },
    ]);
    res.render("index");
  },

  ChangeModeWrite(req, res) {
    logger.info("Write Mode");
    res.render("index");
  },

  Response(req, res) {
    logger.info("Response from RPI");
    logger.silly(req.body);
    if (req.body != Null) {
      res.sendStatus(200);
    }
  }
};

module.exports = deedlockerPi;
