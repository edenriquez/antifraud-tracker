var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tracker' });
});

module.exports = router;

'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/antifraud-tracker');
const db_conection = mongoose.createConnection(mongoose) 
module.exports = mongoose;
console.log(mongoose);