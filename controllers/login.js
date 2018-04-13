
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



var options = {
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'parking',
  };
  
  var sessionStore = new MySQLStore(options);
  var session = require('express-session');
  
  
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    store: sessionStore,
    saveUninitialized: false,
   // cookie: { secure: true }
  }))

    app.use(passport.initialize());
    app.use(passport.session());

  

    app.post('/login', function(req, res) {
        passport.authenticate('local', {
            successRedirect: '/#loginModal',
            failureRedirect:  '/#aboutModal'
        });
    });
    
      app.use(function(req, res, next) { 
          res.locals.isAuthenticated = req.isAuthenticated(); 
          next();
    
      })
        

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


  passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log(username);
      console.log(password);

      const db = require('../models/user.js');

      db.query('SELECT id, password FROM users WHERE username = ?', [username]), 
        function(err, results, fields) {
          if (err) {done(err)};

          if (results.length === 0) { 
            done(null, false);
          } else { 
                const hash= results[0].password.toString();

                 bcrypt.compare(password, hash, function(err, response) { 
                    if(response ===true) { 
                       return done(null, {user_id: results[0].id});
                     } else { 
                        return done (null, false)
                      }
                 });       
                }  
        };
     }
  ));



