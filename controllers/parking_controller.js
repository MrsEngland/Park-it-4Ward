var express = require ("express");
var db = require("../models");
var moment = require('moment');
var taskScheduler = require('../utils/expiration_scheduler');

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

    // route to check into a space
    app.put("/api/checkInToSpace", function(req, res) {
        var timeToExpiry = 12;
        var dateFormat = "YYYY-MM-DD HH:mm:ss";
        var currentDate = moment();
        var expirationDate = currentDate.clone().add(timeToExpiry,'h'); // expiration time is 12 hours from now
        
        var updateBody = {
            check_in_time: currentDate.format(dateFormat),
            is_available: false
        };

        db.parking_spaces.findOne({
            where: {
                lot_id: parseInt(req.query.lot_id),
                id: parseInt(req.query.space_id)
            }
          }).then(function(dbParking) {
            handleCheckIn(dbParking);
            //res.json(dbParking);
          }).catch(function(err) {
            res.json(err);
        });

        var handleCheckIn = function(result) {
            var spaceExpirationDBValue = result.expiration_time;
            var dbDateObj = moment(spaceExpirationDBValue, dateFormat);
            
            // if there is an expiration date in the past then set expiration time for the future and schedule expiration
            var isExpired = moment().isAfter(dbDateObj);
            if (isExpired) {
                // update body's expiration date
                updateBody.expirationDate = expirationDate.format(dateFormat);;

                // schedule expiration task
                var expireTask = function() {
                    db.parking_spaces.update({
                        check_in_time: 0,
                        is_available: true
                    }, {
                        where: {
                            lot_id: parseInt(req.query.lot_id),
                            id: parseInt(req.query.space_id)
                        }
                    }).then(function(dbParking) {
                        //res.json(dbParking);
                    }).catch(function(err) {
                        //res.json(err);
                    });
                };
                var taskName = `l${req.query.lot_id}s${req.query.space_id}`;
                taskScheduler.scheduleExpirationTask(taskName, expirationDate, expireTask);
            }

            db.parking_spaces.update(
                updateBody, {
                where: {
                    lot_id: parseInt(req.query.lot_id),
                    id: parseInt(req.query.space_id)
                }
            }).then(function(dbParking) {
                res.json(dbParking);
            }).catch(function(err) {
                res.json(err);
            });
        }.bind(this);
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
                id: parseInt(req.query.space_id)
            }
          }).then(function(dbParking) {
            res.json(dbParking);
          }).catch(function(err) {
            res.json(err);
        });
    });
};