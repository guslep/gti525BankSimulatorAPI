var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({transactionNumber:'123456789'});
});

module.exports = router;
