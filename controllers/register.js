
var fs = require("fs");
var express = require('express')
var path = require("path");
var sequelize = require("sequelize")
var cookieParser = require ('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var mysql = require('mysql');

var session = require ('express-session')
var passport = require ('passport')
var LocalStrategy = require('passport-local').Strategy;
var api = express.Router();

var MySQLStore = require('express-mysql-session')
var db = require("../models");
var bcrypt = require('bcrypt');
var app = express(); 
// Generate a salt
var salt = bcrypt.genSaltSync(10);
// Hash the password with the salt
var hash = bcrypt.hashSync("my password", salt);

var express = require('express');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(expressValidator()); 
app.use(cookieParser())


app.use(passport.initialize());
app.use(passport.session());



module.exports = function(app) {
  //looks like all of this is in his index.js


  app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;
  
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

  app.post('/register', function(req, res, next){ 
    req.checkBody('username', 'Username field cannot be empty.').notEmpty();
    req.checkBody('username', 'Username must be between 4-15 characters long.').len(4, 15);
    req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
    req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
    req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
    req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
    req.checkBody('passwordMatch', 'Password must be between 8-100 characters long.').len(8, 100);
    req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);
    req.checkBody('username', 'Username can only contain letters, numbers, or underscores.').matches(/^[A-Za-z0-9_-]+$/, 'i');
  
    var errors = req.validationErrors();
    if (errors) {
      res.send(errors);
      return;
    } else {
 
  
  res.json({ message: 'Success' });


  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

 

const db = require('../config/connection.js');



bcrypt.hash(password, 4, function(err, hash) {
db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], function (  
  error, results, fields) { 
      if(error) throw error;

      db.query('SELECT LAST_INSERT_ID() as user_id', function (error, results, fields) { 
          if (error) throw error;


          const user_id = results[0];

          req.login(results[0], function (err){ 
            console.log(password, username)

          })
      })

      })
  });
}
});
}