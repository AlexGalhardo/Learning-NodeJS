exports.isLogged = (req, res, next) => {
	if(!req.isAuthenticated()){
		req.flash('error', 'Ops, você não está logado!');
		res.redirect('/users/login');
		return;
	}

	next();
};

exports.changePassword = (req, res) => {
	// 1 - confirmar se senhas batem
	if(req.body.password != req.body['password-confirm']){
		req.flash('error', 'Senhas não batem');
		res.redirect('/profile');
		return;
	}
	// 2 - procurar usuário e trocar senha
	req.user.setPassword(req.body.password, async ()=>{
		await req.user.save();

		req.flash('success', 'Senha alterada com sucesso!');
		res.redirect('/home');
	});
	// 3 - redirecionar para home
};