const mongoose = require('mongoose');
const Post = mongoose.model('Post');


exports.userMiddleware = (req, res, next) => {
	let info = {name: 'alex', id: 123};
	req.userInfo = info;
	next();
};

exports.index = async (req, res) => {
	// renderizar mustache template
	let responseJson = {
		'nome': 'alex',
		'last_name': req.query.last_name,
		'idade': 22,
		'mostrar': true,
		'ingredientes': [
			{nome: 'arroz', qt: '20g'},
			{nome: 'macarrao', qt: '30g'}
		],
		userInfo: req.userInfo,
		interesses: ['nodejs', 'js', 'php'],
		texto_puro:'<strong>testando html strong</strong>',
		texto_html:'<strong>testando html strong</strong>',
		header_title: 'header title',
		posts:[],
		tags:''
	};

	// verificar se usuário está logado
	console.log(req.user);

	responseJson.tag = req.query.t;
	const postFilter = (typeof responseJson.tag != 'undefined') ? { tags:responseJson.tag } : {};

	// console.log(typeof responseJson.tag);

	const tagsPromise = Post.getTagsList();
	// sem postSchema.statics.findPosts ficaria:
	const postsPromise = Post.find(postFilter).populate('author');
	// const postsPromise = Post.findPosts(postFilter);

	const [ tags, posts ] = await Promise.all([ tagsPromise, postsPromise ]);

	console.log(posts);

	// const tags = result[0];
	// const posts = result[1];

	for(let i in tags){
		if(tags[i]._id == responseJson.tag){
			tags[i].class = "selected";
		}
	}

	responseJson.tags = tags;
	// console.log(tags);
	responseJson.posts = posts;

	res.render('home', responseJson);
};
