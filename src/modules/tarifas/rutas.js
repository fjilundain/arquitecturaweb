const express = require('express');
const router = express.Router();

const respuestas = require('../../util/respuestas');
const controlador = require('./index');
const { validateCreate, validateCreateItem } = require('./middleware');


//rutas

//-Tarifa_cab
router.get('/', All);
router.get('/:id', Find);
router.post('/', validateCreate, Add);
router.delete('/:id', Delete);
router.put('/', validateCreate, Add);

//-Tarifa_det
router.get('/:idTarifa/items', AllItems);
router.get('/:idTarifa/items/:idItem', FindItem);
router.post('/items', validateCreateItem, AddItem);
router.delete('/:idTarifa/items/:idItem', DeleteItem);
router.put('/items', validateCreateItem, AddItem);


//Funciones de las rutas

//Tarifa_cab
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
        respuestas.sucess(req, res, 'Item borrado correctamente!', 200);
            
    } catch (err) {
        next(err);
    }
     
};

//Tarifa_det

async function AllItems (req, res, next) {

    try {
        const items = await controlador.AllItems(req.params.idTarifa);
        respuestas.sucess(req, res, items, 200);
    } catch (err) {
        next(err);
       
    }
};

async function FindItem (req, res, next) {

    try {
        const items = await controlador.FindItem(req.params.idTarifa, req.params.idItem);
        respuestas.sucess(req, res, items, 200);
            
    } catch (err) {
        next(err);
    }
};

async function AddItem (req, res, next) {

    try {
        const items = await controlador.AddItem(req.body);
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


async function DeleteItem (req, res, next) {

    try {
        const items = await controlador.DeleteItem(req.params.idTarifa, req.params.idItem);
        respuestas.sucess(req, res, 'Item borrado correctamente!', 200);
            
    } catch (err) {
        next(err);
    }
     
};

module.exports = router;


