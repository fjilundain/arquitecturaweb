const { validationResult } = require('express-validator'); //TODO:
const respuestas = require('./respuestas');

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {

        respuestas.error(req, res, { errors: err.array() }, 400);
        //res.status(403)
        //res.send({ errors: err.array() })
    }
}

module.exports = { validateResult }