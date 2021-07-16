var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('new', { title: 'Novo Cliente', cliente: {} });
});

router.get('/:id', function(req, res, next) {
    var db = require("../models/db");
    db.findCliente(req.params.id, function(err, doc){
        if(err) return console.log(err);
        res.render('new', { title: 'Editar Cliente', cliente: doc });
    })
});

router.post('/', function(req, res, next){
    console.log(req.body);
    var id = req.body.id;
    var nome = req.body.nome;
    var idade = parseInt(req.body.idade);
    var db = require("../models/db");

    if(id != ""){
        db.updateCliente(id, { nome, idade }, function(err, result){
            if(err) return console.log(err);
            res.redirect('/');
        })
    }else{
        db.insertCliente({ nome, idade }, function(err, result){
            if(err) return console.log(err);
            res.redirect('/');
        })
    }
})

module.exports = router;
