const Sequelize = require ('sequelize');
const database = require ('../db');

const symbolModel = database.define('symbol', {
    symbol: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    basePrecision: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quotePrecision: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    minNotional: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    minLoteSize: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    isFavorite: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    CreatedAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})

module.exports = symbolModel;
