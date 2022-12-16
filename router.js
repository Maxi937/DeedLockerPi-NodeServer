"use strict";

const express = require('express');
const router = express.Router();
const home = require('./controllers/home')
const deedlockerPi = require('./controllers/deedlockerPi')

// Home
router.get("/", home.index);

// RPI Controls
router.get("/deedlockerPi/Read", deedlockerPi.ChangeModeRead)
router.get("/deedlockerPi/Write", deedlockerPi.ChangeModeWrite)

// RPI Responses
router.post("/deedlockerPi/Response", deedlockerPi.Response)


module.exports = router;
