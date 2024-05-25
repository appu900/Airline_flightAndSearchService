const { CityService } = require("../service/index");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    console.log(city);
    return res.status(201).json({
      data: city,
      success: true,
      message: "sucessfully created a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a city",
      error: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "city deleted sucessfully",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "can not perform delete city",
      error: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    console.log("response update a city", response);
    return res.status(200).json({
      data: response,
      success: true,
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "can not update the city",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    console.log(req.params.id);
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "ciry fetched sucessfully",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "cxan not get a city",
      error: error.message,
    });
  }
};

// ** get all cities
const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities();
    return res.status(200).json({
      data: cities,
      success: true,
      message: "cities fetched sucessfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not abel to fetch the cities",
      error: error.message,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll
};

// ** server/city/operations
// ** create,update,destroy and getById
