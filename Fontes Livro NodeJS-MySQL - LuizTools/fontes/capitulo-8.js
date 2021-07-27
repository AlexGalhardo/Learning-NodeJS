//8.1
<!--... código HTML qualquer ...-->
<script>
	//código Javascript vai aqui
</script>
<!-- ... mais código HTML ... ->

//8.2
<!-- ... código HTML qualquer ... -->
<script src="funcoes.js" />
<!-- ...código HTML qualquer ... -->

//8.3
function exibirMensagem(){
	alert('funcionou!');
}

//8.4
<input type="button" value="Teste" onclick="exibirMensagem()" />

//8.5
function exibirUF(uf){
	alert(uf);
}

<select onchange="exibirUF(this.value)">
    <option value="RS">Rio Grande do Sul</option>
    <option value="SC">Santa Catarina</option>
    <option value="PR">Paraná</option>
</select>

//8.6
function exibirMensagem(msg){
	alert(msg);
}

<div onmouseenter="exibirMensagem('entrou!')" onmouseleave="exibirMensagem('saiu!')">Teste</div>

//8.7
function exibirMensagem(msg){
	alert(msg);
}

<input type="text" onfocus="exibirMensagem('entrou!')" onblur="exibirMensagem('saiu!')" />

//8.8
function validarNumeros(e){
	var unicode=e.charCode? e.charCode : e.keyCode;
	if (unicode!=8){ //8 = backspace
	        if (unicode<48||unicode>57) //se não é um número
            	return false; //disable key press
    	}
}

<input type="text" onkeypress="return validarNumeros(event)" />

//8.9
<!DOCTYPE html>
<html>
  <head>
    <title>Calculadora</title>
    <meta charset="utf-8" />
  </head>
  <body>
      <table>
          <tr>
              <td colspan="6"><input type="text" id="display" value="0" disabled></td>
          </tr>
          <tr>
            <td><input type="button" value="7" /></td>
            <td><input type="button" value="8" /></td>
            <td><input type="button" value="9" /></td>
            <td><input type="button" value="*" /></td>
        </tr>
        <tr>
            <td><input type="button" value="4" /></td>
            <td><input type="button" value="5" /></td>
            <td><input type="button" value="6" /></td>
            <td><input type="button" value="-" /></td>
        </tr>
        <tr>
            <td><input type="button" value="1" /></td>
            <td><input type="button" value="2" /></td>
            <td><input type="button" value="3" /></td>
            <td><input type="button" value="+" /></td>
        </tr>
        <tr>
            <td><input type="button" value="C" /></td>
            <td><input type="button" value="0" /></td>
            <td><input type="button" value="=" /></td>
            <td><input type="button" value="/" /></td>
        </tr>
      </table>
  </body>
</html>

//8.10
<script>
    function atualizarDisplay(btn){
        const display = document.getElementById('display');
        if(display.value.length === 9) return;
        if(display.value === '0') display.value = btn.value;
        else display.value += btn.value;
    }
</script>

//8.11
<td><input type="button" value="7" onclick="atualizarDisplay(this)" /></td>

//8.12
function limparDisplay(){
    document.getElementById('display').value = '0';
}

//8.13
<td><input type="button" value="C" onclick="limparDisplay()"/></td>

//8.14
var operador = ''
var valor1 = 0
function atualizarOperacao(btn){
            const display = document.getElementById('display');
            operador = btn.value;
            valor1 = parseInt(display.value);
            display.value = '0';
}

//8.15
<td><input type="button" value="*" onclick="atualizarOperacao(this)" /></td>

//8.16
function calcularOperacao(){
    const display = document.getElementById('display');
    const valor2 = parseInt(display.value);
    valor1 = eval(valor1+operador+valor2);
    display.value = valor1;
    operador = '';
}

//8.17
<td><input type="button" value="=" onclick="calcularOperacao()" /></td>

//8.18
function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}

//8.19
<body onkeypress="manipularTeclado()">

//se você etsá lendo uma versão desatualizada do livro, você não vai encontrar os códigos de jQuery aqui, mas sim nos fontes do apêndice-2

//8.20
<!DOCTYPE html>
<html>
	<head><meta charset="utf-8" /></head>
	<body>
		<input type=”text” name=”nome” id=”txtNome” />
	</body>
</html>

//8.21
document.addEventListener("DOMContentLoaded", function(event) { 
  //faz alguma coisa
});

//8.22
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo DOM</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>Exemplo DOM</h1>
    <p>Sistema para exemplificar manipulação de DOM</p>
  </body>
</html>

//8.23
<div id="divCadastro">
    <h2>Cadastro</h2>
</div>
<div id="divListagem">
    <h2>Listagem</h2>
</div>

//8.24
<div id="divCadastro">
    <h2>Cadastro</h2>
    <input type="button" id="btnListar" value="Listar">
</div>
<div id="divListagem">
    <h2>Listagem</h2>
    <input type="button" id="btnCadastrar" value="Cadastrar">
</div>

//8.25
<script src="js/scripts.js"></script>

//8.26
document.addEventListener("DOMContentLoaded", function(event) { 
  
});

//8.27
document.addEventListener("DOMContentLoaded", function(event) { 
    const divListagem = document.getElementById("divListagem");
    divListagem.style.display = "none";
});

//8.28
document.addEventListener("DOMContentLoaded", function(event) { 
    const divListagem = document.getElementById("divListagem");
    divListagem.style.display = "none";

    const divCadastro = document.getElementById("divCadastro");

    document.getElementById("btnListar").onclick = (evt) => {
        divListagem.style.display = "block";
        divCadastro.style.display = "none";
    }

    document.getElementById("btnCadastrar").onclick = (evt) => {
        divListagem.style.display = "none";
        divCadastro.style.display = "block";
    }
});

//8.29
<form id="frmCadastro" action="" method="">
     <p>
         <label>Nome: <input type="text" name="nome" /></label>
     </p>
     <p>
         <label>Idade: <input type="number" name="idade" /></label>
     </p>
     <p>
          <label>UF: <select name="uf">
            <option>RS</option>
            <option>SC</option>
            <option>PR</option>
            <!-- coloque os estados que quiser -->
          </select></label>
     </p>
     <p>
        <input type="button" id="btnListar" value="Listar"> | <input type="submit" value="Salvar" />
     </p>
</form>

//8.30
<table style="width:50%">
   <thead>
      <tr style="background-color: #CCC">
         <td style="width:50%">Nome</td>
         <td style="width:15%">Idade</td>
         <td style="width:15%">UF</td>
         <td>Ações</td>
       </tr>
   </thead>
   <tbody>
      <tr>
         <td colspan="4">Nenhum cliente cadastrado.</td>
      </tr>
   </tbody>
   <tfoot>
        <tr>
          <td colspan="4">
              <input type="button" id="btnCadastrar" value="Cadastrar">
          </td>
        </tr>
   </tfoot>
</table>

//8.31
const frmCadastro = document.getElementById("frmCadastro");
frmCadastro.onsubmit = (evt) => {
    
    let linha = '<tr>';
    var data = new FormData(frmCadastro)
    for(let item of data)
        linha += `<td>${item[1]}</td>`;
    linha += '<td><input type="button" value="X" /></td></tr>';

    //se tem apenas uma TD, é a default
    const tbody = document.querySelector('table > tbody');
    if(tbody.querySelectorAll('tr > td').length === 1)
        tbody.innerHTML = "";

    tbody.innerHTML += linha;

    divListagem.style.display = "block";
    divCadastro.style.display = "none";

    frmCadastro.reset();

    evt.preventDefault();
}

//8.32
const buttons = document.querySelectorAll("input[value='X']");
for(let btn of buttons){
    if(btn.onclick !== null) continue;
    btn.onclick = (evt) => {
        if(confirm('Tem certeza que deseja excluir este cliente?')){
            btn.closest('tr').remove();
        }
    }
}

//8.33
<label>IP:
    <input type="text" id="txtIP" value="8.8.8.8" />
</label>
<p>
    <input type="button" value="Buscar" onclick="buscarIP()" />
</p>
<p id="paragrafo"></p>

//8.34
<script>
    function buscarIP() {
        const apiKey = "coloque a sua API Key aqui";
        const ip = document.getElementById('txtIP').value;//ex: 8.8.8.8
        const paragrafo = document.getElementById('paragrafo');
        fetch(`http://api.ipstack.com/${ip}?access_key=${apiKey}&format=1`)
            .then(req => req.json())
            .then(json => paragrafo.innerText = json.country_name)
            .catch(err => paragrafo.innerText = err);
    }
</script>

//8.35
function updateTable(data){
    let linha = '<tr>';
    for(let item of data)
        linha += `<td>${item[1]}</td>`;
    linha += '<td><input type="button" value="X" /></td></tr>';

    //se tem apenas uma TD, é a default
    const tbody = document.querySelector('table > tbody');
    if(tbody.querySelectorAll('tr > td').length === 1)
        tbody.innerHTML = "";

    tbody.innerHTML += linha;

    divListagem.style.display = "block";
    divCadastro.style.display = "none";

    frmCadastro.reset();

    const buttons = document.querySelectorAll("input[value='X']");
    for(let btn of buttons){
        if(btn.onclick !== null) continue;
        btn.onclick = (evt) => {
            if(confirm('Tem certeza que deseja excluir este cliente?')){
                btn.closest('tr').remove();
            }
        }
    }
}

//8.36
const frmCadastro = document.getElementById("frmCadastro");
frmCadastro.onsubmit = (evt) => {
    
    var data = new FormData(frmCadastro);
    updateTable(data);

    evt.preventDefault();
}

//8.37
const webApiDomain = 'http://localhost:3000'
async function updateDatabase(data){
    const json = {};
    for(let item of data)
        json[item[0]] = item[1];

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const response = await fetch(`${webApiDomain}/clientes`, {
                            headers,
                            method: 'POST',
                            body: JSON.stringify(json)
                        });
    return await response.json();
}

//8.38
const frmCadastro = document.getElementById("frmCadastro");
frmCadastro.onsubmit = (evt) => {
    
    var data = new FormData(frmCadastro);
    updateDatabase(data)
        .then(cliente => {
            alert(`Cliente ${cliente.nome} cadastrado com sucesso!`);
            updateTable(cliente);
        })
        .catch(error => alert(`Ocorreu um erro: ${error}`));

    evt.preventDefault();
}

//8.39
function updateTable(cliente){
    let linha = `<tr><td>${cliente.nome}</td><td>${cliente.idade}</td><td>${cliente.uf}</td><td><input type="button" value="X" /></td></tr>`;

//8.40
npm install cors

//8.41
app.use(require('cors')());

//8.42
async function loadDatabase(){
    const response = await fetch(`${webApiDomain}/clientes`);
    return await response.json();
}

//8.43
function updateTable(clientes){
    let linha = "";
    if(!Array.isArray(clientes)) clientes = [clientes];
    for(let cliente of clientes)
        linha += `<tr><td>${cliente.nome}</td><td>${cliente.idade}</td><td>${cliente.uf}</td><td><input type="button" value="X" /></td></tr>`;

    //se tem apenas uma TD, é a default

//8.44
document.addEventListener("DOMContentLoaded", function(event) { 
    const divListagem = document.getElementById("divListagem");
    const divCadastro = document.getElementById("divCadastro");
    divCadastro.style.display = "none";

    loadDatabase()
        .then(clientes => updateTable(clientes))
        .catch(error => alert(`Ocorreu um erro ao carregar os clientes: ${error}`));

//8.45
linha += `<tr><td>${cliente.nome}</td><td>${cliente.idade}</td><td>${cliente.uf}</td><td><input type="button" value="X" data-id="${cliente.id}" /></td></tr>`;

//8.46
async function deleteDatabase(id){
    const response = await fetch(`${webApiDomain}/clientes/${id}`, {
                            method: 'DELETE'
                        });
    return await response.json();
}

//8.47
const buttons = document.querySelectorAll("input[value='X']");
for(let btn of buttons){
    if(btn.onclick !== null) continue;
    btn.onclick = (evt) => {
        if(confirm('Tem certeza que deseja excluir este cliente?')){
            deleteDatabase(btn.getAttribute('data-id'))
                .then(result => {
                    alert('Cliente excluído com sucesso!');
                    btn.closest('tr').remove();
                })
                .catch(error => alert(`Ocorreu um erro ao excluir o cliente: ${error}`))
        }
    }
}