const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  // ** funtion  to create a filter object

  
  #createFilter(data) {
    let filter = {};
    let priceFilter = [];
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.lte]: data.maxPrice } },
    //       { price: { [Op.gte]: data.minPrice } },
    //     ],
    //   });
    // }

    if (data.minPrice) {
      // Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }

    if (data.maxPrice) {
      // Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    Object.assign(filter, { [Op.and]: priceFilter });

    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong on repository layeer");
      throw error;
    }
  }

  async getFlight(id) {
    try {
      const flight = await Flights.findByPk();
      return flight;
    } catch (error) {
      throw error;
    }
  }

  async getAllFlights(filters) {
    try {
      const filterObject = this.#createFilter(filters);
      console.log(filterObject);
      const flights = await Flights.findAll({
        where: filterObject,
      });
      return flights;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = FlightRepository;

/***
 *
 *
 * where:{
 * arrivalAirportId:1,
 * departureAirpostId:2,
 * price:{
 *   [Op.gte]:600
 * }
 *
 * }
 */
