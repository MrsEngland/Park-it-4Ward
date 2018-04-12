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

  app.get("/parking"/*, authenticationMiddleware()*/, function(req, res) {

    var pretendData = {
      layout: false,
      lot: [{
              lotName: "Mega Lot",
              parkingSpace: [{
                                spaceNumber: 1,
                                timeRemaining: "5 min"
                              },
                              {
                                spaceNumber: 2,
                                timeRemaining: "10 min"
                              }]
            },
            {
              lotName: "Super Duper Lot",
              parkingSpace: [{
                                spaceNumber: 1,
                                timeRemaining: "20 min"
                            }]

            }]
    }
      res.render('parking', pretendData)
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