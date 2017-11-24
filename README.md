# BookManager

Projeto gerado pelo [Angular CLI](https://github.com/angular/angular-cli) versão 1.5.0.

### Rodar em Dev

Rode `ng serve` no terminal para desenvolvimento. Navegue em `http://localhost:4200/`.

### Rodar em Prod

Rode `npm run deploy` para gerar o projeto em `prod` e fazer o deploy.

### Deploy

O Processo do deploy esta bem simples, basta fazer um `push` na branch `gh-pages` e aplicação ja esta atualizada.

## Detalhes

### Tecnologia Utilizadas

- HTML5
- SCSS
- Angular.io
- Angular-CLI
- Webpack
- Bootstrap

### Fixes
Identifiquei que o valor da propriedade `totalItems` da resposta da API retorna cada vez um valor (tanto para mais como para menos) com isso a paginação dos itens varia de forma brusca e também em algumas páginas não retorna nenhum livro encontrado (a resposta da API vem vazia). Em alguns fóruns o pessoal relata que é um problema da API mesmo, ela é randomica e varia bastante de acordo com o `startIndex` que é enviado.

[Product Forums](https://productforums.google.com/forum/#!topicsearchin/books-api/pagination)
