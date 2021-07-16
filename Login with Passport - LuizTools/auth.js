const bcrypt = require('bcryptjs')  
const LocalStrategy = require('passport-local').Strategy

module.exports = function(passport){
   
    //configuraremos o passport aqui
    function findUser(username, callback){
        global.db.collection("users").findOne({"username": username}, function(err, doc){
            callback(err, doc);
        })
    }

    function findUserById(id, callback){
        const objectId = require("mongodb").ObjectId;
        global.db.collection("users").findOne({"_id": objectId(id)}, function(err, doc){
            callback(err, doc);
        })
    }

    passport.serializeUser(function(user, done){
        done(null,user._id);
    });

    passport.deserializeUser(function(id, done){
        findUserById(id, function(err,user){
            done(err, user);
        });
    });

    passport.use(new LocalStrategy( { 
            usernameField: 'username',
            passwordField: 'password'
        },
        (username, password, done) => {
            findUser(username, (err, user) => {
                if (err) { return done(err) }

                // usuário inexistente
                if (!user) { return done(null, false) }

                // comparando as senhas
                bcrypt.compare(password, user.password, (err, isValid) => {
                    if (err) { return done(err) }
                    if (!isValid) { return done(null, false) }
                    return done(null, user)
                })
            })
        }
    ));

}