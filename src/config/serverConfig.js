const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT:process.env.PORT
}





class UserController{
    constructor(dataModel){
        this.dataModel = dataModel;
    }

    async create(data){
        
    }
}