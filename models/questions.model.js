const { DataTypes } = require("sequelize");
const sequelize = require("./instacia.bd/foros.instacia.js");

const questions = sequelize.define("questions", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    question:{
        type: DataTypes.STRING
    },
    classification:{
        type: DataTypes.INTEGER
    }
    
})

module.exports = questions
