var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require ('cookie-parser');
var expressValidator = require('express-validator');
var MySQLStore = require('express-mysql-session')(session);
var session = require('express-session');
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("./models");
// var bcrypt = require('bcrypt');


var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser())

var options = {
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'parking',
};

var sessionStore = new MySQLStore(options);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  store: sessionStore,
  saveUninitialized: false,
 // cookie: { secure: true }
}))


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(username);
    console.log(password);
    const db = require('./db');

    db.query('SELECT id, password FROM users WHERE username = ?', [username], function( err, results, fields) { 
        if (err) { done(err)};
        if (results.length === 0) { 
          done(null, false)
        }

        const hash = results[0].password.toString();
        
        bcrypt.compare(password, hash, function(err, response) { 
          if (response === true) { 
            return done (null, {user_id: results[0].id});
          }
          else { 
            return done(null, false)
          }
        })
    })
  }
));


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/html-routes.js")(app);
require("./controllers/parking_controller.js")(app);
require("./controllers/register.js")(app);


//syncing our sequelize models and starting our express app
db.sequelize.sync({ force: true }).then(function() {


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  });
});
