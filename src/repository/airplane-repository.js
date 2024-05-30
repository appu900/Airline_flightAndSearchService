const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAirPlane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
