var db = require("../models");

var path = require("path");

module.exports = function(app) {
    //index route loads index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  //about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "about.html"));
  });
  
  //register route loads register.html
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "register.html"));
  });
  
  //parking route loads parking.html
  app.get("/parking", function(req, res) {
    res.sendFile(path.join(__dirname, "parking.html"));
  });
  
  //leaving route loads leaving.html
  app.get("/leaving", function(req, res) {
    res.sendFile(path.join(__dirname, "leaving.html"));
  });
  
  app.get("/api", function(req, res) {
    res.json();
  });
  
};