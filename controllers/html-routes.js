var db = require("../models");

var path = require("path");

module.exports = function(app) {
    //index route loads index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  //about route loads about.html
  // app.get("/about", function(req, res) {
  //   res.sendFile(path.join(__dirname, "about.html"));
  // });
  
  //register route loads register.html
  // app.get("/register", function(req, res) {
  //   res.sendFile(path.join(__dirname, "register.html"));
  // });
  
  //parking route loads parking.html
<<<<<<< HEAD
  app.get("/register", authenticationMiddleware(), function(req, res) {
    res.sendFile(path.join(__dirname, "parking.html"));
=======

  app.get("/parking", authenticationMiddleware(), function(req, res) {
      res.render('parking', {layout: false})
>>>>>>> 7e0229f2463c803f21aea367d9f33371d5b66fe2
  });
  
  app.get("/logout"), function (req, res) { 
    req.logout();
    req.session.destroy(); 
    res.sendFile(path.join(__dirname, "index.html"))
  }
  
  //leaving route loads leaving.html
  // app.get("/leaving", function(req, res) {
  //   res.sendFile(path.join(__dirname, "leaving.html"));
  // });
  
  app.get("/api", function(req, res) {
    res.json();
  });
  
  app.get('/profile'), authenticationMiddleware(), function (req, res) { 
    res.render('profile', {title: 'Profile'})
  }

};

function authenticationMiddleware() { 
  return (req,res, next) => { 
    console.log (
      'req.session.passport.user: $(JSON.stringify(req.session.passport)}')
      if (req.isAuthenticated()) return next();
      
      res.redirect('/login')
  }
}