const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// const productosRouter = require('./routes/productos');
const consultaAxios = require('./routes/axios');
const jugadoresRouter = require('./routes/jugadores');
const entrenadoresRouter = require('./routes/entrenadores');

const app = express();

const {connect} = require('./db/db');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/productos', productosRouter);
app.use('/axios', consultaAxios)
app.use('/entrenadores', entrenadoresRouter);
app.use('/jugadores', jugadoresRouter);

connect();

module.exports = app;
