# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Git create and push to new repository

```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jm84/AngularFundamentalMyStore.git
git push -u origin main
```

## Requisites

```
node -v
npm -v
npm -g @angular/cli
Crea tu primer proyecto: ng new my-project

Ejecuta el servidor de desarrollo: ng serve
Lanzar el servidor en un puerto especifico: ng serve -o --port=3500

ng version dentro del proyecto para ver las versiones que tenemos en el proyecto.
```

## Estructura

```
node_modules: Todo proyecto de Javascript posee este directorio donde se almacenan las librerías y dependencias que se descarguen con NPM.
src: Directorio principal del proyecto donde encontramos:
app: Directorio donde guardaremos todo el código fuente de Angular.
assets: Directorio para imágenes y otros recursos que la app necesita.
environments: Directorio de ambientes, por defecto viene con desarrollo y producción.
favicon.ico: Ícono por defecto que tendrá la pestaña del navegador.
index.html: Archivo HTML principal desde donde se construye toda la aplicación.
main.ts: Archivo principal para la configuración de Angular.
polyfills.ts: Librería para que Angular funcione en navegadores viejos y que la aplicación sea retro compatible.
styles.scss: Archivo principal de estilos.
test.ts: Archivo principal para lanzar el ambiente de pruebas de Angular.
.browserslistrc: Lista de navegadores y sus versiones que permite configurar la compatibilidad de la aplicación con cada uno.
.editorconfig: Permite autoformatear los archivos, espacios, indentación, etc. Hay que tener instalado la extensión en el editor.
.gitignore: Indicarle a GIT qué archivos/directorios ignorar.
angular.json: Archivo principal con toda la configuración del proyecto Angular.
karma.conf.js: Archivo de configuración de Karma. Karma es un task runner para correr pruebas unitarias.
package-lock.json: Describe el las dependencias exactas que se generaron en la instalación del proyecto.
package.json: Archivo para el manejo de dependencias, scripts y metadatos relevantes para el proyecto.
README.md: Archivo markdown para la documentación del proyecto.
tsconfig.app.json: Archivo principal para la configuración de TypeScript.
tsconfig.json: Extensión con más configuraciones de TypeScript.
tsconfig.spec.json: Configuración de TypeScript pero para el ambiente de pruebas.

```

## Extensiones VS Code

-Angular Language Service
-EditorConfig for Visual Studio Code

## Crear archivo .nvmrc

en el indicamos la versino de node que utiliza el proyecto para que la conozcan otros desarrolladores.
-utilizandon: node -v use

## String interpolation

```


es la manera de enviar datos desde nuestro componente hacia la vista. Utilizando el doble símbolo de llaves {{ }}, o también conocidos como brackets, puedes imprimir el valor de una variable, realizar operaciones matemáticas o hacer el llamado a una función dentro del código HTML.

Un componente de Angular se divide en tres archivos: uno para el código TypeScript, otro para el código HTML y uno más para el código CSS.

Angular usa el concepto de decoradores para modificar el comportamiento de las clases. La clase AppComponent implementa el decorador @Component() para indicarle a Angular que esta clase será un componente. Dentro de este decorador, puedes observar el selector del componente (un nombre para el mismo), el template HTML y la hoja de estilos que usará.

Finalmente, dentro de la clase puedes declarar tus propiedades y métodos como en cualquier clase de la programación orientada a objetos. Tenemos una propiedad llamada title que es del tipo string. Podemos mostrar el valor de esta variable en el HTML con una interpolación:

```

<p>{{ title }}</p>

```


Es importante que tengas en cuenta la visibilidad de los atributos y métodos de una clase. Si estos llegaran a ser private, no podrás usarlo en el HTML Las variables deben ser públicas para poder ser compartidas al template.
```

...
export class AppComponent {
// Variable privada, no puede utilizarse en un interpolación
private title = 'Hola! soy una variable privada';
}

```

```
