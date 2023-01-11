const Sequelize = require("sequelize");
const connection = require("../database/database");

const ResinType = connection.define({
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

//ResinType.sync({force: true});

module.exports = ResinType;