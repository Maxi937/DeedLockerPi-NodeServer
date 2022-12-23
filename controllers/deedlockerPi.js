"use strict";

const dotenv = require("dotenv");
const logger = require("../config/logger.js");
const spawn = require('child_process').spawn;
const exec = require('child_process').exec;
const fetch = require("node-fetch")

const deedlockerPi = {

  ChangeModeRead(req, res) {
    logger.info("Read Mode");
    const myexec = exec("killall python3");
    var process = spawn("python3", ["/home/pi/DeedLockerPi/read_boxId.py",
      "-u",
      { detached: true, stdio: "ignore" },
    ]);
    res.render("index");
  },

  async ChangeModeWrite(req, res) {
    dotenv.config({ path: "./config/config.env" });
    logger.info("Write Mode");

    const myexec = exec("killall python3");
    const request = await fetch(`${process.env.WEBAPPLOCALURL}${process.env.GETDEEDBOXES}`)
    const deedboxes = await request.json()
  
    const viewData = {
      deedboxes
    };
    res.render("writeRfid", viewData);
  },

  writeBoxIdToRFID(req, res){
    logger.info("Writing ID to RFID")
    const boxId = req.params._id

    // spawn python process to write to the RFID
    var process = spawn("python3", ["/home/pi/DeedLockerPi/write_boxId.py",
      boxId,
      "-u",
      { detached: true, stdio: "ignore" },
    ]);
    res.render("index");
  },

  async updateRfid(req, res){
    logger.info("Update RFID received from Rasberry Pi")

    if (req.body.code == 200){
      const data = req.body.data
      const url = process.env.WEBAPPLOCALURL

      fetch(`${url}/deedlockerPi/updateRfid`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      res.sendStatus(200)
      }
      else {
        res.sendStatus(500)
      }
  },

  rpiMessage(req, res) {
    logger.info("Response from RPI");
  
    if (req.body != "") {
      console.log(req.body)
      res.sendStatus(200);
    }
  },

  async locationUpdate(req, res) {
    logger.info("Location Update from RPI");
    dotenv.config({ path: "./config/config.env" });

    const data = req.body.data
    const url = process.env.WEBAPPLOCALURL

    // Add Timestamp
    data.location.timestamp = new Date()

    try {
      if (req.body.code == 200) {
        logger.info("Sending Updated location to DeedLocker WebApp");
        const response = await fetch(`${url}/deedlockerPi/updateLocation`, {
          method: 'post',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.status == 200) {
          res.sendStatus(200);
        }
        else {
          res.sendStatus(500);
        }
      }
    } catch (err) {
      res.sendStatus(500);
    }
  }
};

module.exports = deedlockerPi;
