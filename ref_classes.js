// Cliente.js
module.exports = class Cliente {
    //propriedades e funções da classe aqui
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.dataCadastro = new Date();
    }
 
    isAdult(){
        return this.idade >= 18;
    }
 
    getFirstName(){
        return this.nome.split(" ")[0];
    }
}

// index.js
const Cliente = require("./Cliente");
const cliente1 = new Cliente("Luiz", 31, "contato@luiztools.com.br");
const cliente2 = new Cliente("Pedro", 5);
console.log(cliente1.nome + " é adulto? " + cliente1.isAdult());
console.log(cliente2.nome + " é adulto? " + cliente2.isAdult());

//Endereco.js
module.exports = class Endereco {
    constructor(rua, numero, bairro, cidade, uf) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
    }

    toString(){
        return this.rua + " " + this.numero + ", B. " + this.bairro + ", " + this.cidade + "/" + this.uf;
    }
}

// refatorado
//Cliente.js
module.exports = class Cliente {
    //propriedades e funções da classe aqui
    constructor(nome, idade, endereco, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.endereco = endereco;
        this.dataCadastro = new Date();
    }

    isAdult(){
        return this.idade >= 18;
    }

    getFirstName(){
        return this.nome.split(" ")[0];
    }
}

//index.js
const Cliente = require("./Cliente");
const Endereco = require("./Endereco");

const enderecoLuiz = new Endereco("Tupis", 125, "São Vicente", "Gravatai", "RS");
const clienteLuiz = new Cliente("Luiz", 31, enderecoLuiz, "contato@luiztools.com.br");
console.log(clienteLuiz.nome + " mora em " + clienteLuiz.endereco);

const clientePedro = new Cliente("Pedro", 5);
clientePedro.endereco = new Endereco("Pedro Vargas", 55, "Salgado Filho", "Gravatai", "RS");
console.log(clientePedro.nome + " mora em " + clientePedro.endereco);

//Cliente.js
module.exports = class Cliente {
    //propriedades e funções da classe aqui
    constructor(nome, idade, endereco, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.endereco = endereco;
        this.dataCadastro = new Date();
    }

    static idadeAdulto = 18;

    isAdult(){
        return this.idade >= idadeAdulto;
    }

    getFirstName(){
        return this.nome.split(" ")[0];
    }
}

//index.js
const Cliente = require("./Cliente");
const Endereco = require("./Endereco");

const enderecoLuiz = new Endereco("Tupis", 125, "São Vicente", "Gravatai", "RS");
const clienteLuiz = new Cliente("Luiz", 31, enderecoLuiz, "contato@luiztools.com.br");

console.log(Cliente.idadeAdulto);
Cliente.idadeAdulto = 21;
console.log(Cliente.idadeAdulto);



//Endereco.js
module.exports = class Endereco {
    constructor(rua, numero, bairro, cidade, uf) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
    }

    toString(){
        return this.rua + " " + this.numero + ", B. " + this.bairro + ", " + this.cidade + "/" + this.uf;
    }

    static getUFs(){
        return ["RS", "SC", "PR"];//...
    }
}

//index.js
const Cliente = require("./Cliente");
const Endereco = require("./Endereco");

const enderecoLuiz = new Endereco("Tupis", 125, "São Vicente", "Gravatai", "RS");
const clienteLuiz = new Cliente("Luiz", 31, enderecoLuiz, "contato@luiztools.com.br");

console.log(Endereco.getUFs());