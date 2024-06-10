# arquitecturaweb
Arquitectura Web

Este repositorio fue creado para contener los desarrollos implementados en la asignatura. 
En particular servirá para almacenar la documentación y el código fuente de una API RESTful.

-------------

# Emisión de pólizas Vida

### Titulares

- ABM Asegurado: Recibe Json con información de un Asegurado

  GET /api/v1/asegurados

  POST /api/v1/asegurados
  {
    "id": 0,
    "apellido": "Aimar",
    "nombre": "José",
    "tipo_doc": "DNI",
    "nro_doc": "14452354",
    "cod_postal": 8000
  }
  Respuesta
  {
    "error": false,
    "status": 201,
    "body": "Item guardado correctamente"
  }

  PUT /api/v1/asegurados
  {
    "id": 8,
    "apellido": "Aimar",
    "nombre": "José",
    "tipo_doc": "DNI",
    "nro_doc": "14452354",
    "cod_postal": 8118
  }

  Respuesta
  {
    "error": false,
    "status": 201,
    "body": "Item actualizado correctamente"
  }

  DELETE /api/v1/asegurados/9

  Respuesta
  {
    "error": false,
    "status": 200,
    "body": "Item borrado correctamente!"
  }

  
- ABM Productor: Recibe Json con información de un Productor

  GET /api/v1/productores

  POST /api/v1/productores

  {
    "id": 0,
    "apellido": "Galván",
    "nombre": "Horacio",
    "matricula": "1000356",
    "cod_postal": 8118
  }

  Respuesta

  {
    "error": false,
    "status": 201,
    "body": "Item guardado correctamente"
  }

  PUT /api/v1/productores
  {
    "id": 8,
    "apellido": "Galván",
    "nombre": "Horacio",
    "matricula": "1000356",
    "cod_postal": 8000
  }

  Respuesta
  {
    "error": false,
    "status": 201,
    "body": "Item actualizado correctamente"
  }

  DELETE /api/v1/productores/8

  Respuesta
  {
    "error": false,
    "status": 200,
    "body": "Item borrado correctamente!"
  }  

- ABM Usuarios: Recibe Json con información de un Usuario

  GET /api/v1/usuarios

  POST /api/v1/usuarios
  {
    "id": 0,
    "nombre": "admin",
    "usuario": "admin123",
    "activo": 1
  }
  Respuesta
  {
    "error": false,
    "status": 201,
    "body": "Item guardado correctamente"
  }

  PUT /api/v1/usuarios
  {
    "id": 8,
    "nombre": "admin",
    "usuario": "admin@123.",
    "activo": 1
  }

  Respuesta
  {
    "error": false,
    "status": 201,
    "body": "Item actualizado correctamente"
  }

  DELETE /api/v1/usuarios/8

  Respuesta
  {
    "error": false,
    "status": 200,
    "body": "Item borrado correctamente!"
  }

  DELETE /api/v1/emision/4

  Respuesta

  {
    "error": false,
    "status": 200,
    "body": "Item borrado correctamente!"
  }

  
  
### Emisión

- ABM Póliza y endosos: Recibe Json con información para generar un nueva póliza y endosos de actualización y/o anulación

  GET /api/v1/emision 

  POST /api/v1/emision 
  {
    "id": 0,
    "cod_seccion": "19",
    "cod_riesgo": "19.01",
    "cod_tipo_endoso": "POLIZA",
    "numero": 10003,
    "serie": 0,
    "fec_emision": "2024-06-10",
    "fec_ini_vig": "2024-06-19",
    "fec_fin_vig": "2025-06-19",
    "cod_asegurado": 8,
    "cod_productor": 7,
    "porc_com_prod": 0,
    "impo_com_prod": 0,
    "impo_suma_aseg": 5000000,
    "porc_tasa_anual": 0.023,
    "impo_prima": 9452.05,
    "porc_iva": 21,
    "impo_iva": 1984.93,
    "impo_premio": 11436.98,
    "cod_usuario": 6
  }

  Respuesta

  {
    "error": false,
    "status": 201,
    "body": "Item guardado correctamente"
  }
  
  PUT /api/v1/emision
  {
    "id": 4,
    "cod_seccion": "19",
    "cod_riesgo": "19.01",
    "cod_tipo_endoso": "POLIZA",
    "numero": 10003,
    "serie": 0,
    "fec_emision": "2024-06-10",
    "fec_ini_vig": "2024-06-19",
    "fec_fin_vig": "2025-06-19",
    "cod_asegurado": 8,
    "cod_productor": 7,
    "porc_com_prod": 0,
    "impo_com_prod": 0,
    "impo_suma_aseg": 5000000,
    "porc_tasa_anual": 0.023,
    "impo_prima": 9452.05,
    "porc_iva": 21,
    "impo_iva": 1984.93,
    "impo_premio": 11436.98,
    "cod_usuario": 7 
  }

  Respuesta

  {
    "error": false,
    "status": 201,
    "body": "Item actualizado correctamente"
  }

  

### Tablas Paramétricas

- ABM Riesgos: Recibe Json con información de un Riesgo de Seguro

  GET /api/v1/riesgos

  POST /api/v1/riesgos
  {
    "id": 0,
    "cod_seccion": "04",
    "codigo": "04.01",
    "descripcion": "Automotor General",
    "importe_fijo": 0,
    "activo": 1
  }

  Respuesta
  {
    "error": false,
    "status": 201,
    "body": "Item guardado correctamente"
  }

 
- ABM Tarifas: Recibe Json con información de una tarifa para un riesgo de Seguro.


### Reportes

- Importe de prima de productores entre fechas: Recibe parámetros de consulta para filtrar la información de prima entre fechas a retornar al cliente.

  GET /api/v1/reportes/productores?fec_desde=2024-06-01&fec_hasta=2024-06-30

- Reporte prima por productor entre fechas: Recibe id de productor en url y parámetros de consulta para filtrar la información de prima entre fechas a retornar al cliente.

  GET /api/v1/reportes/productores/7?fec_desde=2024-06-01&fec_hasta=2024-06-30


