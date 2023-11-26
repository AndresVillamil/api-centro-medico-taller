### Nombre del Proyecto
##  API - Centro Médico 

# Table of Contents
1. [General Info](#general-info)
2. [Autores](#autores)
3. [Funcionalidades API](#funcionalidades)
4. [M.E.R Centro Médico](#MER)


# General Info
***
Ejercicio para aprendizaje creación API REST con NodeJS, Express, MySql y Sequelize, para realizar pruebas de end-points, se puede utilizar el archivo request.http instalando REST Client. 

# Instalación y ejecución APP:

**1. Clone este repositorio ejecutnado el siguiente comando: -**

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

REcuerde que el archivo `.env` debe ser creado para que el API trabaje.

Adicionalmente este proyecto utiliza:

- [Nodemon](https://nodemon.io)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- 
# Autore(s):
***
## Edwin Andrés Villamil Laverde. 
## Programa - DESARROLLO WEB BACK END – INTERMEDIO GRUPO 01
## Universidad Distrital Francisco José de Caldas

# :hammer:Funcionalidades del proyecto
***
- `Gestión de Pacientes`: Permite la creación, búsqueda, modificación y eliminación de pacientes.
***
![CrearPacientes](/Pruebas API/Pacientes/CrearPacientes(POST).png)
(/Pruebas API/Pacientes/CrearPacientes(POST).png)
![Obtener Pacientes](/ModeloEntidadRelacion-Proyecto.png)
![Modificar Paciente](/ModeloEntidadRelacion-Proyecto.png)
![Eliminar Paciente](/ModeloEntidadRelacion-Proyecto.png)
- `Gestión de Doctores`: Permite la creación, búsqueda, modificación y eliminación de doctores.
- `Gestión de Citas`: Permite la creación, búsqueda, modificación y eliminación de citas.


### Imagen de Modelo Entidad Relación - Centro Médico
***
![M.E.R Centro Médico](/ModeloEntidadRelacion-Proyecto.png)
