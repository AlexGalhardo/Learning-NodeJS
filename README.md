# References

## Install Ubuntu 
- [https://snapcraft.io/node](https://snapcraft.io/node)

## Others
- https://nodejs.dev/learn
- https://erickwendel.teachable.com/

## Commands
- $ npm init
- $ npm init -y
- Global
   - $ sudo npm install -g nodemon
   - $ sudo npm install -g typescrypt 
   - $ sudo npm install -g ts-node
- Dependencies
   - $ npm install mustache-express
- DevDependencies
   - $ npm install --save-dev @types/node
   - $ npm install --save-dev @types/mustache-express
   - $ npm install --save-dev @types/validator
   - $ npm install --save-dev @types/express

## Tools
- HTTP
   - [https://expressjs.com/pt-br/](https://expressjs.com/pt-br/)
- SQL
   - [https://sequelize.org/](https://sequelize.org/)
- MongoDB
   - [https://mongoosejs.com/](https://mongoosejs.com/)
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
- TypeScrypt
   - $ sudo npm install -g typescript
   - $ tsc --init
   - $ npm install --save-dev @types/node
   - $ tsc -w (ficar monitorando typescript)
   - tsconfig.json 
      - "outDir": "./dist",                              
      - "rootDir": "./src", 
      - "module": "commonjs",
      - "moduleResolution": "node", 
      



## Import/Export Modules

### Older module.exports
- Math.ts
```ts
function sum(x:number, y:number):number {
 return x*y;
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
 return x*y;
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
 return x*y;
}
```
- index.ts
```ts
import { sum } from './Math';
import * as Math from './Math';
```
