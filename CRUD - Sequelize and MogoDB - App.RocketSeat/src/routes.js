const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// sem controllers 
/*
routes.get('/', (req, res) => {
	/*
	Product.create({
		title: 'React Native',
		description: 'Build apps',
		url: 'https://alexgalhardo.com',
	});

	return res.send('Teste nodemon');
});
*/

// acessar /api/products

// LER TODOS OS DADOS CADASTRADOS
routes.get('/games', ProductController.index);

// BUSCAR DADO COM ID ESPECÍFICO
routes.get('/games/:id', ProductController.show);

// METODO CREATE
routes.post('/games', ProductController.create);

// UPDATE DADO
routes.put('/games/:id', ProductController.update);

// DELETE DADO
routes.delete('/games/:id', ProductController.delete);

module.exports = routes;