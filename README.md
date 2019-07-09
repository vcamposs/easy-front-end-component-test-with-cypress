### Baixe o projeto :
```
$ git clone https://github.com/vcamposs/easy-front-end-component-test-with-cypress.git
```
### Instale as dependências :
1. /app
```
$ cd app
$ npm install
```
2. /component-test
```
$ cd component-test
$ npm install
```
### Subindo o ambiente via docker compose :
```
$ cd component-test
$ docker-compose -f docker-compose.yml up -d --build --force-recreate
```
### O app está presente em "http://localhost:3000/".
### O Stubby está presente em "http://localhost:8884/".
### Execute o teste via Cypress :
```
$ npm run e2e-test:failOnSnapshotDiff
```
### Gere o relatório :
```
$ node report/index.js
```

