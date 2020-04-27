## Best Practices
  
  - [ESLint](https://eslint.org/)
     - $ sudo npm install -g eslint
     - $ eslint --init
     - $ eslint script.js (Global)
     - $ node_modules/.bin/eslint script.js (Local) 

## Example composer.json
```json
{
    "name": "Example composer",
    "version": "1.0.0",
    "description": "NodeJS APP Descriptin",
    "main": "app.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon app.js",
        "start-server": "node app.js"
    },
    "author": "Alex Galhardo",
    "license": "MIT",
    "dependencies": {
    "cookie-parser": "^1.4.4",
    "body-parser": "^1.19.0",
    "dotenv": "^8.1.0",
    "express": "^4.17.1",
    "express-flash": "0.0.2",
    "express-session": "^1.16.2",
    "jimp": "^0.8.4",
    "mongoose": "^5.7.1",
    "multer": "^1.4.2",
    "mustache-express": "^1.3.0",
    "nodemailer": "^6.3.0",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^5.0.1",
    "slug": "^1.1.0",
    "uuid": "^3.3.3",
    "fs": "0.0.1-security",
    "jsonwebtoken": "^8.5.1"
  },
  "devDependencies": {
    "nodemon": "^1.19.2"
  }
}
```

## SQL
- https://sequelize.org/
- http://knexjs.org/

## MongoDB
 
  - [Mongoose](https://github.com/Automattic/mongoose)
  - Default Port: 27017
  - GUI Software
     - [Robo3T](https://robomongo.org/)
  - Books
     - [MongoDB para Iniciantes: Um Guia Prático - LuizTools](https://www.amazon.com.br/dp/B077711577/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=mongodbparainiciantes-20&linkId=480584b61fd824cd277a41fc25d7bab5)
  - Installing MongoDB Local in Ubuntu
     - [DigitalOcean Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04)
     - [StackOverFlow Answer](https://stackoverflow.com/questions/5961145/changing-mongodb-data-store-directory?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
      ```
      $ mongod --dbpath /usr/local/mongodb-data
      ```
  - Cloud
      - [Mlab.com](https://mlab.com/)
  - Instalando MongoDB no Linux
   - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
   - $ nano /etc/mongod.conf
   - Porta Padrão: 27017
   - dbPath: /var/lib/mongodb
   - $ sudo service mondod start
   - $ mongo
   - $ sudo service mongod 
- Instalando mongodb-compass
   - https://www.mongodb.com/download-center/compass
   - $ mongodb-compass
- Começando Projeto e instalando dependências
   - $ npm init -y
   - $ npm install express --save
   - $ npm install nodemon --save-dev 
      - instalar localmente para desenvolvimento
   - $ sudo npm install nodemon -g 
      - instalar globalmente
      - poderia ser $ node server.js, mas não recarrega automaticamente
   - $ npm start
   - $ npm install dotenv
   - $ npm install mongoose --save
      

## Docker

 - Installing
    - [Install Docker CE for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository)
 - Tutorials
    - [Tudo o que você precisa saber para rodar Node.js com Docker](https://walde.co/2016/08/30/tudo-que-voce-precisa-saber-para-rodar-sua-aplicacao-nodejs-com-docker/)
 - Criar nova instância Docker com MongoDB
    - -e significa as portas que eu quero acessar da minha instancia do docker
    - -d significa o nome da instancia do docker que eu quero usar
    - ps mostra as instâncias ativas
    - ps -a mostra as instâncias do docker não ativas
    ```
    $ sudo docker run --name mongodb -e 27017:27017 -d mongo
    $ sudo docker ps
    $ sudo coker ps -a
    ```
 - Iniciar instancia do Docker com Mongodb
    ```
    $ sudo docker start mongodb
    ```
 - Verificar se o MongoDB foi ativado corretamente dentro do Docker
    - http://localhost:27017/
    - It looks like you are trying to access MongoDB over HTTP on the native driver port.

## NPM

 - CLI 
    - $ node_modules/.bin/name_package comand
 - Commands
    - Update Npm
    ```
    $ npm install npm@latest -g
    ```  
    - Init project
    ```
    $ npm init -y
    ```
    - Install package
    ```
    $ npm install package_name
    ```
    - Update package
    ```
    $ npm update package_name
    ```
    - Fix Modules Vulnerabilities
    ```
    $ npm audit fix
    ```
 - Browser Autoreload
    - [BrowserSync](https://browsersync.io/)
    ```
    $ sudo npm install -g browser-sync
    ```
    - [Nodemon](https://nodemon.io/)
    ```
    $ sudo npm install -g nodemon
    ```
    - [Lite-Server](https://www.npmjs.com/package/lite-server)
    ```
    $ sudo npm install -g lite-server
    ```
## Usefull Modules
- JSON API => json-server: https://www.npmjs.com/package/json-server
- DATA MANIPULATION => moment: https://www.npmjs.com/package/moment
- HTTP REQUEST => request: https://www.npmjs.com/package/request
- LODASH: https://www.npmjs.com/package/lodash
- ASYNC: https://www.npmjs.com/package/async
- COMMANDER => terminal: https://www.npmjs.com/package/commander
- CHALK => terminal: https://www.npmjs.com/package/chalk
- DEBUG => debug: https://www.npmjs.com/package/debug
- SOCKETIO => https://www.npmjs.com/package/socket.io
- PASSPORT => https://www.npmjs.com/package/passport
   - PASSPORT-LOCAL => https://www.npmjs.com/package/passport-local
   - PASSPORT-LOCAL-MONGOOSE => https://www.npmjs.com/package/passport-local-mongoose
- NODEMAILER => https://www.npmjs.com/package/nodemailer
- HAPI => http server: https://www.npmjs.com/package/@hapi/hapi
- PUG => template engine: https://www.npmjs.com/package/pug
- NODE MYSQL => https://www.npmjs.com/package/mysql
- MORGAN => https://www.npmjs.com/package/morgan
- RESTIFY => https://www.npmjs.com/package/restify
- DOTENV => https://www.npmjs.com/package/dotenv
- COOKIE-PARSER => https://www.npmjs.com/package/cookie-parser
- UUID => https://www.npmjs.com/package/uuid
- SLUG => https://www.npmjs.com/package/slug

## HTTP Server
- https://expressjs.com/

## MVC
- Framework AdonisJS: https://adonisjs.com/

## Microservices

 - Posts
    - [Arquitetura de Micro Serviços em NodeJS e MongoDB - LuizTools](http://www.luiztools.com.br/post/arquitetura-de-micro-servicos-em-node-js-mongodb)
 - Videos
    - [Webinar: Microservices - Sensedia](https://www.youtube.com/watch?v=Pl0Dccqjrao) 
 
## APIs

 - https://github.com/googleapis/google-api-nodejs-client
 - Modules
    - [Restify](http://restify.com/)
 - GUI Software
    - [Postman](https://www.getpostman.com/)
    - [Insomnia](https://insomnia.rest/)
 - Headless CMS
    - [strap.io](https://strapi.io/)
 - Sites
    - [Online UUID Generator](https://www.uuidgenerator.net/)
 - Chrome Plugins
    - [Restlet Client](https://chrome.google.com/webstore/detail/restlet-client-rest-api-t/aejoelaoggembcahagimdiliamlcdmfm/related?hl=en)
    - [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)
 - YouTube
    - [API Rest com Restify](https://www.youtube.com/watch?v=GzePIBuP_yA) 
    - [Criando APIs com NodeJs](https://www.youtube.com/watch?v=wDWdqlYxfcw&list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn&app=desktop)
    - [Webinar: Os Fundamentos da Segurança de APIs - Sensedia](https://www.youtube.com/watch?v=h4A8HytL5ts)
    - [Webinar Design de APIs RESTful - Sensedia](https://www.youtube.com/watch?v=psLrAsdHltQ)
    - [Webinar: Guia prático de Gerenciamento de APIs - Sensedia](https://www.youtube.com/watch?v=L6jQO06PVCw)
  - DevOps
     - [Webinar DevOps com Ferramentas Atlassian 2018](https://www.youtube.com/watch?v=ND9knVaE260)

## JWT 
- https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-node-js-2/
```js
//index.js
var http = require('http'); 
const express = require('express') 
const app = express() 
var cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const fs   = require('fs');
const secret = "meu-segredo";//esse segredo do JWT seria uma config

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 

//rota protegida
app.get('/clientes', verifyJWT, (req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.status(200).json([{id:1,nome:'luiz'}]);
}) 

//rota de login
app.post('/login', (req, res, next) => { 
    if(req.body.user === 'luiz' && req.body.pwd === '123'){ 
        //auth ok 
        const id = 1; //esse id viria do banco de dados 
        var privateKey  = fs.readFileSync('./private.key', 'utf8');
        var token = jwt.sign({ id }, privateKey, { 
            expiresIn: 300, // 5min 
            algorithm:  "RS256" //SHA-256 hash signature
        }); 
        
        console.log("Fez login e gerou token!");
        return res.status(200).send({ auth: true, token: token }); 
    }
    
    return res.status(401).send('Login inválido!'); 
})    

//rota de logout
app.post('/logout', function(req, res) { 
    console.log("Fez logout e cancelou o token!");
    res.status(200).send({ auth: false, token: null }); 
});

//função que verifica se o JWT é ok
function verifyJWT(req, res, next){ 
    var token = req.headers['x-access-token']; 
    if (!token) 
        return res.status(401).send({ auth: false, message: 'Token não informado.' }); 
    
    var publicKey  = fs.readFileSync('./public.key', 'utf8');
    jwt.verify(token, publicKey, {algorithm: ["RS256"]}, function(err, decoded) { 
        if (err) 
            return res.status(500).send({ auth: false, message: 'Token inválido.' }); 
        
        req.userId = decoded.id; 
        console.log("User Id: " + decoded.id)
        next(); 
    }); 
}    

var server = http.createServer(app); 
server.listen(3000);
console.log("Servidor escutando na porta 3000...")
```

## Heroku Deploy Reference
 - [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
 - [Addon mLab MongoDB Heroku](https://devcenter.heroku.com/articles/mongolab)
 - [Deploying NodeJS app Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
 - [Clear Build Cache](https://help.heroku.com/18PI5RSY/how-do-i-clear-the-build-cache)
 - Commands
    - $ cd ~/project_directory
    - $ git init
    - $ git add .
    - $ git commit -m 'first commit'
    - $ heroku login
    - $ heroku create
    - $ heroku rename your-new-url-name
    - [Create NanoProcfile](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile)
       - $ nano Procfile
    - How to start application?
       - web: npm run start
       - $ git push heroku master
       - $ heroku open
       - $ heroku logs --tails

