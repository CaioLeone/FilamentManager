const Sequelize = require("sequelize");
const connection = require("../database/database");

const Material = connection.define({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true        
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false
    },
    weight:{
        type: Sequelize.INTEGER,
        allowNull: false
    } 
});
//Filament.sync({force: true});

module.exports = Material;