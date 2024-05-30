const { AirportService } = require("../service/index");
const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      message: "Airport Created sucessfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "can not create a new airport",
    });
  }
};

module.exports = {
    create
};
