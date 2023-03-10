require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const {characterModels} = require("./models/Character.js")




const sequelize = new Sequelize('rickandmorty', `postgres`, `olivia123`, 
   {
    host:"localhost",
    dialect:"postgres",
   }
  );

characterModels(sequelize)

module.exports = {

sequelize,

};