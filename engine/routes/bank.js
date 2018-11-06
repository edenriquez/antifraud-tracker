
var express = require('express');
var router = express.Router();

router.get('/banks/:name', function(req, res, next) {
    res.render('bank', { bankName: req.params.name });
});

module.exports = router;
  