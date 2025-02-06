const { StatusCodes } = require("http-status-codes");
const { AirPlaneService } = require("../services");
const { response } = require("express");

/*
POST : /airplane
req-body {modelNumber:"airbus12",capacity:100}
*/
async function createAirPlane(req, res) {
  try {
    const airplane = await AirPlaneService.createAirPlane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created an airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    // throw error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error creating an airplane",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAirPlane,
};
