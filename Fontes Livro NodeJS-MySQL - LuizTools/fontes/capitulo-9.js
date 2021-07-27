//9.1
<body style="background-color: lightgrey">
   <h1>This is a heading</h1>
   <p>This is a paragraph.</p>
</body>

//9.2
<h1 style="color:blue">This is a heading</h1>
<p style="color:red">This is a paragraph.</p>

//9.3
<h1 style="font-family:verdana">This is a heading</h1>
<p style="font-family:courier">This is a paragraph.</p>

//9.4
<h1 style="font-size:300%">This is a heading</h1>
<p style="font-size:160%">This is a paragraph.</p>

//9.5
<h1 style="text-align:center">Centered heading</h1>
<p>This is a paragraph.</p>

//9.6
<style>
	/* seu estilo vai aqui. A propósito, isto é um comentário CSS */
</style>

//9.7
<style>
p {
	color: green;
}
</style>

//9.8
<style>
.paragrafoInicial {
	color: green;
}
</style>

//9.9
<p class="paragrafoInicial">
	Este texto ficará verde.
</p>
<p>
	Este texto terá a cor normal (preta).
</p>

//9.10
<style>
	p { font-family: Arial; }

	.paragrafoInicial{ Color: green; }
</style>

//9.11
<style>
	table p {
		color: green;
}
</style>

//9.12
<p class="paragrafoInicial paragrafoImportante">Parágrafo cheio de estilo.</p>

//9.13
<style>
#paragrafoLegal{
	color: red;
}
</style>

//9.14
<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="estilos.css" /></head>
<body>

//9.15
p {
	display: none; /* todos p's ficarão invisíveis*/
}

//9.16
p {
	background-color: #d0e4fe;
	background-image: url('url da imagem');
	background-repeat: no-repeat;
}

//9.17
p {
	width: 100%;
	height: 50px;
}

//9.18
p { border: 1px solid black; }

//9.19
p { border: 1px solid black; padding: 10px; }

//9.20
p {
   border: 1px solid black;
   padding: 10px;
   margin: 30px;
}

//9.21
p {
	margin-bottom: 15px;
}

//9.22
document.getElementById('#myP').style.color = 'red';
document.getElementById('#myP').classList.add('nomeClasse');

//9.23
document.getElementsByClassName('.paragrafoInicial');

//9.24
const col = document.getElementsByClassName("teste");
for(let item of col)
  item.style.display = "none";

//9.27
<link href="css/estilos.css" rel="stylesheet" />

//9.28
<table style="width:50%">

//9.29
table { width: 50%; }

//9.30
<tr style="background-color: #CCC">

//9.31
table thead tr { background-color: #CCC; }

//9.32
<td style="width:50%">Nome</td>
<td style="width:15%">Idade</td>
<td style="width:15%">UF</td>
<td>Ações</td>

//9.33
table thead tr td:first-child { width:50%; }

table thead tr td:last-child { width:20%; }

//9.34
<table cellspacing="0">

//9.35
body{ padding-left: 10px; }

//9.36
form{
    width: 50%;
    text-align: right;
}

//9.37
input {
    padding: 5px;
    border-radius: 4px;
}

//9.38
select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 5px;
    width: 53%;
}

//9.39
input[type="text"], input[type="number"] { width: 50%; }

//9.40
#btnListar, input[type="submit"] { width: 25%; }

//9.41
h2 {
    text-align: right;
    padding-right: 50%;
}

//9.42
table tr td{
    padding: 5px;
    text-align: center;
}

//9.43
table tr td:first-child{  text-align: left; }

//9.44
table tbody tr:hover{
    background-color: #ccc;
}

//9.45
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo DOM</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
  </head>
…
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>

//9.46
<meta name="viewport" content="width=device-width, initial-scale=1">

//9.47
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo Bootstrap</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
</head>
<body>
  <div class="container">

… todo o restante do body aqui …

  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
  <script src="js/scripts.js"></script>
</body>
</html>

//9.48
<div class="row">
	<div class="col-sm-4">.col-sm-4</div>
	<div class="col-sm-4">.col-sm-4</div>
	<div class="col-sm-4">.col-sm-4</div>
</div>

//9.49
<div class="row">
	<div class="col-sm-4">.col-sm-4</div>
	<div class="col-sm-8">.col-sm-8</div>
</div>

//9.50
<div class="container">
    <div class="row">
        <div class="col">
            <h1>Exemplo Bootstrap</h1>
            <span class="text-muted">Sistema para exemplificar uso de Bootstrap</span>
        </div>
    </div>

//9.51
<table cellspacing="0" class="table">

//9.52
<table cellspacing="0" class="table table-striped">
    
//9.53
<table cellspacing="0" class="table table-striped table-bordered table-hover">

//9.54
<div class="well">Basic Well</div>

//9.55
<div class="alert alert-success">
   <strong>Success!</strong> This alert box indicates a successful or positive action.
</div>

//9.56
<div id="alertListagem" class="alert alert-success">
    <strong>Successo!</strong> Blá blá blá!
</div>

//9.57
document.addEventListener("DOMContentLoaded", function(event) { 
    const alertListagem = document.querySelector('#alertListagem');
    alertListagem.style.display ="none";

//9.58
updateDatabase(data)
    .then(cliente => {
        alertListagem.innerHTML = `<strong>Sucesso!</strong> Cliente ${cliente.nome} cadastrado com sucesso!`; 
        alertListagem.style.display = "block";
        setTimeout(() => { alertListagem.style.display = "none" }, 2000);

        updateTable(cliente);
    })
    .catch(error => alert(`Ocorreu um erro: ${error}`));

//9.59
<div id="alertCadastro" class="alert alert-danger">
    <strong>Erro!</strong> Nome é obrigatório!
</div>

//9.60
const frmCadastro = document.getElementById("frmCadastro");
frmCadastro.onsubmit = (evt) => {
    evt.preventDefault();

    if(!document.querySelector('input[name="nome"]').value){
        alertCadastro.innerHTML = '<strong>Erro!</strong> O campo nome é obrigatório!'; 
        alertCadastro.style.display = "block";
        setTimeout(() => { alertCadastro.style.display = "none" }, 3000);
        return false;
    }

    const data = new FormData(frmCadastro);
    updateDatabase(data)
        .then(cliente => {
            exibirMensagem('#alertListagem', `<strong>Sucesso!</strong> Cliente ${cliente.nome} cadastrado com sucesso!`);
            updateTable(cliente);
        })
        .catch(error => alert(`Ocorreu um erro: ${error}`));
}

//9.61
<input type="submit" value="Salvar" class="btn btn-primary" />

//9.62
<div class="btn-group">
	<button type="button" class="btn btn-primary">Apple</button>
	<button type="button" class="btn btn-primary">Samsung</button>
	<button type="button" class="btn btn-primary">Sony</button>
</div>

//9.63
<div class="btn-group">
	<button type="button" class="btn btn-primary">Apple</button>
	<button type="button" class="btn btn-primary">Samsung</button>
	<div class="btn-group">

	<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Sony <span class="caret"></span></button>
	<ul class="dropdown-menu" role="menu">
		<li><a href="#">Tablet</a></li>
		<li><a href="#">Smartphone</a></li>
	</ul>
	</div>
</div>

//9.64
linha += `<tr><td>${cliente.nome}</td><td>${cliente.idade}</td><td>${cliente.uf}</td><td><input type="button" class="btn btn-danger" value="X" data-id="${cliente.id}" /></td></tr>`;

//9.65
function exibirMensagem(selector, html){
    const div = document.querySelector(selector);
    div.innerHTML = html; 
    div.style.display = "block";
    setTimeout(() => { div.style.display = "none" }, 2000);
}

//9.66
<form id="frmCadastro" action="" method="" role="form">

//9.67
<form action="" method="" role="form">
    <div class="form-group">
        <label>Nome: <input type="text" name="nome" class="form-control" /></label>
    </div>
    <div class="form-group">
            <label>Idade: <input type="number" name="idade" class="form-control" /></label>
    </div>
    <div class="form-group">
        <label>UF: <select name="uf" class="form-control">
                <option>RS</option>
                <option>SC</option>
                <option>PR</option>
                <!-- coloque os estados que quiser -->
            </select></label>
    </div>
    <div class="form-group">
        <input type="button" id="btnListar" value="Listar" class="btn btn-default"> | <input type="submit" value="Salvar" class="btn btn-primary" />
    </div>
</form>

//9.68
<div class="radio">
	<label><input type="radio" name="optradio">Option 1</label>
</div>
<div class="radio">
	<label><input type="radio" name="optradio">Option 2</label>
</div>
<div class="radio disabled">
	<label><input type="radio" name="optradio">Option 3</label>
</div>

//9.69
if(location.href.indexOf('delete=true') != -1){
    alert('Cliente excluído com sucesso!');
}
else if(location.href.indexOf('edit=true') != -1){
    alert('Cliente editado com sucesso!');
}
else if(location.href.indexOf('new=true') != -1){
    alert('Cliente cadastrado com sucesso!');
}
else if(location.href.indexOf('erro') != -1){
    alert('Ocorreu um erro!');
}

//9.70
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
<script src="/js/scripts-index.js"></script>
</body>
</html>

//9.71
<head>
  <title>CRUD de Clientes</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://bootswatch.com/5/cyborg/bootstrap.min.css" rel="stylesheet" />
</head>

//9.72
<div class="container">
  <h1>Listagem de Clientes</h1>
  <p>Clientes já cadastrados no sistema.</p>
  <div id="alertListagem" class="alert alert-success">
      <strong>Successo!</strong> Cliente cadastrado com sucesso!
    </div>
  <table class="table table-striped table-bordered table-hover">
    <thead>
      <tr><td>Nome</td><td>Idade</td><td>UF</td><td>Ações</td></tr>
    </thead>
    <tbody>
      <% if(!docs || docs.length == 0) { %>
        <tr>
          <td colspan="4">Nenhum cliente cadastrado.</td>
        </tr>
        <% } else { 
          docs.forEach(function(customer){ %>
          <tr>
            <td><%= customer.nome %></td>
            <td><%= customer.idade %></td>
            <td><%= customer.uf %></td>
            <td>
              <a href="/edit/<%= customer.id %>" class="btn btn-info">edit</a>
              <a href="/delete/<%= customer.id %>" class="btn btn-danger" onclick="return confirm('Tem certeza?');">x</a>
            </td>
          </tr>
          <% }) 
      }%>
    </tbody>
  </table>
  <a href="/new" class="btn btn-primary">Cadastrar Novo</a>
</div>

//9.73
const alertListagem = document.getElementById("alertListagem");

function alertar(mensagem){
    alertListagem.innerHTML = `<strong>Sucesso!</strong> ${mensagem}`;
    alertListagem.style.display = "block";
    setTimeout(() => { alertListagem.style.display = "none"; }, 2000)
} 

if(location.href.indexOf('delete=true') != -1){
    alertar('Cliente excluído com sucesso!');
}
else if(location.href.indexOf('edit=true') != -1){
    alertar('Cliente editado com sucesso!');
}
else if(location.href.indexOf('new=true') != -1){
    alertar('Cliente cadastrado com sucesso!');
}
else if(location.href.indexOf('erro') != -1){
    alertar('Ocorreu um erro!');
}
else{
    alertListagem.style.display = "none";
}

//9.74
<head>
    <title>CRUD de Clientes</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://bootswatch.com/5/cyborg/bootstrap.min.css" rel="stylesheet" />
  </head>

//9.75
<div class="container">
    <h1>
        <%= title %>
    </h1>
    <p>Preencha os dados abaixo para salvar o cliente.</p>
    <div id="alertCadastro" class="alert alert-danger col-sm-6">
      <strong>Erro!</strong> Nome é um dado obrigatório!
    </div>
    <form id="frmCadastro" action="<%= action %>" method="POST" role="form" class="form-horizontal">
        <div class="form-group">
          <label class="control-label" for="nome">Nome: 
              <input type="text" id="nome" name="nome" value="<%= doc.nome %>" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label class="control-label" for="idade">Idade:
              <input type="number" id="idade" name="idade" value="<%= doc.idade %>" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label class="control-label">UF:
            <select name="uf" class="form-control">
            <% const s = "selected" %>
            <option <% if(doc.uf === "RS") { %><%= s %><% } %>>RS</option>
            <option <% if(doc.uf === "SC") { %><%= s %><% } %>>SC</option>
            <option <% if(doc.uf === "PR") { %><%= s %><% } %>>PR</option>
            <!-- coloque os estados que quiser -->
            </select>
          </label>
        </div>
        <div class="form-group">
          <a href="/" class="btn btn-default">Cancelar</a> <input type="submit" value="Salvar" class="btn btn-primary" />
        </div>
    </form>
</div>

//9.76
document.addEventListener('DOMContentLoaded', (event) => {
    const alertCadastro = document.getElementById("alertCadastro");
    alertCadastro.style.display = "none";

    document.getElementById("frmCadastro").onsubmit = (evt) => {
        if(!document.getElementById("nome").value){
            alertCadastro.style.display = "block";
            setTimeout(() => { alertCadastro.style.display = "none"; }, 2000);
            evt.preventDefault()
        }
    }
})

//9.77
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
<script src="/js/scripts-new.js"></script>
