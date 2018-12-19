
var express = require('express');
var router = express.Router();

router.get('/user/:id/:auth', function(req, res, next) {
    res.render('profile', { storeName: req.params.name });
});

module.exports = router;
  