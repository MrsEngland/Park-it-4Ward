
var authController = require('../controllers/authcontroller.js');
var express = require("express");
var app = module.exports = express(); 
//some app/middleware setup, etc, including 






module.exports = function(app, passport) {

app.get('/register', authController.register);


app.get('/login', authController.login);


app.post('/register', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signup'}
                                                    ));


app.get('/dashboard',isLoggedIn, authController.dashboard);


app.get('/logout',authController.logout);


app.post('/login', passport.authenticate('local-signin',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/#aboutModal'}
                                                    ));


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/register');
}


}
