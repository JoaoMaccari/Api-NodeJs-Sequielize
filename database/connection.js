const Sequelize = require("sequelize");

const Connection = new Sequelize('db_sistema_empresarial', 'root', 'meuservidor', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = Connection;