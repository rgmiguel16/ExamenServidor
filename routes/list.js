var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Estos son todos los coches que tenemos:');
});

module.exports = router;