const { Sequelize } = require('sequelize');
const sequelize = require('../db/connection');
const Provider = require('./Provider');

const Product = sequelize.define('Product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    provider_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Provider,
            key: 'id'
        }
    }
}, {
    freezeTableName: true
});

module.exports = Product;