const {check } = require('express-validator');
const {validateResult} = require('../../util/validateHelper');

const validateCreate = [

    /*
      "id": 6,
      , "cod_seccion": "19"
      , "codigo": "POLIZA"
      , "descripcion": "EMISIÓN DE PÓLIZA"
      , "fec_desde": "2024-01-01"
      , "fec_hasta": "2050-12-31"
    */


    check('cod_seccion')
        .exists()
        .not()
        .isEmpty().withMessage('El código de sección es requerido')
    , check('codigo')
        .exists()
        .not()
        .isEmpty().withMessage('El código es requerido')
    , check('codigo', 'El código es inválido debe tener un máximo de 10 caracteres')
        .isLength( {max: 10})
    , check('descripcion')
        .exists()
        .not()
        .isEmpty().withMessage('La descripción es requerida')
    , check('descripcion', 'La descripción debe tener un máximo de 50 caracteres')
        .isLength({max: 50})
    , check('fec_desde')
        .exists()
        .not()
        .isEmpty().withMessage('La fecha desde es requerida')
        .isDate()
    , check('fec_hasta')
        .exists()
        .not()
        .isEmpty().withMessage('La fecha hasta es requerida')
        .isDate()


    , (req, res, next) => {
        validateResult(req, res, next);
    }

]


module.exports = { validateCreate }