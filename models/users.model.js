const { DataTypes } = require("sequelize");
const sequelize = require("./instacia.bd/foros.instacia.js");

const users = sequelize.define("users", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    user:{
        type: DataTypes.STRING
    }, 
    role:{
        type: DataTypes.STRING
    }
    
})

module.exports = users