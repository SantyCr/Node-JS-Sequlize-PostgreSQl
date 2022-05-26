const { DataTypes } = require("sequelize");
const sequelize = require("./instacia.bd/foros.instacia.js");

const answers = sequelize.define("answers", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    response:{
        type: DataTypes.STRING
    },
    classification:{
        type: DataTypes.INTEGER
    }
    
})

module.exports = answers
