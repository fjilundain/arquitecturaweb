const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const asegurados = require('./modules/asegurados/rutas');
const productores = require('./modules/productores/rutas');
const secciones = require('./modules/secciones/rutas');
const riesgos = require('./modules/riesgos/rutas');
const tarifas = require('./modules/tarifas/rutas');
const tipoEndosos = require('./modules/tipoendosos/rutas');
const emision = require('./modules/emision/rutas');
const reportes = require('./modules/reportes/rutas');
const usuarios = require('./modules/usuarios/rutas');
const error = require('./util/errores');

const app = express();


//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Configuración
app.set('port', config.app.port);

//rutas
app.use('/api/v1/asegurados', asegurados);
app.use('/api/v1/productores', productores);
app.use('/api/v1/secciones', secciones);
app.use('/api/v1/riesgos', riesgos);
app.use('/api/v1/tarifas', tarifas);
app.use('/api/v1/tipoendosos', tipoEndosos);
app.use('/api/v1/emision', emision);
app.use('/api/v1/reportes', reportes);
app.use('/api/v1/usuarios', usuarios);
app.use(error);


module.exports = app;