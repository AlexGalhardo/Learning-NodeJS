# References

## Install Ubuntu 
- [https://snapcraft.io/node](https://snapcraft.io/node)

## Event Loop
- https://www.origamid.com/slide/javascript-completo-es6/#/0101-javascript-completo-es6/11
![event_loop](https://user-images.githubusercontent.com/19540357/128660447-0b1ef65c-b7b1-4277-b510-5a66b5fc8138.jpg)

## Others
- https://nodejs.dev/learn
- [YouTube Grátis - Curso de Node.js do zero a produção!! Construindo uma API com Typescript, Jest, TDD e muito mais - Waldemar Neto](https://www.youtube.com/watch?v=W2ld5xRS3cY&list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh&index=2&ab_channel=WaldemarNeto-DevLab)
- https://heynode.com/
   - https://heynode.com/tutorial/overview-environmental-variables/
   - https://opensource.com/article/19/8/what-are-environment-variables
- https://erickwendel.teachable.com/
- https://www.udemy.com/course/the-complete-nodejs-developer-course-2/
- https://www.udemy.com/course/nodejs-the-complete-guide/
- https://www.luiztools.com.br/

## Resources
- https://github.com/sindresorhus/awesome-nodejs
- https://www.npmjs.com/package/insomnia-documenter
- https://swagger.io/
- https://randomkeygen.com/

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
server.listen(8080, () => { console.log('listening on 8080') });
```
- OR use module: https://www.npmjs.com/package/https-localhost

## Modules/Packages
- HTTP
   - [https://www.npmjs.com/package/node-fetch](https://www.npmjs.com/package/node-fetch)
- Express
   - [https://expressjs.com/pt-br/](https://expressjs.com/pt-br/)
   - [https://express-validator.github.io/docs/](https://express-validator.github.io/docs/)
   - [https://www.npmjs.com/package/express-jwt](https://www.npmjs.com/package/express-jwt)
   - [https://www.npmjs.com/package/express-mysql-session](https://www.npmjs.com/package/express-mysql-session)
   - [https://www.npmjs.com/package/express-session](https://www.npmjs.com/package/express-session)
      - https://github.com/expressjs/session/blob/master/README.md
- CORS
   - [https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)
- Testing and Code Quality
   - [https://www.npmjs.com/package/jest](https://www.npmjs.com/package/jest)
   - [https://www.npmjs.com/package/prettier](https://www.npmjs.com/package/prettier)
   - [https://www.npmjs.com/package/eslint](https://www.npmjs.com/package/eslint)
- .gitginore
   - [https://www.npmjs.com/package/gitignore](https://www.npmjs.com/package/gitignore)
- Validator
   - [https://www.npmjs.com/package/validator](https://www.npmjs.com/package/validator)
   - [https://www.npmjs.com/package/joi](https://www.npmjs.com/package/joi)
- Template Engine
   - [https://github.com/janl/mustache.js](https://github.com/janl/mustache.js)
   - [https://www.npmjs.com/package/mustache-express](https://www.npmjs.com/package/mustache-express)
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

## FREE APIs to Play
- https://jsonplaceholder.typicode.com/
- http://api.vagalume.com.br/docs/
- https://pokeapi.co/
- https://swapi.dev/


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
- nodemon.json
```json
{
 "restartable": "rs",
 "ignore": [
   ".git",
   "dist",
   "node_modules/**/node_modules"
 ],
 "verbose": true,
 "events": {
   "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
 },
 "env": {
   "NODE_ENV": "development"
 },
 "ext": "ts,json"
}
```

## Using Bcrypt Example
- $ npm install bcrypt
- ../helpers/Bcrypt.js
```js
const bcrypt = require('bcrypt');

const Bcrypt = {
    cryptPassword: (password) =>
        bcrypt.genSalt(12)
        .then((salt => bcrypt.hash(password, salt)))
        .then(hash => hash),

    comparePassword: (password, hashPassword) =>
        bcrypt.compare(password, hashPassword)
        .then(resp => resp)
};

module.exports = Bcrypt;
```
- using Bcrypt
```js
const Bcrypt = require('../helpers/Bcrypt')
const password = 'userpassword';

// return hash
const userPasswordHash = await Bcrypt.cryptPassword(password);
userPasswordHash = '$2y$12$skd4.pWo.BU6/QpMIWhAK..XSVfpWWx7srqIrdmO0nHmknwOCureS'
// return true or false
const userPasswordIsValid = await Bcrypt.comparePassword(password, userPasswordHash)


```

## Force HTTP to HTTPS in Production
```js
const app = express();

if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`)
    } else {
      next();
    }
  });
}
```

## Services
- SMS/Voice 
   - [https://www.zenvia.com/](https://www.zenvia.com/)
   - [https://www.twilio.com/](https://www.twilio.com/)
- SMTP
   - [https://ethereal.email/](https://ethereal.email/)
   - [https://www.mailgun.com/](https://www.mailgun.com/)
   - [https://www.sendinblue.com/](https://www.sendinblue.com/)
   - [https://sendgrid.com/](https://sendgrid.com/)

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
- Tutorial
   - [https://www.mysqltutorial.org/](https://www.mysqltutorial.org/)
- ORM
   - [https://sequelize.org/](https://sequelize.org/)
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
- GitHub Workflows/Actions
   - https://docs.github.com/pt/actions/guides/building-and-testing-nodejs
- DNS
   - https://dnsimple.com/
   - https://howdns.works/
   - https://howhttps.works
   - https://howdnssec.works/
- SSL/HTTPS VPS
   - https://certbot.eff.org/ 
- Heroku
   - https://devcenter.heroku.com/articles/heroku-cli
   - https://devcenter.heroku.com/articles/deploying-nodejs
- AWS
   - SDK
      - https://aws.amazon.com/sdk-for-javascript/
   - Tutorials
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
console.log(`SUM: ${Math.sum(2,3)}`); // SUM: 5
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