//Importar configuración desde el archivo app.js
const app = require('./app');



//Inicialización del servidor
app.listen(app.get('port'), () =>   {

    console.log('Servidor escuchando en el puerto', app.get('port'));

});