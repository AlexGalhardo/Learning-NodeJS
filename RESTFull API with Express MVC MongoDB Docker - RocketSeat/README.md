## RESTFull API with Express MVC MongoDB Docker

 - Create Project
 ```
 mkdir nodeapi
 cd nodeapi
 npm init -y
 npm install express
 npm install nodemon
 npm install mongoose
 npm install mongoose-paginate
 npm install cors
 npm install require-dir
 ```

 - Simple server
    - $ nano server.js
    ```
    const express = require('express');
    const app = express();
    app.get('/', (req, res) => {
	   res.send('Ola mundo');
    });
    app.listen(3001);
    ```

 - $ nano package.json
 ```
 "dev": "nodemon server.js"
 ```

 - Instalo o mongodb na minha instância do docker

 ```
 $ sudo docker pull mongo
 ```
 - Criar nova instância docker com MongoDB
    - -e significa as portas que eu quero acessar da minha instancia do docker
    - -d significa o nome da instancia do docker que eu quero usar
    - ps mostra as instâncias ativas
    - ps -a mostra as instâncias do docker não ativas
    ```
    $ sudo docker run --name mongodb -e 27017:27017 -d mongo
    $ sudo docker ps
    $ sudo coker ps -a
    ```
 - Iniciar instancia do docker com mongodb depois de reiniciar
    ```
    $ sudo docker start mongodb
    ```
 - Verificar se o MongoDB foi ativado corretamente dentro do Docker
    - http://localhost:27017/
    - It looks like you are trying to access MongoDB over HTTP on the native driver port.

 - Start Robo3T
 ```
 $ cd robot3t
 $ sudo ./bin/robo3t
 ```