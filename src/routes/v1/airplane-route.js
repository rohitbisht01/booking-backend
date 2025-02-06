const express = require("express");
const { AirplaneController } = require("../../controllers");

const router = express.Router();

// /api/v1/airplanes/
router.post("/", AirplaneController.createAirPlane);

module.exports = router;
