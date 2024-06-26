const express = require("express");

const { PORT } = require("./config/serverConfig");

const CityRepository = require("./repository/city-repository");

const CityService = require("./service/city-service");

const db = require("./models/index");
const sequelize = require("sequelize");

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

    // console.log(process.env.SYNC_DB);

    if (!process.env.SYNC_DB) {
      db.sequelize.sync({
        alert: true,
      });
    }
  });
};

setupAndStartServer();


