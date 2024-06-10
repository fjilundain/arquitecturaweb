const {check } = require('express-validator');
const {validateResult} = require('../../util/validateHelper');

const validateCreate = [

    /*
      "id": 6,
      , "cod_seccion": "19"
      , "codigo": "19.01"
      , "descripcion": "Vida Individual"
      , "importe_fijo": 7500
      , "activo": 1
    */

    check('cod_seccion')
        .exists()
        .not()
        .isEmpty().withMessage('El código de sección es requerido')
    , check('cod_seccion', 'El código de sección es inválido debe tener un máximo de 2 caracteres')
        .isLength({max: 2})
    , check('codigo')
        .exists()
        .not()
        .isEmpty().withMessage('El código de riesgo es requerido')
    , check('codigo', 'El código de riesgo es inválido debe tener un máximo de 20 caracteres')
        .isLength({max: 20})
    , check('descripcion')
        .exists()
        .not()
        .isEmpty().withMessage('La descripción es requerida')
    , check('descripcion', 'La descripción debe tener un máximo de 50 caracteres')
        .isLength({max: 50})
    , check('importe_fijo')
        .exists()
        .not()
        .isEmpty().withMessage('El importe fijo es requerido')
        .isNumeric()
    , check('activo')
        .exists()
        .not()
        .isEmpty().withMessage('El campo activo es requerido: (0, 1)')
        .isInt({lt:2})


    , (req, res, next) => {
        validateResult(req, res, next);
    }

]


module.exports = { validateCreate }