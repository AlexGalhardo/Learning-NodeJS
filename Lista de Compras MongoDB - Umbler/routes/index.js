var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	global.db.findAll((e, docs) => {
		if(e) { return console.log(e); }
		res.render('index', { docs });
	})
})

/* POST new page. */
router.post('/', function(req, res, next) {
	const id = req.body.id;
	const nome = req.body.nome;
	const quantidade = parseInt(req.body.quantidade);
	if(id){
		global.db.updateOne(id, {nome, quantidade}, (err, result) => {
			if(err) { return console.log(err); }
			res.redirect('/');
		})
	} else {
		global.db.insert({nome, quantidade}, (err, result) => {
			if(err) { return console.log(err); }
			res.redirect('/');
		})
	}
});

/* GET delete page. */
router.get('/delete/:id', function(req, res) {
	var id = req.params.id;
	global.db.deleteOne(id, (e, r) => {
		if(e) { return console.log(e); }
		res.redirect('/');
	});
});

module.exports = router;
