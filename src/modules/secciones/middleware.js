const {check } = require('express-validator');
const {validateResult} = require('../../util/validateHelper');

const validateCreate = [

    /*
      "id": 6,
      , "codigo": "19"
      , "descripcion": "Vida"
      , "activo": 1
    */

    check('codigo')
        .exists()
        .not()
        .isEmpty().withMessage('El código es requerido')
    , check('codigo', 'El código es inválido debe tener un máximo de 2 caracteres')
        .isLength({max: 2})
    , check('descripcion')
        .exists()
        .not()
        .isEmpty().withMessage('La descripción es requerida')
    , check('descripcion', 'La descripción debe tener un máximo de 20 caracteres')
        .isLength({max: 20})
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