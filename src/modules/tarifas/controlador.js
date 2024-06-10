const TABLA_CAB = 'Tarifa_cab';
const TABLA_DET = 'Tarifa_det';

module.exports = function (dataInyectada) {

    let data = dataInyectada;

    if (!data) {
        data = require('../../data/mysql');
    }

    //Tarifa_cab
    function All() {
        return data.All(TABLA_CAB);
        //const customQuery = `UPDATE ${process.env.MYSQL_DATABASE}.${tabla} SET ? WHERE id = ?`
        //const customQuery = `select json_pretty(aux.tarifas) as tarifas from (SELECT DISTINCT JSON_OBJECT("id", tc.id, "cod_seccion", tc.cod_seccion, "cod_riesgo", tc.cod_riesgo, "descripcion", tc.descripcion, "fec_desde", tc.fec_desde, "fec_hasta", tc.fec_hasta, "detalle", (SELECT JSON_ARRAYAGG(JSON_OBJECT("edad_desde", td.edad_desde, "edad_hasta", td.edad_desde, "suma_aseg_desde", td.suma_aseg_desde, "suma_aseg_hasta", td.suma_aseg_hasta, "tasa_anual", td.tasa_anual)) FROM polizas.tarifa_det td WHERE td.id = tc.id order by td.edad_desde, td.suma_aseg_desde)) as tarifas FROM polizas.tarifa_cab tc left join polizas.tarifa_det td on tc.id = td.id group by tc.id) aux`
        //const customQuery = `SELECT DISTINCT tc.id, tc.cod_seccion, tc.cod_riesgo, tc.descripcion, tc.fec_desde, tc.fec_hasta, (SELECT JSON_ARRAYAGG(JSON_OBJECT('edad_desde', td.edad_desde, 'edad_hasta', td.edad_desde, 'suma_aseg_desde', td.suma_aseg_desde, 'suma_aseg_hasta', td.suma_aseg_hasta, 'tasa_anual', td.tasa_anual)) FROM polizas.tarifa_det td WHERE td.id = tc.id order by td.edad_desde, td.suma_aseg_desde) as detalle FROM polizas.tarifa_cab tc left join polizas.tarifa_det td on tc.id = td.id group by tc.id`;
        //return data.CustomQuery(customQuery);
    }
    
    function Find(id) {
        return data.Find(TABLA_CAB, id);
    }
    
    function Add(body) {
        return data.Add(TABLA_CAB, body);
    }
    
    
    function Delete(id) {
        return data.Delete(TABLA_CAB, id);
    }

    //Tarifa_det
    function AllItems(idTarifa) {

        const customQuery = `SELECT td.* FROM ${process.env.MYSQL_DATABASE}.${TABLA_DET} td WHERE td.tarifa_id = ${idTarifa} order by td.edad_desde, td.suma_aseg_desde`;
        return data.CustomQuery(customQuery);

    }
    
    function FindItem(idTarifa, idItem) {
        const customQuery = `SELECT td.* FROM ${process.env.MYSQL_DATABASE}.${TABLA_DET} td WHERE td.tarifa_id = ${idTarifa} and td.id = ${idItem}`;
        return data.CustomQuery(customQuery);
s    }
    
    async function AddItem(body) {

        const tarifa = await data.Find(TABLA_CAB, body.tarifa_id);
        const tarifa_string=JSON.stringify(tarifa);
        //console.log('>> string: ', string );
        const tarifa_json =  JSON.parse(tarifa_string);
        //console.log('>> json: ', tarifa_json);
        //console.log('>> check([]): ', check(tarifa_json));
        //console.log('>> tarifa.id: ', json[0].id);

        if (check(tarifa_json) === 0){
                throw new Error('Identifador de tarifa (tarifa_id) no encontrado; Verifique!');
        }
        else {
                return data.Add(TABLA_DET, body);
        }
    }
    
    
    function DeleteItem(idTarifa, idItem) {

        const customQuery = `DELETE FROM ${process.env.MYSQL_DATABASE}.${TABLA_DET} td WHERE td.tarifa_id = ${idTarifa} and td.id = ${idItem}`;
        return data.CustomQuery(customQuery);
    }    


    function check(dataJson) {
        return !!dataJson && Object.keys(dataJson).length;
      }


    return {

        All 
        , Find
        , Add
        , Delete

        , AllItems
        , FindItem
        , AddItem
        , DeleteItem
    }

}