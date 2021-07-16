var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  if(req.query.fail)
    res.render('signup', {title: "Cadastro de Usuários", message: 'Falha no cadastro do usuário!'});
  else
    res.render('signup', {title: "Cadastro de Usuários", message:null});
});

/* POST users */
router.post('/signup', function(req, res, next){
  const db = require('../db');
  db.createUser(req.body.username, req.body.password, req.body.email, req.body.profile, (err, result) => {
    if(err) return res.redirect('/users/signup?fail=true');
    else{
      var text = 'Obrigado por se cadastrar {fulano}, sua senha é {senha}';
      text = text.replace('{fulano}', req.body.username).replace('{senha}', req.body.password);

      require('../mail')(req.body.email, 'Cadastro realizado com sucesso!', text);
      res.redirect('/');
    }
  })
})

/* POST forgot */
router.post('/forgot', function(req, res, next){
  const db = require('../db');
  db.resetPassword(req.body.email, (err, result, newPassword) => {
    if(err) {
      console.log(err);
      return res.redirect('/login?reset=true');
    }
    else{
      console.log(result);
      var text = `Olá,sua nova senha é ${newPassword}. Sua senha antiga, não funciona mais!`;
      require('../mail')(req.body.email, 'Sua senha foi alterada!', text);
      res.redirect('/');
    }
  })
})

/** GET forgot */
router.get('/forgot', function(req, res, next){
  res.render('forgot', {title: "Esqueci minha Senha" });
})

module.exports = router;
