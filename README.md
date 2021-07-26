# References

## Install Ubuntu 
- [https://snapcraft.io/node](https://snapcraft.io/node)

## Others
- https://nodejs.dev/learn
- https://erickwendel.teachable.com/
- https://www.udemy.com/course/the-complete-nodejs-developer-course-2/
- https://www.udemy.com/course/nodejs-the-complete-guide/
- https://www.luiztools.com.br/

## Commands
- $ npm init
- $ npm init -y
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
- EMAIL SMTP
   - [https://www.npmjs.com/package/nodemailer](https://www.npmjs.com/package/nodemailer)
- Slug
   - [https://www.npmjs.com/package/slug](https://www.npmjs.com/package/slug)
- .env
   - [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)
- FAKE REST JSON API
   - [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

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

## Docker 
- https://hub.docker.com/_/mongo-express
- Fast Setup
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

docker exec -it mongodb \
    mongo --host localhost -u admin -p mypassword --authenticationDatabase admin \
    --eval "db.getSiblingDB('database_test').createUser({user: 'alex', pwd: 'mypassword', roles: [{role: 'readWrite', db: 'database_test'}]})"
```

## Deploy
- Heroku
   - https://devcenter.heroku.com/articles/heroku-cli
   - https://devcenter.heroku.com/articles/deploying-nodejs
- AWS
   - https://www.luiztools.com.br/post/deploy-de-aplicacao-nodejs-mysql-na-amazon-aws/
- DigitalOcean
   - https://www.luiztools.com.br/post/deploy-de-aplicacao-node-js-na-digital-ocean/

## Import/Export Modules

### Older module.exports
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

### Modern Object
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

### Modern Functions
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
