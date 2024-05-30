const { FlightService } = require("../service/index");
const {
  ClientErrorCodes,
  SucessCodes,
  ServerErrorsCodes,
} = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    let flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };

    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SucessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "sucessfully created a flight",
    });
  } catch (error) {
    console.log("error in flight controller", error.message);
    return res.status(500).json({
      success: false,
      error: error,
      message: "not able to create a flight",
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(SucessCodes.OK).json({
      data: response,
      success: true,
      message: "sucessfully fetched the flights",
    });
  } catch (error) {
    console.log("error in flight controller", error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "not able to fetch all flights",
    });
  }
};

module.exports = {
  create,
  getAll,
};
