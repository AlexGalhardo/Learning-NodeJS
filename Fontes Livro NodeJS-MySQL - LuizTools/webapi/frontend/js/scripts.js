//scripts.js
function exibirMensagem(selector, html){
    const div = document.querySelector(selector);
    div.innerHTML = html; 
    div.style.display = "block";
    setTimeout(() => { div.style.display = "none" }, 2000);
}

function updateTable(clientes){
    let linha = "";
    if(!Array.isArray(clientes)) clientes = [clientes];
    for(let cliente of clientes)
        linha += `<tr><td>${cliente.nome}</td><td>${cliente.idade}</td><td>${cliente.uf}</td><td><input type="button" class="btn btn-danger" value="X" data-id="${cliente.id}" /></td></tr>`;

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
                deleteDatabase(btn.getAttribute('data-id'))
                    .then(result => {
                        exibirMensagem('#alertListagem', `<strong>Sucesso!</strong> Cliente excluído com sucesso!`);
                        btn.closest('tr').remove();
                    })
                    .catch(error => {
                        alert(`Ocorreu um erro ao excluir o cliente: ${error}`)
                    })
            }
        }
    }
}

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

async function deleteDatabase(id){
    const response = await fetch(`${webApiDomain}/clientes/${id}`, {
                            method: 'DELETE'
                        });
    return await response.json();
}

async function loadDatabase(){
    const response = await fetch(`${webApiDomain}/clientes`);
    return await response.json();
}

document.addEventListener("DOMContentLoaded", function(event) { 
    const alertListagem = document.querySelector('#alertListagem');
    alertListagem.style.display ="none";

    const alertCadastro = document.querySelector('#alertCadastro');
    alertCadastro.style.display ="none";

    const divListagem = document.getElementById("divListagem");
    const divCadastro = document.getElementById("divCadastro");
    divCadastro.style.display = "none";

    loadDatabase()
        .then(clientes => updateTable(clientes))
        .catch(error => alert(`Ocorreu um erro ao carregar os clientes: ${error}`));

    document.getElementById("btnListar").onclick = (evt) => {
        divListagem.style.display = "block";
        divCadastro.style.display = "none";
    } 

    document.getElementById("btnCadastrar").onclick = (evt) => {
        divListagem.style.display = "none";
        divCadastro.style.display = "block";
    }

    const frmCadastro = document.getElementById("frmCadastro");
    frmCadastro.onsubmit = (evt) => {
        evt.preventDefault();

        if(!document.querySelector('input[name="nome"]').value){
            exibirMensagem('#alertCadastro', '<strong>Erro!</strong> O campo nome é obrigatório!');
            return false;
        }

        const data = new FormData(frmCadastro);
        updateDatabase(data)
            .then(result => {
                const cliente = result.ops[0];
                exibirMensagem('#alertListagem', `<strong>Sucesso!</strong> Cliente ${cliente.nome} cadastrado com sucesso!`);
                updateTable(cliente);
            })
            .catch(error => exibirMensagem('#alertCadastro', `Ocorreu um erro: ${error}`));
    }
});