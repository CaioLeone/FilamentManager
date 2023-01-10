const Sequelize = require("sequelize");
const connection = require("../database/database");

const Filament = connection.define({
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

module.exports = Filament;