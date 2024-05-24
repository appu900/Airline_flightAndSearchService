const express = require("express");

const { PORT } = require("./config/serverConfig");

const CityRepository = require("./repository/city-repository");

const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  // ** create the express project
  const app = express();

  // ** Middlewares
  app.use(express.json());

  // ** routes
  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`server is running on ${PORT}`);
    // const cityRepo = new CityRepository();
    // const response = await cityRepo.deleteCity(1);
    // console.log(response);
  });
};

setupAndStartServer();
