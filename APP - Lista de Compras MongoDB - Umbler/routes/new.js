var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('new', { title: 'Novo Cadastro', item: {_id: '', nome: '', quantidade:0} });
});

/* POST new page. */
router.post('/', function(req, res, next) {
	const nome = req.body.nome;
	const quantidade = parseInt(req.body.quantidade);
	global.db.insert({nome, quantidade}, (err, result) => {
		if(err) { return console.log(err); }
		res.redirect('/');
	})
});

router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	global.db.findOne(id, (err, item) => {
		if(err) { return console.log(err); }
		res.render('new', { title: 'Editar Cadastro', item });
	})
});

module.exports = router;