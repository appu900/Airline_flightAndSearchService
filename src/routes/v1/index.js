const express = require("express");

const { FlightMiddleWare } = require("../../middlewares/index");

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.post("/airport", AirportController.create);

router.post("/flights", FlightMiddleWare.validateCreateFlight ,FlightController.create);
router.get("/flights", FlightController.getAll);

module.exports = router;
