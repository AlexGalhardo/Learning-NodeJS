const User = require("../models/User");
const crypto = require('crypto');
const mailHandler = require('../handlers/mailHandler');

exports.login = (req, res) => {
	res.render("login");
};

exports.loginAction = (req, res) => {
	const auth = User.authenticate();
	auth(req.body.email, req.body.password, (error, result) => {
		if(!result) {
			req.flash("error", "seu email ou senha errados");
			res.redirect("/users/login");
			return;
		}

		req.login(result, ()=>{});

		req.flash("success", "Você foi logado com sucesso!");
		res.redirect("/home");
	});
};	

exports.register = (req, res) => {
	res.render("register");
};

exports.registerAction = (req, res) => {
	// res.json( req.body );
	const newUser = new User(req.body);
	User.register(newUser, req.body.password, (error) => {
		if(error){
			req.flash("error", "Ocorreu um erro no registro de usuário.");
			return res.redirect("/users/register");
			// console.log("Erro ao registrar:", error);
			// res.redirect("/home");
			// return;
		}

		req.flash("success", "Registro efetuado com sucesso. Faça o login!");
		res.redirect("/users/login");
	});
};

exports.logout = (req, res) => {
	req.logout();
	res.redirect("/home");
};

exports.profile = (req, res) => {
	res.render("profile", {});
};

exports.profileAction = async (req, res) => {
	try {
		console.log(req.user._id);
		const user = await User.findOneAndUpdate(
			{ _id:req.user._id },
			{ name:req.body.name, email:req.body.email },
			{ new:true, runValidators:true }
		);
	}
	catch(error){
		req.flash('error', 'Ocorreu algum erro na atualização dos dados do usuário! ERROR: ' + error.message);
		res.redirect('/profile');
		return;
		// console.log(error.message());
	}
	req.flash('success', 'Dados atualizados com sucesso!');
	res.redirect('/profile');
};

exports.forget = (req, res) => {
	res.render('forget');
};

exports.forgetAction = async (req, res) => {
	// 1 - verificar se o usuário realmente existe
	const user = await User.findOne({email:req.body.email}).exec();
	if(!user){
		req.flash('error', 'Um e-mail foi enviado para você.');	
		res.redirect('/users/forget');
		return;
	}
	// 2 - gerar um token com data de expiração e salvar no banco
	user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
	user.resetPasswordExpires = Date.now() + 3600000; // 1 hora
	await user.save();
	// 3 - gerar link com token para trocar senha
	const resetLink = `http://${req.headers.host}/users/reset/${user.resetPasswordToken}`;
	
	// 4 - enviar link via email para o usuário
	const to = `${user.name} <${user.email}>`;
	const html = `Testando email com link: <br><a href="${resetLink}">Resetar sua senha</a>`;
	const text = `Testando email com link: ${resetLink}`;
	mailHandler.send({
		to,
		subject:'Resetar sua senha',
		html,
		text
	});
	
	// 5 - usuário vai acessar o link e trocar senha
	req.flash('success', 'Te enviamos um email para mudar de senha: ' + resetLink);
	res.redirect('/users/login');
};

exports.forgetToken = async (req, res) => {
	const user = await User.findOne({
		resetPasswordToken: req.params.token,
		resetPasswordExpires: { $gt: Date.now() } 
	}).exec();

	if(!user){
		req.flash('error', 'Token Expirado!');
		res.redirect('/users/forget');
		return;
	}

	res.render('forgetPassword');
};

exports.forgetTokenAction = async (req, res) => {
	const user = await User.findOne({
		resetPasswordToken: req.params.token,
		resetPasswordExpires: { $gt: Date.now() } 
	}).exec();

	if(!user){
		req.flash('error', 'Token Expirado!');
		res.redirect('/users/forget');
		return;
	}

	// 1 - confirmar se senhas batem
	if(req.body.password != req.body['password-confirm']){
		req.flash('error', 'Senhas não batem');
		res.redirect('back');
		return;
	}

	// pegar senha do usuário de acordo com o token 
	// 2 - procurar usuário e trocar senha
	user.setPassword(req.body.password, async ()=>{
		await user.save();

		req.flash('success', 'Senha alterada com sucesso!');
		res.redirect('/home');
	});

};