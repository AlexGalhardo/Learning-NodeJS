var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var db = require("../models/db");
    db.findClientes(function(err, docs){
        if(err) {
            res.status(500);
            res.json(err);
        }
        res.json(docs);
    })
})

router.get('/:id', function(req, res, next){
    var db = require("../models/db");
    db.findCliente(req.params.id, function(err, docs){
        if(err) {
            res.status(500);
            res.json(err);
        }
        res.json(docs);
    })
})

router.post('/', function(req, res, next){
    var db = require("../models/db");
    var nome = req.body.nome;
    var idade = parseInt(req.body.idade);
    db.insertCliente({nome, idade}, function(err, docs){
        if(err) {
            res.status(500);
            res.json(err);
        }

        res.status(201);
        res.json(docs);
    })
})

router.put('/:id', function(req, res, next){
    var db = require("../models/db");
    var nome = req.body.nome;
    var idade = parseInt(req.body.idade);
    db.updateCliente(req.params.id, {nome, idade}, function(err, docs){
        if(err) {
            res.status(500);
            res.json(err);
        }

        res.status(200);
        res.json(docs);
    })
})

router.patch('/:id', function(req, res, next){
    var db = require("../models/db");

    var cliente = {};

    if(req.body.nome) cliente.nome = req.body.nome;
    if(req.body.idade) cliente.idade = parseInt(req.body.idade);

    db.updateDadosCliente(req.params.id, cliente, function(err, docs){
        if(err) {
            res.status(500);
            res.json(err);
        }

        res.status(200);
        res.json(docs);
    })
})

router.delete('/:id', function(req, res, next){
    var db = require("../models/db");
    db.deleteCliente(req.params.id, function(err, docs){
        if(err) {
            res.status(500);
            res.json(err);
        }

        res.status(200);
        res.json(docs);
    })
})

module.exports = router;