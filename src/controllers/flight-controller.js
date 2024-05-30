const { FlightService } = require("../service/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
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
    return res.status(200).json({
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
