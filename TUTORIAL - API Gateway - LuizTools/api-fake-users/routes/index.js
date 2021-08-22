var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.json([{id:1, nome: 'Luiz', idade: 29},{id:2, nome: 'Fernando', idade: 29}]);
});

module.exports = router;
