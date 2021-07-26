const express = require('express');

const ManicureController = require('./controllers/ManicureController');
const LocationController = require('./controllers/LocationController');


const routes = express.Router();

// Rota base, apenas para verificar se está funcionando
routes.get('/', (req, res) => {
    return res.json({
        message: "It's Work!"
    });    
});


// [HTTP:POST] -> http://localhost:3333/manicures

// Manicures
routes.get('/manicures', ManicureController.index);
routes.post('/manicures', ManicureController.store);
routes.get('/manicures/:id', ManicureController.getManicure);
// routes.delete('/manicures/:id', ManicureController.deleteManicure);

// APi RestFull  
// CRUD -> CREATE, READ, UPDATE, DELETE 
routes.get('/locations', LocationController.index);
routes.post('/locations', LocationController.store);
routes.put('/locations/:id', LocationController.update);
routes.delete('/locations/:id', LocationController.delete);

/*
// Locais
routes.get('/locais', ManicureController.getAllLocais);
routes.post('/locais', ManicureController.storeLocation);




routes.get('/delete_all', ManicureController.deleteAll);
*/


module.exports = routes;