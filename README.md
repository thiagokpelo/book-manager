# BookManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Fixes
Identifiquei que o valor da propriedade `totalItems` da resposta da API retorna cada vez um valor (tanto para mais como para menos) com isso a paginação dos itens varia de forma brusca e também em algumas páginas não retorna nenhum livro encontrado (a resposta da API vem vazia). Em alguns fóruns o pessoal relata que é um problema da API mesmo, ela é randomica e varia bastante de acordo com o `startIndex` que é enviado.

[Product Forums](https://productforums.google.com/forum/#!topicsearchin/books-api/pagination)
