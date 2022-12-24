"use strict";
const logger = require("../config/logger");

const home = {
  index(req, res) {
    const viewData = {
      title: "Index",
    };
    logger.info("Rendering Index");
    res.render("index", viewData);
  },
};

module.exports = home;
