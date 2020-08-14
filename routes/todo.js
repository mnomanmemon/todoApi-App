var express = require('express');
var router = express.Router();
var jwtMiddle = require("../middleware/jwt");
var items = require('../models/items');
const {
    check,
    validationResult
} = require('express-validator');

router.get('/items', jwtMiddle.checkToken, function (req, res){

    items.find({}).exec(function(err, returnedVals) {
        if (err) {
            return res.json({
                success: false,
                msg: 'Error'
            });
        }
        res.json(returnedVals);
    });
});

router.get('/item/:id', jwtMiddle.checkToken, function (req, res) {
    
    var id = req.params.id;
        if (id) {
        items.findById(id, function(err, returnedVals) {
            if (err) {
                return res.json({
                    success: false,
                    msg: 'Error'
                });
            }
            res.json(returnedVals);
        });
    }
    else{
        return res.json({
            success: false,
            msg: 'id required'
        });
    }
});

router.post('/item', [
    check('note', "Item Note is required.").not().isEmpty(),
], jwtMiddle.checkToken, function (req, res){
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    var item = new items({
        message: req.body.note
    });

    item.save(function(err, returnedVals) {
        if (err) {
            return res.json({
                success: false,
                msg: 'Error'
            });
        }
        res.json({
            success: true,
            msg: 'Successfully Added.'
        });
    });
});

router.put('/item', [
    check('note', "Item Note is required.").not().isEmpty(),
    check('id', "Item ID is required.").not().isEmpty().trim().escape(),
], jwtMiddle.checkToken, function (req, res){

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    var id = req.body.id;
    if (id) {
        items.findById(id, function(err, returnedVals) {
            if (err) {
                return res.json({
                    success: false,
                    msg: 'Error'
                });
            }
            if(returnedVals){
                returnedVals.message = req.body.note;
                returnedVals.save(function(err, newReturnedVals) {
                    if (err) {
                        return res.json({
                            success: false,
                            msg: 'Error'
                        });
                    }
                    res.json({
                        success: true,
                        msg: 'Successfully Updated.'
                    });
                });
            }
            else{
                return res.status(422).json({
                    success: false,
                    errors: [{
                        msg: "Invalid Item Id."
                    }]
                });
            }
            
        });
    }
    else{
        return res.json({
            success: false,
            msg: 'id required'
        });
    }
});

router.delete('/item/:id', jwtMiddle.checkToken, function (req, res){
    var id = req.params.id;
    if (id) {
        items.findByIdAndRemove(id, function(err, returnedVals) {
            if (err) {
                return res.json({
                    success: false,
                    msg: 'Error'
                });
            }
            res.json({
                success: true,
                msg: 'Successfully Deleted.'
            });
        });
    }
    else{
        return res.json({
            success: false,
            msg: 'id required'
        });
    }     
})

module.exports = router;