const express = require("express");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {

  // ** create the express project
  const app = express();

  // ** Middlewares
  app.use(express.json());
  
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
};

setupAndStartServer();







