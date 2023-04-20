const Sequelize = require("sequelize");
const connection = require("../database/connection");
const moment = require("moment");

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
        type: Sequelize.DATEONLY,
        timestamp: false,

        get: function() { // or use get(){ }
            return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY')
        }
    },updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
    }

});

//Despesa.sync({force:true})




module.exports = Despesa;