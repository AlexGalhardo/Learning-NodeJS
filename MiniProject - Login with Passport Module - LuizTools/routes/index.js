var express = require('express');
var router = express.Router();
var db = require("../db");

/* GET home page. */
router.get('/:pagina?', global.authenticationMiddleware(), function(req, res, next) {
  const pagina = parseInt(req.params.pagina || "1");
  db.countAll((err, qtd) => {
    if(err) return console.log(err);
    const qtdPaginas = Math.ceil(qtd / db.TAMANHO_PAGINA);

    db.findAllUsers(pagina, (err, docs) => {
      if(err) return console.log(err);
      res.render('index', { title: req.user.username, docs, qtd, qtdPaginas, pagina, profile: req.user.profile });
    })
  })
});

module.exports = router;
