# Benilaser - Sitio web (cliente)

<img src="./src/assets/images/logo-black.png" width="100%"/>

## Tabla de contenidos

-   [Descripción del proyecto y objetivo](#descripción-del-proyecto-y-objetivo)
-   [Capturas de pantalla](#capturas-de-pantalla)
-   [Características](#características)
-   [Tecnologías](#tecnologías)
-   [Despliegue](#despliegue)
-   [Instrucciones de uso](#instrucciones-de-uso)
-   [Variables de entorno](#variables-de-entorno)
-   [Estructura del proyecto](#estructura-del-proyecto)
-   [Contribución](#contribución)
-   [Licencia](#licencia)
-   [Contacto](#contacto)
-   [Agradecimientos](#agradecimientos)

## Descripción del Proyecto y Objetivo

Este proyecto consiste en el desarrollo de la página web de [Benilaser](https://www.benilaser.es), una clínica especializada en eliminación láser ubicada en Benidorm, Alicante, España. Se trata de un
trabajo freelance cuyo objetivo es proporcionar a los clientes información detallada sobre los servicios que ofrece la clínica y los precios y procesos de los tratamientos, así como otros aspectos
importantes, como el horario de atención, la ubicación, el equipo utilizado y las facilidades de contacto.

## Capturas de pantalla

<p align="center">
    <img src="./public/readme-1.png" width="49%" />
    <img src="./public/readme-2.png" width="49%" />
</p>
<p align="center">
    <img src="./public/readme-3.png" width="49%" />
    <img src="./public/readme-4.png" width="49%" />
</p>
<p align="center">
    <img src="./public/readme-5.png" width="24%" />
    <img src="./public/readme-6.png" width="24%" />
    <img src="./public/readme-7.png" width="24%" />
    <img src="./public/readme-8.png" width="24%" />
</p>

## Características

-   Diseño web moderno y responsivo, adaptado a todas las resoluciones de pantalla.
-   Presentación visual del contenido mediante la implementación de carruseles con la librería [react-slick](https://www.npmjs.com/package/react-slick).
-   Implementación de elementos de diseño como íconos con la librería de [react-icons](https://react-icons.github.io/react-icons/) y un pequeño switch con la librería de
    [react-switch](https://www.npmjs.com/package/react-switch).
-   Selector de código de área para móviles con la librería [react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input).
-   Utilización de la librería [react-google-maps](https://visgl.github.io/react-google-maps/) para renderizar un componente con un mapa interactivo, donde se muestra la ubicación del local.
-   Utilización de la [API de Google Maps](https://developers.google.com/maps) para renderizar las reseñas que tiene el local en Google Maps.
-   Presentación de un botón fijo en la pantalla que permite contactar al instante con la clínica mediante Whatsapp.
-   Implementación del servicio de [EmailJS](https://www.emailjs.com/) para gestionar el envío de correos electrónicos mediante un formulario al correo de la empresa.
-   Navegación entre las diferentes vistas mediante el uso de la librería [react-router-dom](https://reactrouter.com/en/main).
-   Implementación de variables de entorno, con el objetivo de mantener la privacidad y seguridad del usuario y ocultar información sensible.

## Tecnologías

-   <img src="./public/vite.png" style="height: 15px"/> **Vite:** Se utilizó como generador de proyeto y entorno de desarrollo.
-   <img src="./public/react.png" style="height: 15px"/> **React:** Se utilizó como freamwork de desarrollo del cliente.
-   <img src="./public/npm.png" style="height: 15px"/> **Npm:** Se utilizó para la incorporación de todas las librerías utilizadas en el proyecto.
-   <img src="./public/vercel.png" style="height: 15px"/> **Vercel:** Se utilizó para el despligue de la aplicación.

## Despliegue

Este proyecto ha sido desplegado en mediante el servicio gratuito de [Vercel](https://vercel.com/).

## Instrucciones de uso

Para correr este servicio de manera local deberá seguir los siguientes pasos:

1. Clone este repositorio en tu máquina local con el comando:
    ```bash
    git clone https://github.com/Gaston-Valentini/benilaser-client.git
    ```
2. En la carpeta que se generó el proyecto, instale las dependencias con el comando:
    ```bash
    npm install
    ```
3. Cree un archivo .env en la raíz del proyecto y configurar las variables de entorno como se ejemplifica en el archivo .env.example.
4. Para desplegar el proyecto de manera local, deberá ejecutar el comando:
    ```bash
    npm run dev
    ```
5. Visite en un navegador la dirección http://localhost:5173.

## Variables de entorno

-   VITE_GOOGLE_API_KEY (Clave API del servicio de Google Maps)
-   VITE_GOOGLE_MAP_ID (Id del mapa del servicio de Google Maps)
-   VITE_EMAILJS_SERVICE_ID (Id del servicio generado en EmailJS)
-   VITE_EMAILJS_TEMPLATE_ID (Id de la plantilla que se utilizará para dar forma al correo electrónico de EmailJS)
-   VITE_EMAILJS_PUBLIC_KEY (Clave pública del usuario de EmailJS)

## Estructura del proyecto

```
benilaser-client/
├── public/ (Contiene las imágenes del README.md)
├── src/
│   ├── assets/ (Contiene archivos multimedia)
│   ├── components/ (Contiene componentes reutilizables)
│   ├── sections/ (Contiene las secciones de la web)
│   ├── views/ (Contiene las diferentes vistas de la web, donde se mostraran las secciones)
│   ├── App.jsx (Contiene toda la aplicación que se renderizará en el root de index.html)
│   ├── App.module.css (Contiene los estilos generales del componente App)
│   ├── index.css (Contiene las configuraciones generales de estilo y variables globales)
│   └── main.jsx (Se encarga de insertar el componente App en el root de index.html)
├── .env.example (Contiene los ejemplos de las variables de entorno)
├── .gitignore (Contiene los archivos y carpetas que deben ser ignorados por git)
├── index.html (Archivo principal que renderiza la aplicación en el navegador)
├── LICENSE (Contiene toda la información pertinente a la licencia del proyecto)
├── package-lock.json (Asegura la instalación consistente y reproducible de las versione exactas de las dependencias del proyecto)
├── package.json (Define las configuraciones básicas, metadatos y dependencias necesarias del proyecto)
├── README.md (Contiene una guía detallada del proyecto)
├── vercel.json (Define las configuraciones para que el proyecto pueda ser desplegado correctamente en Vercel)
└── vite.config.js (Configura y personaliza el comportamiento de Vite)
```

## Contribución

¡Tus contribuciones son bienvenidas! Si deseas informar de problemas, proponer mejoras o enviar solicitudes no dudes en hacérmelo saber a través de mi
[LinkedIn](https://www.linkedin.com/in/gastonvalentini/)

## Licencia

Este proyecto está bajo la licencia de Creative Commons Attribution-NonCommercial-NoDerivatives (CC BY-NC-ND).

## Contacto

Para preguntas o colaboraciones, puedes contactarme a través de mis redes:

-   [LinkedIn](https://www.linkedin.com/in/gastonvalentini/)
-   [GitHub](https://github.com/Gaston-Valentini)
-   [gastonvalentiniruiz@gmail.com](mailto:gastonvalentiniruiz@gmail.com)
-   [+34623271806](tel:+34623271806)

## Agradecimientos

Me gustaría agradecer a todo el equipo de Benilaser por hacer posible esta colaboración.

[Volver al inicio](#benilaser---sitio-web-cliente)
