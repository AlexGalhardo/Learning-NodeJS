# References

## Install Ubuntu 
- [https://snapcraft.io/node](https://snapcraft.io/node)

## Event Loop
- https://www.origamid.com/slide/javascript-completo-es6/#/0101-javascript-completo-es6/11
- [Talk #27 - JavaScript Event Loop (Parte 1)](https://www.youtube.com/watch?v=va8-xdxTywU)
- [Mas que diabos é o loop de eventos? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=0s)
- [Javascript & Node.js: Do baixo ao alto nível](https://www.youtube.com/watch?v=M6wLBpzSvqw)
![event_loop](https://user-images.githubusercontent.com/19540357/128660447-0b1ef65c-b7b1-4277-b510-5a66b5fc8138.jpg)
<table>
<thead>
<tr>
<th>Feature</th>
<th>Processo</th>
<th>Thread</th>
</tr>
</thead>
<tbody>
<tr>
<td>Execução</td>
<td>Linha própria</td>
<td>Linha própria</td>
</tr>
<tr>
<td>Memória global (heap e data segmnent)</td>
<td>Própria</td>
<td>Compartilhada</td>
</tr>
<tr>
<td>Memória local (stack, registers, PCounter)</td>
<td>Sim</td>
<td>Geralmente</td>
</tr>
<tr>
<td>Consumo de memória</td>
<td>Normal</td>
<td>Ligeiramente menor</td>
</tr>
<tr>
<td>Manipuladores de recursos externos</td>
<td>Proprietário</td>
<td>Empresta do processo</td>
</tr>
<tr>
<td>Tempo de criação</td>
<td>Relativamente longo</td>
<td>Relativamente curto</td>
</tr>
<tr>
<td>Tempo de troca de contexto</td>
<td>Relativamente longo</td>
<td>Relativamente curto</td>
</tr>
<tr>
<td>Instâncias</td>
<td>Múltiplas</td>
<td>Múltiplas</td>
</tr>
<tr>
<td>Associação</td>
<td>Um programa (executável)</td>
<td>Um processo</td>
</tr>
<tr>
<td>Paralelismo</td>
<td>Limitado</td>
<td>Sim</td>
</tr>
<tr>
<td>Comunicação entre seus pares</td>
<td>Só com um mecanismo de IPC</td>
<td>Sim, dentro do processo</td>
</tr>
<tr>
<td>Eficiência de comunicação</td>
<td>Não</td>
<td>Sim</td>
</tr>
<tr>
<td>Comunicação direta com o OS</td>
<td>Sim</td>
<td>Não</td>
</tr>
<tr>
<td>Controle de exceções</td>
<td>Próprio</td>
<td>Próprio</td>
</tr>
<tr>
<td>Confiabilidade e segurança</td>
<td>Sim</td>
<td>Depende do código</td>
</tr>
</tbody>
</table>

## Commands
- $ npm init
- $ npm init -y
- $ npm start  
   - "scripts": { "start": "node index.js",
- $ npm run dev 
   - "scripts": { "dev": "nodemon index.js",
- Global Examples
   - $ sudo npm install -g nodemon
   - $ sudo npm install -g typescrypt 
   - $ sudo npm install -g ts-node
   - $ sudo npm install -g express-generator
   - $ sudo npm install -g lite-server
- Dependencies
   - $ npm install mustache-express
- DevDependencies
   - $ npm install --save-dev @types/node
   - $ npm install --save-dev @types/mustache-express
   - $ npm install --save-dev @types/validator
   - $ npm install --save-dev @types/express
   - $ npm i -D @types/body-parser
      - -D = --save-dev

## Latest Stable Version
- $ sudo npm cache clean -f
- $ sudo npm install -g n
- $ sudo n stable
- https://github.com/nvm-sh/nvm
- $ sudo npm install -g npm

## Modules/Packages
- HTTP
   - [https://www.npmjs.com/package/node-fetch](https://www.npmjs.com/package/node-fetch)
- Express
   - [https://expressjs.com/pt-br/](https://expressjs.com/pt-br/)
   - [https://express-validator.github.io/docs/](https://express-validator.github.io/docs/)
   - [https://www.npmjs.com/package/express-jwt](https://www.npmjs.com/package/express-jwt)
   - [https://www.npmjs.com/package/express-mysql-session](https://www.npmjs.com/package/express-mysql-session)
   - [https://www.npmjs.com/package/express-session](https://www.npmjs.com/package/express-session)
   - Articles
      - https://expressjs.com/en/advanced/best-practice-performance.html
- Debug
   - [https://www.npmjs.com/package/debug](https://www.npmjs.com/package/debug)
- File System
   - [https://www.npmjs.com/package/fs-extra](https://www.npmjs.com/package/fs-extra)
- Async
   - [https://www.npmjs.com/package/async](https://www.npmjs.com/package/async)
- CORS
   - [https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)
- Utilites
   - [https://www.npmjs.com/package/lodash](https://www.npmjs.com/package/lodash)
- Testing and Code Quality
   - [https://www.npmjs.com/package/jest](https://www.npmjs.com/package/jest)
   - [https://www.npmjs.com/package/prettier](https://www.npmjs.com/package/prettier)
   - [https://www.npmjs.com/package/eslint](https://www.npmjs.com/package/eslint)
   - [https://mochajs.org/](https://mochajs.org/)
   - [https://www.chaijs.com/](https://www.chaijs.com/)
   - [https://visionmedia.github.io/superagent/](https://visionmedia.github.io/superagent/)
- .gitginore
   - [https://www.npmjs.com/package/gitignore](https://www.npmjs.com/package/gitignore)
- CLI
   - [https://www.npmjs.com/package/commander](https://www.npmjs.com/package/commander)
   - [https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/chalk)
- Validator
   - [https://www.npmjs.com/package/validator](https://www.npmjs.com/package/validator)
   - [https://www.npmjs.com/package/joi](https://www.npmjs.com/package/joi)
- Template Engine
   - [https://github.com/janl/mustache.js](https://github.com/janl/mustache.js)
   - [https://www.npmjs.com/package/mustache-express](https://www.npmjs.com/package/mustache-express)
- Cache
   - [https://www.npmjs.com/package/node-cache](https://www.npmjs.com/package/node-cache)
- Parser URL Encoded
   - [https://www.npmjs.com/package/body-parser](https://www.npmjs.com/package/body-parser)
- Framework MVC
   - [https://adonisjs.com/](https://adonisjs.com/)
- Authentication
   - [http://www.passportjs.org/](http://www.passportjs.org/)
   - [https://www.npmjs.com/package/passport-local-mongoose](https://www.npmjs.com/package/passport-local-mongoose)
   - [https://www.npmjs.com/package/passport-local](https://www.npmjs.com/package/passport-local)
   - [https://www.npmjs.com/package/connect-ensure-login](https://www.npmjs.com/package/connect-ensure-login)
- Dates & Times
   - [https://www.npmjs.com/package/moment](https://www.npmjs.com/package/moment)
- EMAIL SMTP
   - [https://www.npmjs.com/package/nodemailer](https://www.npmjs.com/package/nodemailer)
- Slug
   - [https://www.npmjs.com/package/slug](https://www.npmjs.com/package/slug)
- .env
   - [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)
- Assets Compression
   - [https://www.npmjs.com/package/compression](https://www.npmjs.com/package/compression)
- Security HTTP Headers
   - [https://helmetjs.github.io/](https://helmetjs.github.io/)
- UUID
   - [https://www.npmjs.com/package/uuid](https://www.npmjs.com/package/uuid)
- Query String
   - [https://www.npmjs.com/package/query-string](https://www.npmjs.com/package/query-string)
- DataBases
   - [https://knexjs.org/](https://knexjs.org/)
      - https://devhints.io/knex
   - [https://sequelize.org/](https://sequelize.org/)
- JSON-SERVER
   - [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)
- Logging
   - [https://www.npmjs.com/package/bunyan](https://www.npmjs.com/package/bunyan)
   - [https://www.npmjs.com/package/winston](https://www.npmjs.com/package/winston)
   - [https://www.npmjs.com/package/morgan](https://www.npmjs.com/package/morgan)
- FAKE DATA
   - [https://github.com/Marak/faker.js](https://github.com/Marak/faker.js)
- Production
   - [https://www.npmjs.com/package/pm2](https://www.npmjs.com/package/pm2)
   - [https://www.npmjs.com/package/@sentry/node](https://www.npmjs.com/package/@sentry/node)


## TypeScrypt
- $ sudo npm install -g nodemon typescript ts-node
- $ npm install --save-dev @types/express @types/mustache-express @types/node copyfiles
- $ tsc --init
- $ tsc -w (ficar monitorando typescript)
- package.json
   - "scripts":
      - "start": "tsc ; nodemon ./dist/app",
- tsconfig.json 
   - "outDir": "./dist",                              
   - "rootDir": "./src", 
   - "module": "commonjs",
   - "moduleResolution": "node"

## Import/Export Modules

#### Older module.exports (ES5)
- Math.js
```ts
function sum(x:number, y:number):number {
 return x+y;
}
module.exports = sum;
```
- index.js
```ts
const Math = require('./Math');
console.log(`SUM: ${Math.sum(n1,n2)}`);
```

#### Modern Object (ES6+)
- Math.ts
```ts
function sum(x:number, y:number):number {
 return x+y;
}
export default {
	sum:sum, // sum
};
```
- index.ts
```ts
import * as Math from './Math';
console.log(`SUM: ${Math.sum(2,3)}`); // SUM: 5
```

#### Modern Functions (ES6+)
- Math.ts
```ts
export function sum(x:number, y:number):number {
 return x+y;
}
```
- index.ts
```ts
import { sum } from './Math';
console.log(`SUM: ${sum(2,3)}`); // SUM: 5
```

## JSON SERVER FAST REST API
- $ sudo npm install -g json-server
- Change PORT
   - json-server --watch db.json --port 3004
- create db.json
```json
{
  "products": [
    {
      "id": 1,
      "name": "Sushi",
      "description": "A melhor comida que existe.",
      "price": 8.5,
      "category_id": 1
    },
    {
      "id": 2,
      "name": "Batata Frita",
      "description": "Só o Cristiano Ronaldo não gosta.",
      "price": 10.5,
      "category_id": 1
    },
    {
      "id": 3,
      "name": "X-Tudo",
      "description": "Melhor lanche que existe.",
      "price": 12.5,
      "category_id": 1
    },
    {
      "id": 4,
      "name": "Tubaina",
      "description": "Os clássicos a gente nunca esquece.",
      "price": 14.5,
      "category_id": 2
    },
    {
      "id": 5,
      "name": "Koka Kola",
      "description": "Refrigerante que faz mal.",
      "price": 5.5,
      "category_id": 2
    },
    {
      "id": 6,
      "name": "Dollynho",
      "description": "Seu amiguinho, vamos brincar?",
      "price": 7.5,
      "category_id": 2
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "Comida"
    },
    {
      "id": 2,
      "name": "Refrigerantes"
    }
  ]
}
```
- $ json-server --watch db.json

<table>
<thead>
<tr>
<th>Request</th>
<th>URL</th>
<th>Details</th>
<td>headers: { 'Content-Type': 'application/json' }</td>
</tr>
</thead>

<tbody>

<tr>
<td>GET</td>
<td>http://localhost:3000/products</td>
<td>Return all products</td>
</tr>

<tr>
<td>GET</td>
<td>http://localhost:3000/products/1</td>
<td>Return product by ID</td>
</tr>
<tr>

<td>POST</td>
<td>http://localhost:3000/products</td>
<td>Create new product</td>
<td>
   {
       "nome": "Bolo de Cenoura com cobertura de chocolate",
       "descricao": "DELÍCIA",
       "preco": 9.5,
       "categoria_id": 1
   }
</td>
</tr>
<tr>
<td>PUT</td>
<td>http://localhost:3000/products/1</td>
<td>Update all product data by ID</td>
<td>
   {
       "name": "Sushi edited",
       "description": "description edited",
       "preco": 10.5,
       "category_id": 1
   }
</td>
</tr>
<tr>
<td>PATCH</td>
<td>http://localhost:3000/products/1</td>>
<td>Update some product data by ID</td>
<td>
   {
       "name": "New Sushi Name"
   }
</td>
</tr>
<tr>
<td>DELETE</td>
<td>http://localhost:3000/products/1</td>
<td>Delete a product by ID</td>
</tr>
<tr>
<td>GET</td>
<td>http://localhost:3000/products?name=Sushi</td>
<td>Filter products by name</td>
</tr>
<tr>
<td>GET</td>
<td>http://localhost:3000/products/?_page=1&_limit=2</td>
<td>Get products by Pagination</td>
</tr>
<tr>
<td>GET</td>
<td>http://localhost:3000/products/?_sort=nome&_order=desc</td>
<td>Get products order by</td>
</tr>
</tbody>
</table>


### Exampe with Node-Fetch
- $ npm install node-fetch
```js
const fetch = require('node-fetch');

const API_URL = 'http://localhost:3000';
const ENDPOINT = 'products';

// --------- GET
fetch(`${API_URL}/${ENDPOINT}`, {
  "method": "GET"
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));


// --------- POST
fetch(`${API_URL}/${ENDPOINT}`, {
     method: 'POST',
     body: JSON.stringify({
        "name": "New item adicionado com NODEJS",
        "description": "npm init e tals",
        "price": 19.90,
        "category_id": 1
     }),
     headers: { 'Content-Type': 'application/json' },
 })
 .then(res => res.json())
 .then(json => console.log(json));


// --------- PUT
const product_id_to_put = 8;

fetch(`${API_URL}/${ENDPOINT}/${product_id_to_put}`, {
  method: 'PUT',
  body: JSON.stringify({
        "name": "PRODUTO 8 ATUALIZADO",
        "description": "description atualized",
        "price": 59.90,
        "category_id": 2
  }),
  headers: { 'Content-Type': 'application/json' },
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));


// --------- PATCH
const product_id_to_patch = 12;

fetch(`${API_URL}/${ENDPOINT}/${product_id_to_patch}`, {
    method: 'PATCH',
    body:    JSON.stringify({
        "name": "Item 12 nome atualizado",
        "price": 39.90,
    }),
    headers: { 'Content-Type': 'application/json' },
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));


// --------- DELETE
const product_id_to_delete = 3;
fetch(`${API_URL}/${ENDPOINT}/${product_id_to_delete}`, {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));


// --------- FILTER BY NAME
const filterName = 'Sushi';

fetch(`${API_URL}/${ENDPOINT}?name=${filterName}`, {
  "method": "GET"
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.error(err)); 


// ---------- ORDER BY
const ORDER = 'DESC';
const SORT = 'preco';

fetch(`${API_URL}/${ENDPOINT}/?_sort=${SORT}&_order=${ORDER}`, {
  "method": "GET"
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));


// ----------- PAGINATION
let page = 3;
let limit = 4;
fetch(`${API_URL}/${ENDPOINT}/?_page=${page}&_limit=${limit}`, {
  "method": "GET"
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
```