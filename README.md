# References

## Install Ubuntu 
- [https://snapcraft.io/node](https://snapcraft.io/node)

## Others
- https://nodejs.dev/learn
- https://erickwendel.teachable.com/
- https://www.udemy.com/course/the-complete-nodejs-developer-course-2/
- https://www.udemy.com/course/nodejs-the-complete-guide/
- https://www.luiztools.com.br/

## Resources
- https://github.com/sindresorhus/awesome-nodejs
- https://www.npmjs.com/package/insomnia-documenter
- https://swagger.io/

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
   - $ npm install --save mustache-express
- DevDependencies
   - $ npm install --save-dev @types/node
   - $ npm install --save-dev @types/mustache-express
   - $ npm install --save-dev @types/validator
   - $ npm install --save-dev @types/express

## Latest Stable Version
- $ sudo npm cache clean -f
- $ sudo npm install -g n
- $ sudo n stable

## Enforce HTTPS in Express Localhost
- sudo openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
- sudo openssl rsa -in keytmp.pem -out key.pem
```js
const fs = require('fs');
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');
const express = require('express')
const https = require('https');
const app = express()
const server = https.createServer({key: key, cert: cert }, app);
server.listen(8080, () => { console.log('listening on 3001') });
```

## Modules/Packages
- HTTP
   - [https://expressjs.com/pt-br/](https://expressjs.com/pt-br/)
   - [https://www.npmjs.com/package/node-fetch](https://www.npmjs.com/package/node-fetch)
- CORS
   - [https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)
- ORM
   - [https://sequelize.org/](https://sequelize.org/)
- Validator
   - [https://www.npmjs.com/package/validator](https://www.npmjs.com/package/validator)
- Template Engine
   - [https://github.com/janl/mustache.js](https://github.com/janl/mustache.js)
   - [https://www.npmjs.com/package/mustache-express](https://www.npmjs.com/package/mustache-express)
- Parser URL Encoded
   - [https://www.npmjs.com/package/body-parser](https://www.npmjs.com/package/body-parser)
- Framework MVC
   - [https://adonisjs.com/](https://adonisjs.com/)
- Authentication
   - [http://www.passportjs.org/](http://www.passportjs.org/)
- Dates
   - [https://www.npmjs.com/package/moment](https://www.npmjs.com/package/moment)
- Logger Middleware
   - [https://www.npmjs.com/package/morgan](https://www.npmjs.com/package/morgan)
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
- JSON-SERVER
   - [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)
- FAKE DATA
   - [https://github.com/Marak/faker.js](https://github.com/Marak/faker.js)
- Process Manager
   - [https://github.com/typicode/hotel](https://github.com/typicode/hotel)

## FREE APIs to Play
- https://jsonplaceholder.typicode.com/
- http://api.vagalume.com.br/docs/
- https://pokeapi.co/
- https://swapi.dev/


## TypeScrypt
- $ sudo npm install -g typescript
- $ tsc --init
- $ npm install --save-dev @types/node
- $ tsc -w (ficar monitorando typescript)
- tsconfig.json 
   - "outDir": "./dist",                              
   - "rootDir": "./src", 
   - "module": "commonjs",
   - "moduleResolution": "node"

## Services
- SMS/Voice 
   - [https://www.zenvia.com/](https://www.zenvia.com/)
   - [https://www.twilio.com/](https://www.twilio.com/)
- SMTP
   - [https://www.mailgun.com/](https://www.mailgun.com/)
   - [https://www.sendinblue.com/](https://www.sendinblue.com/)
   - [https://sendgrid.com/](https://sendgrid.com/)
   - [https://www.activecampaign.com/](https://www.activecampaign.com/)

## MongoDB
- DEFAULT PORT: 27017
- Packages/Modules
   - [https://mongoosejs.com/](https://mongoosejs.com/)
- As A Service
   - [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- GUI Software:
   - [https://robomongo.org/](https://robomongo.org/)
   - [https://www.mongodb.com/pt-br/products/compass](https://www.mongodb.com/pt-br/products/compass)
   - [https://nosqlbooster.com/](https://nosqlbooster.com/)
   - https://github.com/mongo-express/mongo-express
   - https://hub.docker.com/r/mongoclient/mongoclient/

## MySQL
- DEFAULT PORT: 3306
- Packages
   - https://www.npmjs.com/package/mysql2
- As A Service
   - https://remotemysql.com/
- Heroku
   - https://devcenter.heroku.com/articles/cleardb

## Docker 
- https://hub.docker.com/_/mongo-express

#### Fast Setup MongoDB + MongoClient 
```
sudo docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=alex \
    -e MONGO_INITDB_ROOT_PASSWORD=mypassword \
    -d \
    mongo:4

sudo docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

sudo docker exec -it mongodb \
    mongo --host localhost -u admin -p mypassword 
    --authenticationDatabase admin \
    --eval "db.getSiblingDB('database_test').createUser(
      {user: 'alex', pwd: 'mypassword', 
      roles: [{role: 'readWrite', db: 'database_test'}]}
   )"
```

## Deploy
- Heroku
   - https://devcenter.heroku.com/articles/heroku-cli
   - https://devcenter.heroku.com/articles/deploying-nodejs
- AWS
   - SDK
      - https://aws.amazon.com/sdk-for-javascript/
   - Tutoriais
      - https://aws.amazon.com/getting-started/hands-on/deploy-nodejs-web-app/
      - https://www.luiztools.com.br/post/publicando-sua-aplicacao-node-js-no-amazon-lightsail-aws/
      - https://www.luiztools.com.br/post/deploy-de-banco-mongodb-na-aws-com-atlas/
      - https://www.luiztools.com.br/post/deploy-de-aplicacao-nodejs-mysql-na-amazon-aws/
   - S3
      - https://aws.amazon.com/s3/
      - https://www.npmjs.com/package/multer-s3
      - https://www.npmjs.com/package/s3-proxy

- DigitalOcean
   - https://www.luiztools.com.br/post/deploy-de-aplicacao-node-js-na-digital-ocean/
- Articles
   - https://blog.risingstack.com/node-js-logging-tutorial/
   - https://expressjs.com/pt-br/advanced/best-practice-security.html

## Import/Export Modules

#### Older module.exports
- Math.ts
```ts
function sum(x:number, y:number):number {
 return x+y;
}
module.exports.sum = sum;
```
- index.ts
```ts
const Math = require('./Math');
console.log(`SUM: ${Math.sum(n1,n2)}`);
```

#### Modern Object
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
console.log(`SOMA: ${Math.sum(n1,n2)}`);
```

#### Modern Functions
- Math.ts
```ts
export function sum(x:number, y:number):number {
 return x+y;
}
```
- index.ts
```ts
import { sum } from './Math';
console.log(`SOMA: ${sum(n1,n2)}`);
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
const body = {
    "name": "New item adicionado com NODEJS",
    "description": "npm init e tals",
    "price": 19.90,
    "category_id": 1
};
fetch(`${API_URL}/${ENDPOINT}`, {
     method: 'POST',
     body:    JSON.stringify(body),
     headers: { 'Content-Type': 'application/json' },
 })
 .then(res => res.json())
 .then(json => console.log(json));


// --------- PUT
const body = {
    "name": "PRODUTO 8 ATUALIZADO",
    "description": "description atualized",
    "price": 59.90,
    "category_id": 2
};

const product_id = 8;

fetch(`${API_URL}/${ENDPOINT}/${product_id}`, {
  method: 'PUT',
  body:    JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' },
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));


// --------- PATCH
const body = {
    "name": "Item 12 nome atualizado",
    "price": 39.90,
};

const product_id_to_patch = 12;

fetch(`${API_URL}/${endpoint}/${product_id_to_patch}`, {
    method: 'PATCH',
    body:    JSON.stringify(body),
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