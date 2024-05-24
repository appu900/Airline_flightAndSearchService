const { City } = require("../models/index");

class CityRepository {
  // ** create a city
  async createCity({ name }) {
    try {
      const res = await City.create({ name:name });
      return res;
    } catch (error) {
      console.log(
        "something went wrong in the repository layer",
        error.message
      );
      throw error;
    }
  }

  // ** destroy a city
  async deleteCity(cityId) {
    try {
      const res = await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log(
        "something went wrong in the repository layer",
        error.message
      );
    }
  }

  // ** get city

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log(
        "something went wrong in the repository layer",
        error.message
      );
    }
  }

  // ** update a city

  async updateCity(cityId, { data }) {
    try {
      const res = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return res;
    } catch (error) {
      console.log(
        "something went wrong in the repository layer",
        error.message
      );
    }
  }
}

module.exports = CityRepository;

// ** kari chachonda
