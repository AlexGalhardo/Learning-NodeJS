## References
 
 - Courses
    - [Curso NodeJS LuizTools](https://node.luiztools.com.br/)
    - [Treinamento NodeBR.org](https://treinamento.nodebr.org/)
    - [Udemy - The Complete Node.js Developer Course Andrew Mead](https://www.udemy.com/the-complete-nodejs-developer-course-2)
    - [Udemy - The Modern GraphQL Bootcamp Andrew Mead](https://www.udemy.com/graphql-bootcamp/)
 - Sites
    - [NodeBR.org](https://nodebr.org)
    - [Luiz Tools](http://www.luiztools.com.br/categoria/desenvolvimento/nodejs/)
    - [RocketSeat](https://rocketseat.com.br/)
    - [Blog RisingStack](https://blog.risingstack.com/)
    - [NodeSchool.io](https://nodeschool.io/)
    - [W3Schools - NodeJS](https://www.w3schools.com/nodejs/default.asp)
 - Tutorials
    - [Update NodeJS with NVM](https://github.com/creationix/nvm)
    - [Getting Started with SSH](https://semaphoreci.com/community/tutorials/getting-started-with-ssh)
 - Books
    - [Programação Web com Node.js: Completo, do Front-end ao Back-End - LuizTools](https://www.amazon.com.br/gp/product/B074RCRKSL/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B074RCRKSL&linkCode=as2&tag=programacaowebcomnodejs-20&linkId=a03a2a7cac2cbc72bc142da37b25b088)

## Best Practices
  
  - [ESLint](https://eslint.org/)
     - $ sudo npm install -g eslint
     - $ eslint --init
     - $ eslint script.js (Global)
     - $ node_modules/.bin/eslint script.js (Local) 

## MongoDB

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
  - Modules
      - [Mongoose](https://github.com/Automattic/mongoose)

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
 - Videos
    - [Yarn - An npm Alternative](https://mead.io/yarn/)
    - [Debugging Node](https://mead.io/node-debugging/)
    - [Publish Your Own NPM Module](https://mead.io/publish-an-npm-module/)
    - [Diving into ESLint](https://mead.io/eslint/)
    - [Parcel - A Better Module Bundler](https://mead.io/parcel/)
 - Usefull Modules
    - [Lodash](https://www.npmjs.com/package/lodash)
    - [Express](https://expressjs.com/)
    - [SocketIO](https://socket.io)
    - [Http-Server](https://www.npmjs.com/package/http-server)
    - [Parcel](https://parceljs.org/)
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

## Microservices

 - Posts
    - [Arquitetura de Micro Serviços em NodeJS e MongoDB - LuizTools](http://www.luiztools.com.br/post/arquitetura-de-micro-servicos-em-node-js-mongodb)
 - Videos
    - [Webinar: Microservices - Sensedia](https://www.youtube.com/watch?v=Pl0Dccqjrao) 
 
## APIs

 - Modules
    - [Restify](http://restify.com/)
 - Software
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

## Heroku Deploy Reference

 - [Dashboard Apps](https://dashboard.heroku.com/apps)
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
    - Update NodeJS Version
       ```
       "engines": {
          "node": "8.1.1" # your nodejs version here
       }
       ```
    - [Create NanoProcfile](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile)
       - $ nano Procfile
    - How to start application?
       - web: npm run start
       - $ git push heroku master
       - $ heroku open
       - $ heroku logs --tails

