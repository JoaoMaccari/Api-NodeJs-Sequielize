const Sequelize = require("sequelize");
const connection = require("../database/connection")

const Game = connection.define('games', {
    title:{
        type: Sequelize.STRING(155),
        allowNull: false
    },ano:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    preco: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },

})


// Game.sync({force:true})
module.exports = Game;