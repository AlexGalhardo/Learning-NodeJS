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