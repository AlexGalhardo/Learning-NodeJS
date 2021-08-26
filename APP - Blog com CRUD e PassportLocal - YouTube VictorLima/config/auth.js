const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
require("../models/User")
const User = mongoose.model("users")

module.exports = function(passport) {

    // Aula 59: se o name do input type password não for password, tem que passar passwordField no localStrategy abaixo!

    passport.use(new localStrategy({usernameField: 'email'}, (email, password, done) => {

        User.findOne({email: email}).then((user) => {

            if (!user) {
                return done(null, false, {message: "Conta inexistente!"})
            }

            bcrypt.compare(password, user.password, (error, match) => {

                if (match) {
                    return done(null, user)
                } else {
                    return done(null, false, {message: "Senha incorreta!"})
                }

            })

        })

    }))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })

}