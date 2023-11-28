### Nombre del Proyecto
##  API - Centro Médico 

# Tabla de Contenido
1. [Información General](#general-info)
2. [Autores](#autores)
3. [Funcionalidades API](#funcionalidades)
4. [M.E.R Centro Médico](#MER)


# General Info
***
Ejercicio para aprendizaje creación API REST con NodeJS, Express, MySql y Sequelize, para realizar pruebas de end-points, se puede utilizar el archivo request.http instalando REST Client. 

# Instalación y ejecución APP:

**1. Clone este repositorio ejecutando el siguiente comando: -**

```bash
 git clone "git+https://github.com/AndresVillamil/api-centro-medico-taller.git"
 cd api-centro-medico-taller
```

**2. Instalación de package requeridos:-**

```bash
 npm install
```

**3. Ejecute el comando npm para iniciar el proyecto :-**

```bash
 npm run dev
```

**4.** **🎉 Abrir postman and probar el API en esta url `https://127.0.0.1:8000`**

Recuerde que el archivo `.env` debe ser creado para que el API trabaje.

Adicionalmente este proyecto utiliza:

- [Nodemon](https://nodemon.io)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)


# Autore(s):
***
## Edwin Andrés Villamil Laverde. 
## Programa - DESARROLLO WEB BACK END – INTERMEDIO GRUPO 01
## Universidad Distrital Francisco José de Caldas

# :hammer:Funcionalidades del proyecto
***
- `Gestión de Pacientes`: Permite la creación, búsqueda, modificación y eliminación de pacientes.
***
-  Crear un Paciente
![CrearPacientes](./Pruebas%20API/Pacientes/CrearPacientes(POST).png)

-  Obtener Listado de Pacientes
![Obtener Pacientes](./Pruebas%20API/Pacientes/ObtenerPacientes(GET).png)

-  Modificar un Paciente por ID
![Modificar Paciente](./Pruebas%20API/Pacientes/Modificar%20y%20Consultar%20un%20paciente%20por%20ID.png)

-  Eliminar un Paciente
![Eliminar Paciente](./Pruebas%20API/Pacientes/Eliminar%20un%20Paciente.png)

- `Gestión de Doctores`: Permite la creación, búsqueda, modificación y eliminación de doctores.
***
-  Crear un Doctor
![CrearDoctores](./Pruebas%20API/Doctores/CrearDoctores(POST).png)

-  Obtener Listado de Doctores
![Obtener Doctores](./Pruebas%20API/Doctores/ObtenerDoctores(GET).png)

-  Modificar un Doctor por ID
![Modificar Doctor](./Pruebas%20API/Doctores/Modificar%20y%20Consultar%20un%20doctor%20por%20ID.png)

-  Eliminar un Doctor
![Eliminar Doctor](./Pruebas%20API/Doctores/Eliminar%20un%20doctor.png)



- `Gestión de Citas`: Permite la creación, búsqueda, modificación y eliminación de citas.
***
-  Crear una Cita
![CrearCita](./Pruebas%20API/Citas/CrearCitas(POST).png)

-  Obtener Listado de Citas
![Obtener Citas](./Pruebas%20API/Citas/ObtenerCitas(GET).png)

-  Modificar unq Cita por ID
![Modificar Cita](./Pruebas%20API/Citas/Modificar%20y%20Consultar%20una%20cita%20por%20ID.png)

-  Eliminar unq Cita
![Eliminar Cita](./Pruebas%20API/Citas/Eliminar%20una%20cita.png)


### Imagen de Modelo Entidad Relación - Centro Médico
***
![M.E.R Centro Médico](/ModeloEntidadRelacion-Proyecto.png)

### Documentacion Swagger
***
Documentación end-points swagger
![rutas-api](./Pruebas%20API/DocumentacionAPI/RutasAPI_1.png)

Schemas swagger
![schemas-api](./Pruebas%20API/DocumentacionAPI/Schemas.png)

Funcionamiento Rutas Get
- Pacientes
![getPacientes-api](./Pruebas%20API/DocumentacionAPI/GetPacientes.png)

- Doctores
![getDoctores-api](./Pruebas%20API/DocumentacionAPI/GetDoctores.png)

- Citas
![getCitas-api](./Pruebas%20API/DocumentacionAPI/GetCitas.png)