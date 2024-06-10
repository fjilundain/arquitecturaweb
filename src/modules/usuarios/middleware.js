const {check } = require('express-validator');
const {validateResult} = require('../../util/validateHelper');

const validateCreate = [

    /*
      "id": 6,
      , "nombre": "Pedro Chacabuco"
      , "usuario": "pchacabuco"
      , "activo": 1
    */

    check('nombre')
        .exists()
        .not()
        .isEmpty().withMessage('El nombre es requerido')
    , check('nombre', 'El nombre es inválido debe tener un máximo de 20 caracteres')
        .isLength({max: 20})
    , check('usuario')
        .exists()
        .not()
        .isEmpty().withMessage('El usuario es requerido')
    , check('usuario', 'El usuario debe tener un máximo de 20 caracteres')
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