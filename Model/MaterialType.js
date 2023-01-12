const Sequelize = require("sequelize");
const connection = require("../database/database");

const MaterialType = connection.define({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true        
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

//MaterialType.sync({force: true});

module.exports = MaterialType;