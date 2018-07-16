# Cardify Reloaded

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Flujo de trabajo

1. Inicio
    * Se escribe primera versión del README.md con una descripción general de la biblioteca.
    * Se inicializa proyecto con npm init y git init. 
    * Se crea index.html además del diseño de la página que contiene las instrucciones para el usuario. 
    * Se crean los primeros issues en GitHub. 

2. Desarrollo de la funcionalidad. 
    * Se instala babel 
    * Se implementa funcionalidad
    * Se preapara el entorno para desarrollo de pruebas con Nodejs. 
    * Se hace code review. 

3. Fase final
    * Se realizan pruebas. 
    * Completar la implementación de librería. 
    * Se realiza code review. 
    * Se publica biblioteca. 

## Instalación

### Global (navegador)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="path-to-cardify.js"></script>
```

## Uso

```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
$(container).cardify({});
```

## Ejemplos

...
