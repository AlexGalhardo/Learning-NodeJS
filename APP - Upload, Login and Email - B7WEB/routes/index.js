const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

const imageMiddleware = require('../middlewares/imageMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// ROTAS
const router = express.Router();

http://localhost:7777/?nome=alex&last=galhardo
router.get('/', (req, res) => {
	// http://localhost:7777/?nome=alex&last=galhardo
	// req.query.nome;
	// req.query.last;
	let name = req.query.nome;
	let last_name = req.query.last;

	let resposta = {nomeCompleto:name + ' ' + last_name};
	res.json(resposta);

	// res.send('olá, ' + req.query.nome);
});


// http://localhost:7777/api/?nome=alex&last=galhardo&idade=22
router.get('/api', (req, res) => {
	// GET: req.query
	// POST: req.body
	// PARAMS DA URL: req.params
	// SEND
	// JSON
	res.json(req.query);
});

// http://localhost:7777/posts/15
router.get('/posts/:id', (req, res)=>{
	let id = req.params.id;

	res.send('ID do post: ' + id);
});

// // http://localhost:7777/slug/seja-bem-vindo
router.get('/slug/:slug', (req, res)=>{
	let slug = req.params.slug;
	// titulo: seja bem vindo
	// slug: seja-bem-vindo
	res.send('SLUG é: ' + slug);
});

router.get('/sobre', (req, res) => {
	res.send('página SOBRE');
});


// // http://localhost:7777/template/?last_name=galhardo
router.get('/template', (req, res) => {
	// renderizar mustache template
	res.render('home', {
		'nome': 'alex',
		'last_name': req.query.last_name,
		'idade': 22,
		'mostrar': true,
		'ingredientes': [
			{nome: 'arroz', qt: '20g'},
			{nome: 'macarrao', qt: '30g'}
		],
		interesses: ['nodejs', 'js', 'php'],
		texto_puro:'<strong>testando html strong</strong>',
		texto_html:'<strong>testando html strong</strong>',
		header_title: 'header title'
	});
	/** OU
	let obj = {
		'nome': 'alex',
		'idade': 22
	}
	res.render('home', obj);
	**/
});

router.get('/home', homeController.userMiddleware, homeController.index);

router.get('/users/login', userController.login);
router.post('/users/login', userController.loginAction);
router.get('/users/logout', userController.logout);

router.get('/users/register', userController.register);
router.post('/users/register', userController.registerAction);

router.get('/users/forget', 
	userController.forget
);
router.post('/users/forget',
	userController.forgetAction
);
router.get('/users/reset/:token',
	userController.forgetToken
);
router.post('/users/reset/:token',
	userController.forgetTokenAction
);

router.get('/profile', 
	authMiddleware.isLogged,
	userController.profile
);
router.post('/profile', 
	authMiddleware.isLogged,
	userController.profileAction
);

router.post('/profile/password',
	authMiddleware.isLogged,
	authMiddleware.changePassword
);

router.get('/post/add', authMiddleware.isLogged, postController.add);
router.post('/post/add', 
	authMiddleware.isLogged,
	imageMiddleware.upload,
	imageMiddleware.resize,
	postController.addAction,
);

router.get('/post/:slug/edit', 
	authMiddleware.isLogged,
	postController.edit
);
router.post('/post/:slug/edit', 
	authMiddleware.isLogged,
	imageMiddleware.upload,
	imageMiddleware.resize,
	postController.editAction
);

// lembrar que as rotas seguem em ordem, 
// colocar o slug sempre em último
router.get('/post/:slug', postController.view);


module.exports = router;