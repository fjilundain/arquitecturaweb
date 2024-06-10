const express = require('express');
const router = express.Router();

const respuestas = require('../../util/respuestas');
const controlador = require('./index');
const { validateCreate } = require('./middleware');


//rutas
router.get('/', All);
router.get('/:id', Find);
router.post('/', validateCreate, Add);
router.delete('/:id', Delete);
router.put('/', validateCreate, Add);

//Funciones de las rutas
async function All (req, res, next) {

    try {
        const items = await controlador.All();
        respuestas.sucess(req, res, items, 200);
    } catch (err) {
        next(err);
       
    }

    
};

async function Find (req, res, next) {

    try {
        const items = await controlador.Find(req.params.id);
        respuestas.sucess(req, res, items, 200);
            
    } catch (err) {
        next(err);
    }
    
    
};


async function Add (req, res, next) {

    try {
        const items = await controlador.Add(req.body);
        if (req.body.id == 0){
            mensaje = 'Item guardado correctamente';
        }
        else {
            mensaje = 'Item actualizado correctamente';
        }
        respuestas.sucess(req, res, mensaje, 201);
            
    } catch (err) {
        next(err);
    }
    
    
};

async function Delete (req, res, next) {

    try {
        const items = await controlador.Delete(req.params.id);
        respuestas.sucess(req, res, 'Item eliminada correctamente!', 200);
            
    } catch (err) {
        next(err);
    }
    
    
};

module.exports = router;

