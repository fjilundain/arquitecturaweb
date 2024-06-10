const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host
    , user: config.mysql.user
    , password: config.mysql.password
    , database: config.mysql.database
}

let conexion;

function connMysql() {
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if (err) {
            console.log('[DB Error]', err);
            setTimeout(connMysql, 200);
        }
        else {
            console.log('DB Conectada!')
        }
    })

    conexion.on('error', err => {
        console.log('[DB Error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connMysql();
        }
        else {
            throw err;
        }
    })

}

connMysql();

function All(tabla) {
    return new Promise ( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${process.env.MYSQL_DATABASE}.${tabla}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });

    })
}

function Find(tabla, id) {
    return new Promise ( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${process.env.MYSQL_DATABASE}.${tabla} WHERE id=${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });

    })

}


function Add(tabla, data) {
    if (data && data.id == 0) {
        return Insert(tabla, data);
    } else {
        return Update(tabla, data);
    }
}


function Delete(tabla, id) {
    return new Promise ( (resolve, reject) => {
        conexion.query(`DELETE FROM ${process.env.MYSQL_DATABASE}.${tabla} WHERE id=${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });

    })

}


function Insert(tabla, data) {
    return new Promise ( (resolve, reject) => {
        conexion.query(`INSERT INTO ${process.env.MYSQL_DATABASE}.${tabla} SET ?`, data, (error, result) => {
            return error ? reject(error) : resolve(result);
        });

    })

}


function Update(tabla, data) {
    return new Promise ( (resolve, reject) => {
        conexion.query(`UPDATE ${process.env.MYSQL_DATABASE}.${tabla} SET ? WHERE id = ?`, [data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });

    })

}


function CustomQuery(customQuery) {
    return new Promise ( (resolve, reject) => {
        conexion.query(`${customQuery}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });

    })

}


module.exports = {
    All 
    , Find
    , Add
    , Delete
    , CustomQuery
}