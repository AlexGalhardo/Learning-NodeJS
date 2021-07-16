// pego o modulo express na variável express
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// instancio esse módulo na variável app
// iniciando o app
const app = express();

// diz para minha aplicação app
// para que seja possível enviar dados pelas requisições HTTP
// no formato JSON
app.use(express.json());
app.use(cors()); // deixar a api ser acessada publicamente?

// iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodepai', 
	{ useNewUrlParser: true }
);
//requireDir('./src/models');
require('./src/models/Product');

/**
 * versão sem routes.js
 */
//const Product = mongoose.model('Product');
/*
app.get('/', (req, res) => {
	Product.create({ 
		title: 'Alex Galhardo',
		description: 'Feito por Alex Galhardo',
		url: 'https://galhardoo.com'
	});

	return res.send('Hello Xande');
});
*/

// routes
// .use() é um coringa, recebe todos os tipos de requisição
app.use('/api', require('./src/routes'));

// o método listen informa em que porta será criado esse servidor
app.listen(3001);