const { Sequelize } = require('sequelize');
const sequelize = require('../db/connection');

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
            model: 'provider',
            key: 'id'
        }
    }
}, {
    freezeTableName: true
})

Product.sync({ force: true });

module.exports = Product;