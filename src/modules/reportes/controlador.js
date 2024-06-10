const TABLA = 'Poliza';

module.exports = function (dataInyectada) {

    let data = dataInyectada;

    if (!data) {
        data = require('../../data/mysql');
    }

    function ReporteProductores(idProductor, fec_desde, fec_hasta) {

        var customQuery = ``;

        if (idProductor === 0){
            customQuery = `select datos.cod_productor, concat(prod.apellido, ', ', prod.nombre) as nom_prod, datos.cod_tipo_endoso, datos.cantidad, datos.impo_comision, datos.impo_prima from (select	pol.cod_productor, pol.cod_tipo_endoso, count(*) as cantidad, sum(pol.impo_com_prod) as impo_comision, sum(pol.impo_prima) as impo_prima from ${process.env.MYSQL_DATABASE}.poliza pol where pol.fec_emision between '${fec_desde}' and '${fec_hasta}' group by pol.cod_productor, pol.cod_tipo_endoso) datos join ${process.env.MYSQL_DATABASE}.productor prod on datos.cod_productor = prod.id`
        }
        else {
            customQuery = `select datos.cod_productor, concat(prod.apellido, ', ', prod.nombre) as nom_prod, datos.cod_tipo_endoso, datos.cantidad, datos.impo_comision, datos.impo_prima from (select	pol.cod_productor, pol.cod_tipo_endoso, count(*) as cantidad, sum(pol.impo_com_prod) as impo_comision, sum(pol.impo_prima) as impo_prima from ${process.env.MYSQL_DATABASE}.poliza pol where pol.cod_productor = ${idProductor} and pol.fec_emision between '${fec_desde}' and '${fec_hasta}' group by pol.cod_productor, pol.cod_tipo_endoso) datos join ${process.env.MYSQL_DATABASE}.productor prod on datos.cod_productor = prod.id`
        }

        console.log(customQuery);
        return data.CustomQuery(customQuery);

    }

    return {
        ReporteProductores
    }

}