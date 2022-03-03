var express = require('express');
var router = express.Router();

/* GET annadircoches listing. */
router.get('/', function(req, res, next) {
  res.render('annadir');
});

module.exports = router;