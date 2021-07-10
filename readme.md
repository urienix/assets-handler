# Little librarian

Es un pequeño servicio hecho con nodejs, express y multer que te permite montar tu propio servidor de imagenes, archivos y demas multimedia

### INSTALACIÓN

 - Clona el repositorio a tu servidor e ingresa a la carpeta.
    ```bash
    git clone https://github.com/urienix/web-files-handler.git && cd web-files-handler
    ```

 - Instala las dependencias.
    ```bash
    npm i
    ```

 - Configura tus variables de entorno, usa el archivo ```.env-example``` como ejemplo. (Los siguientes comandos solo funcionan en bash y similares)
    - reemplaza ```localhost``` por el DNS o la IP de tu servidor, tambien hay que reemplazar ```http``` por ```https``` en caso que esté habilitado este segundo.
    ```bash
    echo "HOST=http://localhost" >> .env && echo "PORT=5000" >> .env
    ```

 - Construye el proyecto y crea los directorios de public.
    ```bash
    npm run build && mkdir build/public build/public/images
    ```

 - Inicia el proyecto con ```npm start``` o ejecutando el archivo ```build/index.js```


### FORMA DE USO
Con el sistema en funcionamiento, solo debes hacer un llamado a la API ```http://localhost:5000/upload/images``` con un formulario, dejando el input con ```name="image"``` usando el metodo ```POST``` y tipando el formulario como ```multipart/form-data```, por ejemplo:

```html
    <form action="http://localhost:5000/upload/images" method="post" enctype="multipart/form-data">
      <input type="file" name="image">
      <button type="submit" name="button">Cargar imagen</button>
    </form>
```

Si todo sale bien, la API responderá con:
```json
    {
        "ok": true,
        "message": "Imagen subida exitosamente",
        "host": "http://localhost:5000",
        "url": "/images/image-1625944840600.png"
    }
```


---
<div style="text-align: right;">
    Made with 💙 by <a href="https://urienix.moe" target="_blank">Urienix</a>
</div>
