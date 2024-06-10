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

  
- ABM Productor: Recibe Json con información de un Productor

### Emisión

- Alta Póliza: Recibe Json con información para generar un nueva póliza
- Alta Endoso: Recibe Json con información para generar un endoso de póliza
- Alta Anulación: : Recibe Json con información para anular una póliza

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


