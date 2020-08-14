var express = require('express');
var router = express.Router();
var crypto = require("../helper/crypto");
var config = require("../config/general");
let jwt = require('jsonwebtoken');
var user = require('../models/user');
const {
    check,
    validationResult
} = require('express-validator');

router.post('/login', function(req, res) {

    var email = req.body.email;
    var password = req.body.password;

    if (email && password) {

        user.where('email').equals(email).exec(function(err, userval) {
            if (err) {
                return res.json({
                    success: false,
                    msg: 'Error'
                });
            }
            if (userval.length > 0) {

                userval = userval[0];
                if (password === crypto.decrypt(userval.password)) {

                    let token = jwt.sign({
                        sub: userval.id,
                        a: crypto.encrypt(userval.id),
                        b: crypto.encrypt(userval.email)
                    },
                    config.jwtSecret, {
                        algorithm: "HS256",
                        expiresIn: "4h"
                    });

                    let returnedVals = {};
                    returnedVals.token = token;
                    returnedVals.id = userval._id;
                    returnedVals.userName = userval.userName;
                    returnedVals.email = userval.email;
                    res.json(returnedVals);
                } else {
                    return res.status(422).json({
                        success: false,
                        errors: [{
                            msg: "Wrong password. Try again or click forgot password to reset it."
                        }]
                    });
                }
            } else {
                return res.json({
                    success: false,
                    msg: 'User Not found'
                });
            }
        });
    } else {
        return res.json({
            success: false,
            msg: 'Error'
        });
    }
});

router.post('/signup', [
    check('userName', "Invalid User Name.").not().isEmpty(),
    check('email', "Invalid Email").not().isEmpty().isEmail().withMessage('Invalid Email address.').normalizeEmail(),
    check('password', "Invalid Password").not().isEmpty(),
], function(req, res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    var userRec = new user({
        userName: req.body.userName,
        email: req.body.email.toLowerCase(),
        password: crypto.encrypt(req.body.password)
    });

    userRec.save(function(err, returnedVals) {
        if (err) {
            return res.json({
                success: false,
                msg: 'Error'
            });
        }
        res.json({
            success: true,
            msg: 'Successfully Registered.'
        });
    });
});

module.exports = router;