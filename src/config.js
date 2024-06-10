require('dotenv').config();

//Variables globales del sistema
module.exports = {
    app: {
        port: process.env.PORT
    }
    , mysql: {
        host: process.env.MYSQL_HOST || localhost
        , user: process.env.MYSQL_USER || root
        , password: process.env.MYSQL_PASSWORD || root
        , database: process.env.MYSQL_DATABASE || polizas

    }
}