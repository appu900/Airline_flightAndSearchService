const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw new Error("arrival time can not be less thn departure time");
      }

      const airplane = await this.airplaneRepository.getAirPlane(
        data.airplaneId
      );

      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (error) {
      throw error;
    }
  }

  // ** get all flights based on query paramaeter

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("error in flight service",error.message)
      throw error;
    }
  }
}

module.exports = FlightService;

/**
 *
 *
 * {
 * flightNumber,
 * airplaneId,
 * departureairportId,
 * arrivalAirpottId,
 * arrivaltime,
 * departureTime,
 * price,
 * totalSeates->airplane
 *
 * function
 *
 *
 * }
 *
 *
 *
 */
