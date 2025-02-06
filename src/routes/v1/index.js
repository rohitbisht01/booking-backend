const express = require("express");
const airplaneRotues = require("./airplane-route");

const router = express.Router();

router.use("/airplanes", airplaneRotues);

module.exports = router;
