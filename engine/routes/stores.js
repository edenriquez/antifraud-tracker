
var express = require('express');
var router = express.Router();

router.get('/stores/:name', function(req, res, next) {
    console.log(req.params.name)
    res.render('store', { storeName: req.params.name });
});

module.exports = router;
  