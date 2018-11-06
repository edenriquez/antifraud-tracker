
var express = require('express');
var router = express.Router();

router.get('/payment-gateways/:name', function(req, res, next) {
    res.render('payment-gateway', { paymentName: req.params.name });
});

module.exports = router;
  