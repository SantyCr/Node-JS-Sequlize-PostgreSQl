const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize("foros", "postgres","1234", {
    host:"localhost",
    dialect:"postgres"
})
module.exports = sequelize; 
