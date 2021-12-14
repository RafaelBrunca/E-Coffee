var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");
var locals = require('./middleware/locals');
var methodOverride = require("method-override");

/* Importação de rotas */
var loginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
var produtoRouter = require('./routes/produto');
var carrinhoRouter = require('./routes/carrinho');
var finalizarCompraRouter = require('./routes/finalizarCompra')
var homeUserRouter = require('./routes/userPage');
var sobreRouter = require('./routes/sobre');
const adminRouter = require('./routes/admin/admin');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'keyboard cat',resave: false,saveUninitialized: true}));
app.use(methodOverride("_method"));

app.use(locals);

/* ROTAS */
app.use('/', indexRouter);
app.use('/iniciarsessao', loginRouter);
app.use('/produto', produtoRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/carrinho/finalizarCompra', finalizarCompraRouter);
app.use('/paginadousuario/:id_cliente', homeUserRouter);
app.use('/sobre', sobreRouter);
app.use('/admin', adminRouter);

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
  res.render('error');
});

module.exports = app;