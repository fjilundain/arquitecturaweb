const express = require('express');
const router = express.Router();

const respuestas = require('../../util/respuestas');
const controlador = require('./index');
const { validateCreate } = require('./middleware');


//rutas-reportes
router.get('/productores/', ReporteProductores);
router.get('/productores/:id', ReporteProductores);


async function ReporteProductores (req, res, next) {

    try {

        var idProductor = 0;
        if (req.params.id === undefined) {
            idProductor = 0
        } 
        else {
            idProductor = req.params.id 
        }
        console.log(idProductor)
        console.log(req.query.fec_desde)
        console.log(req.query.fec_hasta)

        if ((req.query.fec_desde === undefined) || (req.query.fec_hasta === undefined)) {
            throw new Error('Parámetros fec_desde y/o fec_hasta no encontrados; verifique!');
        }
        else {
           const items = await controlador.ReporteProductores(idProductor, req.query.fec_desde, req.query.fec_hasta);
           respuestas.sucess(req, res, items, 200);
        }

            
    } catch (err) {
        next(err);
    }
    
    
};

module.exports = router;

