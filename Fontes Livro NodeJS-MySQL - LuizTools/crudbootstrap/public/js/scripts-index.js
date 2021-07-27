const alertListagem = document.getElementById("alertListagem");

function alertar(mensagem){
    alertListagem.innerHTML = `<strong>Sucesso!</strong> ${mensagem}`;
    alertListagem.style.display = "block";
    setTimeout(() => { alertListagem.style.display = "none"; }, 2000);
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