const mongoose = require('mongoose');
const slug = require('slug');
const Post = mongoose.model('Post');

exports.view = async (req, res) => {
	const post = await Post.findOne({ slug:req.params.slug });
	res.render('view', { post });
};

exports.add = (req, res) => {
	res.render('postAdd');
};

exports.addAction = async (req, res) => {
	req.body.tags = req.body.tags.split(',').map(tag=>tag.trim());
	// res.json(req.body);
	req.body.author = req.user._id;
	const post = new Post(req.body);
	// post.tags = []
	try {
		await post.save();
	} catch(error) {
		req.flash('error', 'ERRO: ' + error.message);
		return res.redirect('/post/add');
	}

	req.flash('success', 'Post salvo com sucesso!');
	res.redirect('/home');
};

exports.edit = async (req, res) => {
	// pegar as informações do post em questão
	const post = await Post.findOne({ slug: req.params.slug });
	// carregar o formulário de edição
	res.render('postEdit', { post:post });
};

exports.editAction = async (req, res) => {
	
	req.body.tags = req.body.tags.split(',').map(tag=>tag.trim());
	req.body.slug = slug(req.body.title, {lower:true});

	try {
		// procurar item enviado
		const post = await Post.findOneAndUpdate(
			{ slug:req.params.slug }, 
			req.body, 
			{
				new:true, // retornar NOVO item atualizado
				runValidators: true // verifica os valores enviados
			}
		);
	}
	catch(error) {
		req.flash('error', 'ERRO: ' + error.message);
		return res.redirect('/post/'+req.params.slug+'/edit');	
	};
	// pegar os dados e atualizar
	req.flash('success', 'post atualizado com sucesso!');

	res.redirect('/home');
};
