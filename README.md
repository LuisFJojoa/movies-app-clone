# Jojo movies - SPA

Jojo movies es una SPA (Single Page Application) basada en contenido multimedia (películas y series) que permite:

* Iniciar y cerrar sesión.
* Visualizar todas las series existentes.
* Visualizar todas las películas existentes.
* Visualizar series según categoría seleccionada.
* Visualizar películas según categoría seleccionada.
* Realizar búsqueda de series o películas por coincidencias en sus nombres.
* Visualizar más información de una película seleccionada.
* Visualizar más información de una serie seleccionada.

## Stack tecnológico utilizado

_El stack tecnológico utilizado para el FRONTEND fue el siguiente:_

* [React 18.2.0](https://es.reactjs.org/) - Librería para creación de interfaces interactivas.
* [Npm 8.15.1](https://www.npmjs.com/) - Manejador de dependencias.
* [Vite 3.0.7](https://vitejs.dev/) - Herramienta frontend para creación de proyectos.
* [Scss 1.54.5](https://sass-lang.com/) - Preprocesador CSS.
* [Axios 0.27.2](https://axios-http.com/docs/intro) - Cliente HTTP.
* [Swiper 6.8.4](https://swiperjs.com/) - Plugin de JQuery para notificaciones personalizadas.
* [TMDB](https://www.themoviedb.org/) - Base de datos de series y películas (API)

# Despliegue 

Para el despliegue de la aplicación se utilizó [_Netlify_](https://www.netlify.com/), a continuación se comparte el enlace de despliegue:

### [Jojo movies](https://jojo-movies-app.netlify.app)

**Nota:** los usuarios habilitados para utilizar el servicio son:

```
usuario: bemaster@gmail.com
password: bemaster

usuario: user1@gmail.com
password: user1

usuario: user2@gmail.com
password: user2

usuario: user3@gmail.com
password: user3

usuario: user4@gmail.com
password: user4
```

## ¿Quieres probar el proyecto localmente? 

Primero será necesario que clones el repositorio remoto, para esto debes abrir la consola y dirigerte a la ruta especifica donde quieres que sea clonado el repositorio ejecutando el siguiente comando:

```
git clone https://github.com/LuisFJojoa/movies-app-clone.git
```

A continuación, ingresa a la carpeta generada a partir del comando git clone:

```
cd movies-app-clone
```

###  Configuración del FRONTEND para cualquier sistema operativo o entorno de trabajo

Una vez clonado el proyecto, se deben de instalar las dependencias necesarias para el frontend, agregar el apiKey y exponer la aplicación localmente.

Para obtener una _APIKEY_ basta con crear una cuenta en [TMDB](https://www.themoviedb.org/) y, a continuación, puede guiarse con el siguiente [instructivo](https://kb.synology.com/en-global/DSM/tutorial/How_to_apply_for_a_personal_API_key_to_get_video_info) para generarla.

Una vez haya generado la _APIKEY_, debe copiarla e ir al archivo *apiConfig.js* ubicado en la ruta _src/api/_, ahí encontrará una variable llamada _apiKey_, debe agregar su APIKEY en dicha variable y estará lista la conexión con la API.

Por último, basta con ejecutar los siguientes comandos para instalar las dependencias y levantar el frontend correctamente

**Nota:** Recuerde que para ejecutar los siguientes comandos debe encontrarse dentro de la carpeta movie-app-clone:

```
npm install
npm run dev
```

Habitualmente, el frontend se despliega en la dirección [http://localhost:5173](http://localhost:5173). Sin embargo, puede variar debido a la ocupación del puerto por un proceso que se esté ejecutando en su máquina. Para esto, una vez el frontend es desplegado, la consola muestra la url en la cual se puede visualizar.

###  Y... eso es todo, una vez ejecute los pasos mencionados con anterioridad, tendrá la aplicación completa desplegada localmente.

---
Hecho con ❤️ por [Fernando Jojoa](https://github.com/LuisFJojoa/) 😊
