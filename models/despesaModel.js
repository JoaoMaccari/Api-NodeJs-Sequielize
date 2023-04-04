const Sequelize = require("sequelize");
const connection = require("../database/connection");

const Despesa = connection.define("despesas", {
    quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    produto: {
        type:Sequelize.STRING(155),
        allowNull:false
    },
    valor:{
        type:Sequelize.DECIMAL(10,2),
        allowNull:false
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    }

});

//Despesa.sync({force:true})




module.exports = Despesa;