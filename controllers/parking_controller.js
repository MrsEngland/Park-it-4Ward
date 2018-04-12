var express = require ("express");
var db = require("../models");
var moment = require('moment');

module.exports = function(app) {
    //route to get all parking spaces
    app.get("/api/getParkingSpaces", function(req, res) {
        db.parking_spaces.findAll({
            where: {
                lot_id: parseInt(req.query.lot_id)
            }
        }).then(function(dbParking) {
            res.json(dbParking);
        }).catch(function(err) {
            res.json(err);
        });
    });

    app.get("/api/getAvailableParkingSpaces", function(req, res) {
        var whereClause = {
            where: {
                is_available: true
            }
        };

        if (req.query.lot_id) {
            whereClause.where.lot_id = parseInt(req.query.lot_id)
        }

        db.parking_spaces.findAll(whereClause).then(function(dbParking) {
            res.json(dbParking);
        }).catch(function(err) {
            res.json(err);
        });
    });

    //route to check into a space
    app.put("/api/checkInToSpace", function(req, res) {
        var timeToExpiry = 1;
        var dateFormat = "YYYY-MM-DD HH:mm:ss";
        var currentDate = moment();
        var expirationDate = currentDate.add(timeToExpiry,'h').format(dateFormat);  // expiration time is 1 hour from now
        db.parking_spaces.update({
            check_in_time: currentDate.format(dateFormat),
            expiration_time: expirationDate,
            is_available: false
          }, {
            where: {
                lot_id: parseInt(req.query.lot_id),
                space_id: parseInt(req.query.space_id)
            }
          }).then(function(dbParking) {
            res.json(dbParking);
          }).catch(function(err) {
            res.json(err);
        });
    });

    //route to check out of a space
    app.put("/api/checkOutOfSpace", function(req, res) {
        db.parking_spaces.update({
            check_in_time: 0,
            expiration_time: 0,
            is_available: true
          }, {
            where: {
                lot_id: parseInt(req.query.lot_id),
                space_id: parseInt(req.query.space_id)
            }
          }).then(function(dbParking) {
            res.json(dbParking);
          }).catch(function(err) {
            res.json(err);
        });
    });
};