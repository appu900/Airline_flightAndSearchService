const { ClientErrorCodes } = require("../utils/error-codes");
const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "Invalid request body",
      error: "Missing fields to craete a flight",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
};

/**
 *
 *
 * flightNumber,
 * airplaneId,
 * departureairportId,
 * arrivalAirpottId,
 * arrivaltime,
 * departureTime,
 * price,
 */
