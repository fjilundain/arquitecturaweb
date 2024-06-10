const {check } = require('express-validator');
const {validateResult} = require('../../util/validateHelper');

const validateCreate = [

    /*
        "id": 4,
        , "apellido": "Rodriguez"
        , "nombre": "Javier"
        , "tipo_doc": "DNI"
        , "nro_doc": "21365456"
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
    , check('tipo_doc')
        .exists()
        .not()
        .isEmpty().withMessage('El tipo de documento es requerido: (DNI, CUIT, CUIL)').isIn(['DNI', 'CUIT', 'CUIL'])
    , check('nro_doc')
        .exists()
        .not()
        .isEmpty().withMessage('El número de documento es requerido')
        .isNumeric()
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