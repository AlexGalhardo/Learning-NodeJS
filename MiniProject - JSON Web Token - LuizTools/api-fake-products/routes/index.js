var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/products', function(req, res, next) {
  res.json([{id:1, nome: 'DVD', preco: 10},{id:2, nome: 'Sapato', preco: 50}]);
});

module.exports = router;
