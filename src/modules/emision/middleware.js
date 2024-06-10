const {check } = require('express-validator');
const {validateResult} = require('../../util/validateHelper');

const validateCreate = [

    /*
      "id": 1,
      "cod_seccion": "19",
      "cod_riesgo": "19.01",
      "cod_tipo_endoso": "POLIZA",
      "numero": 10000,
      "serie": 0,
      "fec_emision": "2024-06-10T03:00:00.000Z",
      "fec_ini_vig": "2024-06-14T03:00:00.000Z",
      "fec_fin_vig": "2025-06-14T03:00:00.000Z",
      "cod_asegurado": 4,
      "cod_productor": 8,
      "porc_com_prod": 0,
      "impo_com_prod": 0,
      "impo_suma_aseg": 5000000,
      "porc_tasa_anual": 0.023,
      "impo_prima": 9452.05,
      "porc_iva": 21,
      "impo_iva": 1984.93,
      "impo_premio": 11436.98,
      "cod_usuario": 7
    */


    check('cod_seccion')
        .exists()
        .not()
        .isEmpty().withMessage('El código de sección es requerido')
    , check('cod_seccion', 'El código de sección es inválido debe tener un máximo de 2 caracteres')
        .isLength( {max: 2})
    , check('cod_riesgo')
        .exists()
        .not()
        .isEmpty().withMessage('El código de riesgo es requerido')
    , check('cod_riesgo', 'El código de riesgo es inválido debe tener un máximo de 20 caracteres')
        .isLength( {max: 20})
    , check('cod_tipo_endoso')
        .exists()
        .not()
        .isEmpty().withMessage('El código de tipo de endoso es requerido')
    , check('cod_tipo_endoso', 'El código de tipo de endoso es inválido debe tener un máximo de 10 caracteres')
        .isLength( {max: 10})
    , check('numero')
        .exists()
        .not()
        .isEmpty().withMessage('El número de póliza es requerido')
        .isNumeric()
    , check('serie')
        .exists()
        .not()
        .isEmpty().withMessage('La serie de póliza es requerida')
        .isNumeric()
    , check('fec_emision')
        .exists()
        .not()
        .isEmpty().withMessage('La fecha de emisión es requerida')
        .isDate()
    , check('fec_ini_vig')
        .exists()
        .not()
        .isEmpty().withMessage('La fecha de inicio de vigencia es requerida')
        .isDate()
    , check('fec_fin_vig')
        .exists()
        .not()
        .isEmpty().withMessage('La fecha de fin de vigencia es requerida')
        .isDate()
    , check('cod_asegurado')
        .exists()
        .not()
        .isEmpty().withMessage('El código de asegurado es requerido')
        .isNumeric()
    , check('cod_productor')
        .exists()
        .not()
        .isEmpty().withMessage('El código de productor es requerido')
        .isNumeric()
    , check('porc_com_prod')
        .exists()
        .not()
        .isEmpty().withMessage('El porcentaje de comisión del productor es requerido')
        .isDecimal() 
    , check('impo_com_prod')
        .exists()
        .not()
        .isEmpty().withMessage('El importe de comisión del productor es requerido')
        .isDecimal() 
    , check('impo_suma_aseg')
        .exists()
        .not()
        .isEmpty().withMessage('El importe de suma asegurada es requerido')
        .isDecimal() 
    , check('porc_tasa_anual')
        .exists()
        .not()
        .isEmpty().withMessage('El porcentaje de tasa anual es requerido')
        .isDecimal() 
    , check('impo_prima')
        .exists()
        .not()
        .isEmpty().withMessage('El importe de prima es requerido')
        .isDecimal() 
    , check('porc_iva')
        .exists()
        .not()
        .isEmpty().withMessage('El porcentaje de iva es requerido')
        .isDecimal() 
    , check('impo_iva')
        .exists()
        .not()
        .isEmpty().withMessage('El importe de iva es requerido')
        .isDecimal() 
    , check('impo_premio')
        .exists()
        .not()
        .isEmpty().withMessage('El importe de premio es requerido')
        .isDecimal() 
    , check('cod_usuario')
        .exists()
        .not()
        .isEmpty().withMessage('El código de usuario es requerido')
        .isNumeric()
        
    , (req, res, next) => {
        validateResult(req, res, next);
    }

]


module.exports = { validateCreate }