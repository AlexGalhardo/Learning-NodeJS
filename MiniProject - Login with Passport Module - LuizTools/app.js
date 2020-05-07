const passport = require('passport')  
const session = require('express-session')  
const MongoStore = require('connect-mongo')(session)

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

global.authenticationMiddleware = () => {  
  return function (req, res, next) {
    if (req.isAuthenticated() && require("./permissions")(req)) {
      return next()
    }
    res.redirect('/login?fail=true')
  }
};

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var reportsRouter = require('./routes/reports');

var app = express();

//autenticação
require('./auth')(passport);
app.use(session({  
  store: new MongoStore({
    db: global.db,
    ttl: 30 * 60 // = 30 minutos de sessão
  }),
  secret: '123',//configure um segredo seu aqui
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/reports', reportsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: "Erro!"});
});

module.exports = app;
