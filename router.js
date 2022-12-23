"use strict";

const express = require('express');
const router = express.Router();
const home = require('./controllers/home')
const deedlockerPi = require('./controllers/deedlockerPi')

// Home
router.get("/", home.index);
router.post("/", home.index);

// RPI Controls
router.get("/deedlockerPi/Read", deedlockerPi.ChangeModeRead)
router.get("/deedlockerPi/Write", deedlockerPi.ChangeModeWrite)

// Write
router.get("/writebox/:_id", deedlockerPi.writeBoxIdToRFID)

// RPI Responses
router.post("/deedlockerPi/rpiMessage", deedlockerPi.rpiMessage)
router.post("/deedlockerPi/updateLocation", deedlockerPi.locationUpdate)
router.post("/deedlockerPi/updateRfid", deedlockerPi.updateRfid)


module.exports = router;
