# Ride-Sharing Platform - Microservices Architecture

## Descripción del Proyecto

Este proyecto implementa una arquitectura de microservicios para una plataforma de ride-sharing, similar a Uber o Lyft. Los microservicios están diseñados para manejar las diferentes funcionalidades clave del sistema, incluyendo la gestión de usuarios, conductores, viajes y pagos. La arquitectura es modular y escalable, facilitando su despliegue y administración en la nube.

## Estructura de Carpetas

- **user-service/**: Microservicio para la gestión de usuarios.
- **driver-service/**: Microservicio para la gestión de conductores y su estado.
- **ride-service/**: Microservicio para la creación y gestión de viajes.
- **payment-service/**: Microservicio para el procesamiento de pagos.
- **api-gateway/**: Configuración del API Gateway para enrutar las solicitudes a los microservicios.
- **terraform/**: Scripts de Terraform para el despliegue de la infraestructura en AWS.

## Endpoints Principales

Cada servicio expone una serie de endpoints RESTful para realizar operaciones CRUD y de gestión específicas.

### Ejemplos de Endpoints

| Servicio         | URI                        | Método | Descripción                                    |
|------------------|----------------------------|--------|------------------------------------------------|
| `user-service`   | `/api/users`               | POST   | Crea un nuevo usuario                          |
| `driver-service` | `/api/drivers/{driverId}`  | GET    | Obtiene información de un conductor            |
| `ride-service`   | `/api/rides/{rideId}`      | PUT    | Actualiza el estado de un viaje                |
| `payment-service`| `/api/payments/{paymentId}`| GET    | Obtiene detalles de un pago                    |

## Requisitos Previos

- **Docker**: Para ejecutar los contenedores de cada servicio.
- **AWS CLI**: Para la administración de recursos en la nube.
- **Terraform**: Para la infraestructura como código.

## Instrucciones de Ejecución

1. **Construcción de los Servicios**: En cada carpeta de servicio, construye la imagen de Docker:
   """
   docker build -t <nombre-servicio> .
   """

2. **Ejecución de los Contenedores**: Ejecuta cada servicio en su puerto asignado:
   """
   docker run -p <puerto>:<puerto> <nombre-servicio>
   """

3. **Despliegue en la Nube**: Usa los scripts de Terraform en la carpeta `terraform/` para desplegar la infraestructura en AWS:
   """
   cd terraform/
   terraform init
   terraform apply
   """

## Tecnologías Usadas

- **Node.js**: Para los microservicios.
- **Express**: Framework de Node.js para gestionar rutas y endpoints.
- **Docker**: Para contenedores de los microservicios.
- **API Gateway**: Para el manejo de solicitudes en la nube.
- **AWS Lambda y EC2**: Opciones para desplegar los microservicios.
- **Terraform**: Para infraestructura como código.

---