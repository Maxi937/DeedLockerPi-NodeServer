"use strict";

const express = require('express');
const router = express.Router();
const home = require('./controllers/home')

// Home
router.get("/", home.index);

module.exports = router;