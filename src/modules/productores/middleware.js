const {check } = require('express-validator');
const {validateResult} = require('../../util/validateHelper');

const validateCreate = [

    /*
        "id": 6,
        , "apellido": "Roldán"
        , "nombre": "Rogelio"
        , "matricula": "1000452"
        , "cod_postal": 8000
    */

    check('apellido')
        .exists()
        .not()
        .isEmpty().withMessage('El apellido es requerido')
    , check('apellido', 'El apellido es inválido debe tener un máximo de 100 caracteres')
        .isLength({max: 100})
    , check('nombre')
        .exists()
        .not()
        .isEmpty().withMessage('El nombre es requerido')
    , check('nombre', 'El nombre es inválido debe tener un máximo de 100 caracteres')
        .isLength({max: 100})
    , check('matricula')
        .exists()
        .not()
        .isEmpty().withMessage('La matrícula es requerida')
    , check('matricula', 'La matrícula debe tener un máximo de 10 caracteres')
        .isLength({max: 10})
    , check('cod_postal')
        .exists()
        .not()
        .isEmpty().withMessage('El código postal es requerido')
        .isNumeric()
    , (req, res, next) => {
        validateResult(req, res, next);
    }

]


module.exports = { validateCreate }