# Wonder App

Esta app esta hecha para dar información sobre planes de viajes.
El diseño esa pensando para mobile, sin embargo es responsive.

### Link: https://wondertravelapp.netlify.app/

### Esta creada con:

-Module Bundler: VITE

-Superset javascript: Typescript

-Framework Javascript: ReactJs

-Preprocesador Css: PostCss

-Framework Css: TailwindCss

-Framework Testing: Vitest

-Libreria de testing: react-testing-library

-Package Manager: Yarn

### Como ejecutar la app

yarn install

yarn dev

### Como ejecutar los test

yarn test

Se desplegará una UI que le ayudará a visualizar los test

![Image text](public/images/readme/test/vitestUI.png)

#### Como ver el coverage del testing:

yarn coverage

-Go to: tests/coverage

-Open index.html

![Image text](public/images/readme/test/coverage.png)

## Trabajo sobre componentes

Para trabajar sobre componentes reutilizables se usaron story books

### Link : https://636fd55712827b1c13e9bde4-ixfbwejlpc.chromatic.com/?path=/story/wonder-circle--wonder-image

Los componentes utilizados en este proyecto estan en la seccion WONDER, para personalizarlos usar la sección canvas y cambiar las propiedades de control, por ejemplo:

Para crear este botón: 
![Image text](public/images/readme/storybooks/reservaWonder.png)

Ve a la sección wonder, componente Button y cambia las propiedades de control por:

- urlImage: https://wondertravel.co/wp-content/themes/Wonder/assets/img/wpp-icon.svg

- label: Reserva ya!

- backgroundColor: #FF805A

- neon: true

- fontColor: #ffffff

![Image text](public/images/readme/storybooks/storybookButton.png)