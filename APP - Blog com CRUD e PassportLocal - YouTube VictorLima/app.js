/* ------------ LOADING MODULES ------------ */

const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const admin = require('./routes/admin')
const user = require('./routes/user')
const session = require('express-session')
const flash = require('connect-flash')
require("./models/Post")
const Post = mongoose.model("posts")
require("./models/Category")
const Category = mongoose.model("categories")
const passport = require('passport')
require("./config/auth")(passport)
const db = require('./config/db')





/* ------------ SETTINGS ------------ */

/* session - tem que ser configurado no início*/

app.use(session({
    secret: "cursodenode",
    resave: true,
    saveUninitialized: true
}))

/* passport - tem que ficar entre session e flash */

app.use(passport.initialize())
app.use(passport.session())

/* flash - tem que ser configurado abaixo da sessão */

app.use(flash())

/* Middleware para trabalhar com sessão */

app.use((req,res,next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    res.locals.error = req.flash("error")
    res.locals.user = req.user || null
    next()
})

/* body-parser */

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

/* handlebars */

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/* mongoose */

//mongoose.Promise = global.Promise // aula 35: desconsiderei, pois não houve explicação (obs: não li documentação!).
mongoose.connect(db.mongoURI).then(() => {
    console.log('Conectado ao MongoDB')
}).catch((err) => {
    console.log(`Houve um problema ao conectar ao MongoDB: ${err}`)
})

/* public */

app.use(express.static(path.join(__dirname, 'public')))





/* ------------ ROUTES ------------ */

app.get('/', (req, res) => {
    Post.find().lean().populate("category").sort({date: "desc"}).then((posts) => {
        res.render('index', {posts: posts})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro interno")
        res.redirect("/404")
    })
})

/* 
adicionado por minha conta: 
- uma rota /posts que redireciona para /#post , onde há a lista de postagens
- no index coloquei um id="posts" para que a tela já vá para a lista de postagens" 
*/

app.get('/posts', (req, res) => {
    res.redirect('/#posts')
})

app.get('/posts/:slug', (req, res) => {
    Post.findOne({slug: req.params.slug}).lean().then((post) => {
        if (post) {
            res.render('post/post', {post: post})
        } else {
            req.flash("error_msg", "Esta postagem não existe!")
            res.redirect('/')
        }
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro interno!")
        res.redirect('/')  
    })
})

app.get("/categories", (req, res) => {
    Category.find().lean().then((categories) => {
        res.render('categories/categories', {categories: categories})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro interno ao listar as categorias!")
        res.redirect('/')  
    })
})

app.get('/categories/:slug', (req, res) => {
    Category.findOne({slug: req.params.slug}).lean().then((category) => {
        if (category) {

            Post.find({category: category._id}).lean().then((posts) => {
                res.render('categories/posts', {posts: posts, category: category})

            }).catch((err) => {
                req.flash("error_msg", "Houve um erro ao listar as postagens!")
                res.redirect('/')
            })

        } else {
            req.flash("error_msg", "Esta categoria não existe!")
            res.redirect('/categories')
        }
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro interno ao carregar a página desta categoria!")
        res.redirect('/')  
    })
})

app.get('/404', (req, res) => {
    res.send('Erro 404!')
})

app.use('/admin', admin)
app.use('/user', user)





/* ------------ OTHERS ------------ */

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Servidor rodando na porta 3000")
})