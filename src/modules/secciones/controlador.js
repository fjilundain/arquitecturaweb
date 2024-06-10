const TABLA = 'Seccion';

module.exports = function (dataInyectada) {

    let data = dataInyectada;

    if (!data) {
        data = require('../../data/mysql');
    }

    function All() {
        return data.All(TABLA);
    }
    
    function Find(id) {
        return data.Find(TABLA, id);
    }
    
    function Add(body) {
        return data.Add(TABLA, body);
    }
    
    
    function Delete(id) {
        return data.Delete(TABLA, id);
    }

    return {

        All 
        , Find
        , Add
        , Delete
    }

}