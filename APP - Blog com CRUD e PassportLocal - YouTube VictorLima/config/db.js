if (process.env.NODE_ENV == "production") {

    module.exports = {mongoURI: /* Aula 62: colocar o link de conexão do Banco de Dados remoto: */ ""}

} else {

    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
    
}