
var express = require('express');
var router = express.Router();

router.get('/stores/:name', function(req, res, next) {
    res.render('store', { storeName: req.params.name });
});

module.exports = router;
  