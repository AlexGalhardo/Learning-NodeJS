const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

	async index(req, res) {
		// versão sem mongoose-paginate
		const products = await Product.find();
		
		// desestruração do ES6
		// pego o parametro page vindo pela requisição
		// GET do HTTP
		// = 1 é o valor padrão do paramêtro page
		// http://localhost/api/products?page=2
		// const { page = 1 } = req.query;
		// const products = await Product.paginate({}, { page = 1, limit: 10 });

		return res.json(products);
	},

	async show(req, res){
		const product = await Product.findById(req.params.id);
	
		return res.json(product);
	},

	async store(req, res){
		// CREATE
		const product = await Product.create(req.body);
	
		return res.json(product);
	},

	async update(req, res){
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
		// o new: true, é necessário
		// se caso não ouver, ele devolve o produto ANTES de atualizar ele
		
		return res.json(product);
	},

	async destroy(req, res){
		const product = await Product.findByIdAndRemove(req.params.id);
	
		return res.send();
	}
};