const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema({
    name: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true
    },

    // POR MINHA CONTA: forçando erro no BD na hora de salvar a categoria para testar a error_msg (o campo test abaixo é required, mas não foi passado no código, logo vai dar erro!)
    /*
    test: {
        type: String,
        required: true
    },
    */

    date: {
        type: Date,
        default: Date.now()
    }
})

/*
Aula 35:
Poderia ser: Const Category = new mongoose.Schema() (juntaria linhas 2 e 4 em uma)
*/

mongoose.model('categories', Category)