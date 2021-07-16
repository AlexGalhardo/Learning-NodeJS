const express = require('express');
const routes = express.Router();


// chamo o método .get() desta instância
// o módulo recebe 2 parâmetros
// o primeiro, é a rota da requisição
// o segundo, são 2 objetos 
// req -> requisição
// res -> resposta da requisição
// app.get('/', (req, res) => {
// http://localhost/api
routes.get('/', (req, res) => {

    // criar novo produto direto no controller
    // não é o ideal
	//Product.create({ 
	//	title: 'Alex Galhardo',
	//	description: 'Feito por Alex Galhardo',
	//	url: 'https://galhardoo.com'
	//});

	return res.send('Hello Xande');
});

// http://localhost/api/products
const ProductController = require('./controllers/ProductController');


routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;