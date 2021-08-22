exports.defaultHeaderTitle = 'Header Title Padrão';

exports.menu = [
	{name: 'Home', slug:'/home', guest:true, logged:true},
	{name: 'Sobre', slug:'/sobre', guest:true, logged:true},
	{name: 'Contato', slug:'/contato', guest:true, logged:true},
	{name: 'Login', slug:'/users/login', guest:true, logged:false},
	{name: 'Register', slug:'/users/register', guest:true, logged:false},
	{name: 'Adicionar Post', slug:'/post/add', guest:false, logged:true},
	{name: 'Logout', slug:'/users/logout', guest:false, logged:true}
];