const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


// iniciando o app
const app = express();
// permita que eu envie dados para minha aplicação com formato
// de json
app.use(express.json());
app.use(cors());

// iniciando o DB
/* local 
mongoose.connect(
	"mongodb://localhost:27017/nodeapi", 
	{ useNewUrlParser: true }
);
*/


// mlab 
mongoose.connect(
	"mongodb://galhardo:galhardo159@ds115931.mlab.com:15931/recomendae",
	{ useNewUrlParser: true }
);


// mlab heroku
/*
mongoose.connect(
	"mongodb://heroku_cqx80h1w:jqq1tm48lhvq9bhi0jdkt82dsq@ds139869.mlab.com:39869/heroku_cqx80h1w",
	{ useNewUrlParser: true }
);
*/

// require('./src/models/Product'); // sem require-dir
requireDir('./src/models'); // com require-dir

// primeira rota
// sem routes.js
// create 
// const Product = mongoose.model('Product');
/*
app.get('/', (req, res) => {
	Product.create({
		title: 'React Native',
		description: 'Build apps',
		url: 'https://alexgalhardo.com',
	});

	return res.send('Teste nodemon');
});
*/

// Rotas
app.use('/recomendae', require('./src/routes'));

// localmente
// app.listen(3001);

// heroku port
app.listen(process.env.PORT || 5000);