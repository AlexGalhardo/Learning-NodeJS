const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
	// mostrar todos os dados cadastrados
	async index(req, res) {
		const { page = 1 } = req.query;
		// const products = await Product.find(); // sem mongoose-paginate
		// const products = await Product.paginate({}, {page: 1, limit: 10}); // com mongoose-paginate, sem page definida
		const products = await Product.paginate({}, {page, limit: 10}); // com mongoose-paginate, com page definida
		
		return res.json(products);
	},


   // buscar dado com ID específico
	async show(req, res) {
		const product = await Product.findById(req.params.id);

		return res.json(product);
	},

    // req possui todos os dados da requisição
    // res é a resposta da requisição
    // req.body possui todos os dados da requisição, como "title", "descritipn" e "url"
	async create(req, res) {
		// CREATE
		const product = await Product.create(req.body);
	
		return res.json(product);
	},

	// new: true diz para o mongoose para retornar o produto com os dados já atualizados
	async update(req, res) {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
		
		return res.json(product);
	},

	async delete(req, res) {
		await Product.findByIdAndRemove(req.params.id);

		return res.send(); // retorna uma resposta de sucesso sem nenhum conteúdo
	}
};