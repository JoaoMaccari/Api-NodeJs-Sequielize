const Sequelize = require("sequelize");

const Connection = new Sequelize('Sistema', 'root', 'meuservidor', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = Connection;