"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};
var expressValidator = require('express-validator');
var cookieParser = require ('cookie-parser')

var session = require('express-session');
var MySQLStore = require('express-mysql-session')


// var bcrypt = require('bcrypt');
// const saltRounds = 10;

if(config.use_env_variable){
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
}else{
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// establish 1:n relationship between parking lots and parking spaces
db.parking_lots.hasMany(db.parking_spaces);
db.parking_spaces.belongsTo(db.parking_lots);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;