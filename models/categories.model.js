const { DataTypes } = require("sequelize");
const sequelize = require("./instacia.bd/foros.instacia.js");

const categories = sequelize.define("categories", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    category:{
        type: DataTypes.STRING
    }
})

module.exports = categories