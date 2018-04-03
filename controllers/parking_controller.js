var express = require ("express");
var db = require("../models");

module.exports = function(app) {

//route to get all parking spaces
app.get("/api/getParkingSpaces", function(req, res) {
    db.Parking.findAll({
        where: {
            id: req.body.lot_id
        }
        }).then(function(dbParking) {
            res.json(dbParking);
        });
});

//route to check into a space
app.put("/api/checkInToSpace", function(req, res) {
    db.Parking.update(req.body, 
    {
        where: {
            id: req.body.lot_id,
            id: req.body.space_id
        }
    })
    .then(function(dbParking) {
        res.json(dbParking);
    })
    .catch(function(err) {
        res.json(err);
    });
});

//route to check out of a space
app.put("/api/checkOutOfSpace", function(req, res) {
    db.Parking.update(req.body,
    {
        where: {
            id: req.body.lot_id,
            id: req.body.space_id
        }
    })
    .then(function(dbParking) {
        res.json(dbParking);
    })
    .catch(function(err) {
        res.json(err);
    });
});

};