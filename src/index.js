const express = require("express");

const {PORT} = require("./config/serverConfig")



const setupAndStartServer = async() => {

  // ** create the express project
  const app = express();
  const PORT = process.env.PORT || 3000;


  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });

}

setupAndStartServer();



