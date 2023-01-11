const Sequelize = require("sequelize");
const connection = require("../database/database");

const FilamentType = connection.define({
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

//FilamentType.sync({force: true});

module.exports = FilamentType;