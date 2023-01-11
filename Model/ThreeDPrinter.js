const Sequelize = require("sequelize");
const connection = require("../database/database");

const ThreeDPrinter = connection.define({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true        
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

//ThreeDPrinter.sync({force: true});

module.exports = ThreeDPrinter;