const { Sequelize } = require('sequelize'); 
const sequelize = require('../db/connection');

const Provider = sequelize.define('Provider', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

//Provider.sync({force: true})

module.exports = Provider;