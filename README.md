
## Como utilizar ?
#### 1. Baixar o projeto :
```
$ git clone https://github.com/vcamposs/easy-front-end-component-test-with-cypress.git
```
#### 2. Instalar as dependências :
a. /app
```
$ cd app
$ npm install
```
b. /component-test
```
$ cd component-test
$ npm install
```
#### 3. Subir o ambiente via docker compose (app e stubby):
```
$ cd component-test
$ docker-compose -f docker-compose.yml up -d --build --force-recreate
```
O app está presente em "http://localhost:3000/" e o Stubby em "http://localhost:8884/".
#### 4. Executar o teste via Cypress :
```
$ npm run e2e-test:failOnSnapshotDiff
```
#### 5. Gerar o relatório :
```
$ node report/index.js
```
