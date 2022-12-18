"use strict";

const dotenv = require("dotenv");
const logger = require("../config/logger.js");
const spawn = require("child_process").spawn;

const deedlockerPi = {

  ChangeModeRead(req, res) {
    logger.info("Read Mode");
    var process = spawn("python3", ["/home/pi/DeedLockerPi/read_boxId.py",
      { detached: true, stdio: "ignore" },
    ]);
    res.render("index");
  },

  ChangeModeWrite(req, res) {
    logger.info("Write Mode");
    res.render("index");
  },

  rpiMessage(req, res) {
    logger.info("Response from RPI");
    if (req.body != "") {
      console.log(req.body);
      res.sendStatus(200);
    }
  },

  locationUpdate(req, res) {
    logger.info("Location Update from RPI");

    if(req.body.code == 200){
      logger.info("Sending Updated location to DeedLocker WebApp");
      console.log(req.body)
    }
    res.sendStatus(200);
  }
};

module.exports = deedlockerPi;
