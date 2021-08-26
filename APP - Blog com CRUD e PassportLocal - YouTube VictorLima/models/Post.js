const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({

    title: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    /* Aula 44: Relacionando documentos no mongo: ref: "categories" que é a collection criada no model Category. */

    category: {
        type: Schema.Types.ObjectId,
        ref: "categories",
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
    
})

/* Aula 44: Criando collection no mongo "posts", com base no model Post: */

mongoose.model("posts", Post)