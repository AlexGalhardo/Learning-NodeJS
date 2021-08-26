const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require("../models/User")
const User = mongoose.model("users")
const bcrypt = require("bcryptjs")
const passport = require('passport')
const isAdmin = require('../helpers/isAdmin')

router.get("/signup", (req, res) => {
    res.render("user/signup")
})

router.post("/signup", (req, res) => {
    let errors = []

    if (!req.body.name) {
        errors.push({text: "Nome inválido"})
    }
    if (!req.body.email) {
        errors.push({text: "E-mail inválido"})
    }
    if (!req.body.password) {
        errors.push({text: "Senha inválida"})
    }
    if (req.body.password < 4) {
        errors.push({text: "Senha muito curta"})
    }
    if (req.body.password != req.body.password2) {
        errors.push({text: "Senhas não conferem"})
    }
    if (errors.length > 0) {
        
        res.render("user/signup", {errors: errors})

    } else {
        User.findOne({email: req.body.email}).then((user) => {
            if(user){
                req.flash("error_msg", "Já existe uma conta com este e-mail!")
                res.redirect("/user/signup")
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    //isAdmin: 1
                })

                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(newUser.password, salt, (error, hash) => {
                        if (error) {
                            req.flash("error_msg", "Houve um erro durante o salvamento do usuário!")
                            res.redirect("/")
                        }

                        newUser.password = hash

                        newUser.save().then(() => {
                            req.flash("success_msg", "Usuário criado com sucesso!")
                            res.redirect("/")
                        }).catch((err) => {
                            req.flash("error_msg", "Houve um erro ao criar o usuário, tente novamente!")
                            res.redirect("/user/signup")
                        })

                    })
                })
            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno")
            res.redirect("/")
        })
    }
})

router.get("/login", (req, res) => {
    res.render("user/login")
})

router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/user/login",
        failureFlash: true
    })(req, res, next)
})

router.get("/logout", (req, res) => {
    req.logout()
    req.flash("success_msg", "Deslogado com sucesso!")
    res.redirect("/")
})

module.exports = router