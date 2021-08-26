/* const { Router } = require('express') ==> apareceu sozinho em algum momento e não sei pq! */
const express = require('express')
const router = express.Router()

const mongoose = require("mongoose")
require("../models/Category")
const Category = mongoose.model("categories")
require("../models/Post")
const Post = mongoose.model("posts")
const {isAdmin} = require("../helpers/isAdmin")

router.get('/', isAdmin, (req, res) => {
    res.render('admin/admin')
})

router.get('/categories', isAdmin, (req, res) => {

    // adicionado .lean() para listar categorias
    // adicionar .sort({date: 'desc'}) depois de .lean() para listar do mais novo para mais antigo

    Category.find().lean().then((categories) => {

        //console.log(categories)

        res.render('admin/categories', {categories: categories})

    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias!")
        res.redirect('/admin')
    })

})

router.get('/categories/add', isAdmin, (req, res) => {
    res.render('admin/addcategories')
})

router.post('/categories/new', isAdmin, (req, res) => {

    let errors = []

    if (!req.body.name) {
        errors.push({text: "Nome inválido!"})
    } 
    
    if (!req.body.slug) {
        errors.push({text: "Slug inválido!"})
    }

    if (req.body.name.length < 2) {
        errors.push({text: "Nome muito curto!"})
    }

    if (errors.length > 0) {
        res.render('admin/addcategories', {errors: errors})
    } else {
        const newCategory = {
            name: req.body.name,
            slug: req.body.slug
        }
    
        new Category(newCategory).save().then(() => {
            req.flash("success_msg", "Categoria salva com sucesso!")
            res.redirect('/admin/categories')
        }).catch((err) => {
            console.log(`Houve um erro ao salvar a categoria: ${err}`)
            req.flash("error_msg", "Houve um erro ao salvar a categoria, tente novamente!")
            res.redirect('/admin/categories')
        })
    }
})

router.get('/categories/edit/:id', isAdmin, (req, res) => {
        Category.findOne({_id: req.params.id}).lean().then((category) => {
            res.render("admin/editcategories", {category: category})
        }).catch((err) => {
            req.flash("error_msg", "Erro! Tente novamente.")
            res.redirect("/admin/categories")
        })
})

router.post('/categories/edit', isAdmin, (req, res) => {

    // sem sistema de validação para não ficar repetitivo!

    Category.findOne({_id: req.body.id}).then((category) => {

        category.name = req.body.name
        category.slug = req.body.slug

        category.save().then(() => {
            req.flash("success_msg", "Categoria salva com sucesso!")
            res.redirect('/admin/categories')
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno ao salvar a edição da categoria!")
            res.redirect("/admin/categories")
        })

    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao editar a categoria!")
        res.redirect("/admin/categories")
    })
})

router.post("/categories/delete", isAdmin, (req, res) => {
    Category.remove({_id: req.body.id}).then(() => {
        req.flash("success_msg", "Categoria deletada com sucesso!")
        res.redirect('/admin/categories')
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao deletar a categoria!")
        res.redirect("/admin/categories")
    })
})

router.get('/posts', isAdmin, (req, res) => {

    /* Aula 47: não é populate("categories") e sim populate("category"), pois se refere ao nome do campo no model Post.js, sendo que tem que colocar category.name no html. */
    
    Post.find().lean().populate("category").sort({date: "desc"}).then((posts) => {
        res.render("admin/posts", {posts: posts})
    }).catch((err) => {
        console.log(err)
        req.flash("error_msg", "Houve um erro ao listar as postagens")
        res.redirect("/admin")
    })
})

router.get('/posts/add', isAdmin, (req, res) => {
    
    Category.find().lean().then((categories) => {
        res.render('admin/addposts', {categories: categories})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias!")
        res.redirect("/admin")
    })
    
})

router.post('/posts/new', isAdmin, (req, res) => {

    let errors = []

    if (req.body.category == "0") {
        errors.push({text: "Categoria inválida! Registre uma categoria."})
    }

    if (errors.length > 0) {
        res.render("admin/addposts", {errors: errors})
    } else {
        const newPost = {
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            content: req.body.content,
            category: req.body.category
        }
        new Post(newPost).save().then(() => {
            req.flash("success_msg", "Postagem salva com sucesso!")
            res.redirect('/admin/posts')
        }).catch((err) => {
            console.log(err)
            req.flash("error_msg", "Houve um erro ao salvar a postagem!")
            res.redirect('/admin/posts')
        })
    }

})

router.get('/posts/edit/:id', isAdmin, (req, res) => {

    /* duas pesquisas em seguida no Mongo: primeiro pesquisou a postagem e depois a categoria da postagem */
    
    Post.findOne({_id: req.params.id}).lean().then((post) => {
        Category.find().lean().then((categories) => {
            res.render("admin/editposts", {categories: categories, post: post})
        }).catch((err) => {
            req.flash("erros_msg", "Houve um erro ao listar as categorias")
        })
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulário de edição")
        res.redirect("/admin/posts")
    })
})

router.post('/posts/edit', isAdmin, (req, res) => {

    // sem sistema de validação para não ficar repetitivo!

    Post.findOne({_id: req.body.id}).then((post) => {

        post.title = req.body.title
        post.slug = req.body.slug
        post.description = req.body.description
        post.content = req.body.content
        post.category = req.body.category

        post.save().then(() => {
            req.flash("success_msg", "Postagem salva com sucesso!")
            res.redirect('/admin/posts')
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno ao salvar a edição da postagem!")
            res.redirect("/admin/posts")
        })

    }).catch((err) => {
        console.log(err)
        req.flash("error_msg", "Houve um erro ao editar a postagem!")
        res.redirect("/admin/posts")
    })
})

/* Aula 49: rota get para deletar: não recomendado! */

router.get("/posts/delete/:id", isAdmin, (req, res) => {
    Post.remove({_id: req.params.id}).then(() => {
        req.flash("success_msg", "Postagem deletada com sucesso!")
        res.redirect("/admin/posts")
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao deletar a postagem!")
        res.redirect("/admin/posts")
    })
})

module.exports = router