const {check } = require('express-validator');
const {validateResult} = require('../../util/validateHelper');

const validateCreate = [

    /*
        "id": 4,
        , "cod_seccion": "19"
        , "cod_riesgo": "19.02"
        , "descripcion": "Vida Colectivo"
        , "fec_desde": "2024-01-01"
        , "fec_hasta": "2050-12-31"
    */

    check('cod_seccion')
        .exists()
        .not()
        .isEmpty().withMessage('El código de sección es requerido')
    , check('cod_seccion', 'El código de sección es inválido debe tener un máximo de 2 caracteres')
        .isLength({max: 2})
    , check('cod_riesgo')
        .exists()
        .not()
        .isEmpty().withMessage('El código de riesgo es requerido')
    , check('cod_riesgo', 'El código de riesgo es inválido debe tener un máximo de 20 caracteres')
        .isLength({max: 20})
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


const validateCreateItem = [

    /*
        "id": 4,
        , "tarifa_id": 6
        , "edad_desde": 0
        , "edad_hasta": 150
        , "suma_aseg_desde": 0
        , "suma_aseg_hasta": 5000000
        , "tasa_anual": 1.20
    */

    check('tarifa_id')
        .exists()
        .not()
        .isEmpty().withMessage('El código de tarifa es requerido')
        .isNumeric(), 
    check('edad_desde')
        .exists()
        .not()
        .isEmpty().withMessage('La edad desde es requerida')
        .isNumeric(), 
    check('edad_hasta')
        .exists()
        .not()
        .isEmpty().withMessage('La edad hasta es requerida')
        .isNumeric(),
    check('suma_aseg_desde')
        .exists()
        .not()
        .isEmpty().withMessage('La suma asegurada desde es requerida')
        .isDecimal(), 
    check('suma_aseg_hasta')
        .exists()
        .not()
        .isEmpty().withMessage('La suma asegurada hasta es requerida')
        .isDecimal(),
    check('tasa_anual')
        .exists()
        .not()
        .isEmpty().withMessage('La tasa anual es requerida')
        .isDecimal()
    , (req, res, next) => {
        validateResult(req, res, next);
    }

]


module.exports = { validateCreate, validateCreateItem }