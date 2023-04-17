const Sequelize = require("sequelize");
const connection = require("../database/connection");
const moment = require('moment');

const Venda = connection.define('vendas', {
    cliente:{
        type: Sequelize.STRING(155),
        allowNull: false
    },quantidade:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    },
    produto: {
        type: Sequelize.STRING(155),
        allowNull: false
    },milheiro: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    recebeu: {
        type: Sequelize.STRING(155),
        allowNull: false
    },
    valorVenda: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        timestamp: false,

        get: function() { // or use get(){ }
            return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY')
        }

    },updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },
    
    
})

//Venda.sync({force:true})
module.exports = Venda; 