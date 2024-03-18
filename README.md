# Prueba Desarrollador Fullstack

<p style="justify-content: center">
   <img src="https://img.shields.io/badge/versión-v1.0-blue.svg" alt="version">
   <img src="https://img.shields.io/badge/status-completed-green" alt="status">
</p>

✨ Gestión de Información de Clientes.

## ⚡️ Descripción

El siguiente proyecto es una prueba para la oferta de desarrollador fullstack. Consiste basicamente en la gestión de la información de los clientes y ventas. El proyecto fue desarrollado en JavaScript (Nodejs) tanto en el backend, usando Expressjs y el servicio del frontend Reactjs, con MySQL como gestor de base de datos, chartjs para la visualización de datos.

## 📌 Estructura del Proyecto

> El proyecto tiene la siguiente estructura:

```bash
├── node_modules
├── apps
│   ├── server
│   ├── client
├── scripts
│   ├── init.sql
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── turbo.json
```

La carpeta `apps` contiene los servicios backend en la carpeta `server` y frontend `client`.

## 🚀 Setup

Para ejecutar la aplicación es necesario que realize unas configuraciones previas:

> Configuracion de Proyecto

1. Tener instalado Nodejs (+16) y MySQL.
2. Clonar el proyecto: `git clone https://github.com/chrisjosuedev/skyline-app.git` (Omitir este paso si cuenta con el .zip del proyecto)
3. Entrar a la carpeta raiz del proyecto:
   `cd skyline-app`
4. En la carpeta root del proyecto `/skylinedb.sql` se encuentra el script sql que contiene la creación de la base de datos, asi como la tabla principal y algunos datos. Ejecute el script de dicha carpeta ya sea vía `mysql -u <su_usuario> -p` y `source skylinedb.sql` o mediante su GUI favorito (Ej. Workbench)
5. Si clonó el proyecto desde git, instalar los módulos de node vía `npm install` en la carpeta root del proyecto `.../skyline-app`.

> Configuración de credenciales de la base de datos:

1. Acceda a la carpeta `config` que se encuentra en `/apps/server/src/config/config.js`, cambie "root" por su usuario y "admin" por su contraseña de mysql, asi como en el archivo .env de la raíz del proyecto server.

> 🛠 Ejecutar

1. Primero, hay que crear el build del cliente: ejecutar el siguiente comando: `npm run build`
2. Una vez realizadas las configuraciones anteriores, puede correr el proyecto (en root del proyecto `.../skyline-app/`):
   - `npm start` para modo producción.
3. Una vez realizado, el proyecto se ejecutara y puede acceder a través de `http://localhost:9090/` en el navegador.

