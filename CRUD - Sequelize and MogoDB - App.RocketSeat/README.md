#### https://skylab.rocketseat.com.br/node/curso-node-js

- Iniciando Projeto
   - $ npm init -y
   - $ npm install express
   - package-lock.json serve apenas para cache
   - $ node server.js
   - $ npm install --save-dev nodemon OU $ npm install -D nodemon
      - nodemon serve para reiniciar o servidor automaticamente
   - devdependencias são dependencias que são utilizadas apenas em ambiente de desenvolvimento
   - $ npm run dev
      - executa scripts dentro do package.json

- Instalar docker com mongodb
   - https://docs.docker.com/install/linux/docker-ce/ubuntu/
   - baixar container do mongodb
      - $ sudo docker pull mongo
   - mongodb usa a porta padrão 27017
   - bandeira -p significa redireionamento de porta do mongodb dentro do docker
   - -d = que imagem eu quero utilizar, que é a imagem que nós baixamos no pull
   - desligar mongodb local
      - $ sudo service mongodb stop
      - $ sudo /etc/init.d/mongodb stop
   - $ docker run --name mongodb -p 27017:27017 -d mongo
   $ docker ps
      - mostra que imagens do docker estão rodando
   - testar se mongodb esta funcionando
      - Ir para localhost:27017 ~ it looks like you are trying...
   - baixar software ROBO3T
      - https://robomongo.org/
      - GUI para MongoDB

- Ver imagens docker 
   - $ docker ps -a
   - iniciar imagem docker
      - $ docker start 'nome da imagem'
      - $ docker start mongobd

- $ npm install mongoose
   - mongoose é um ORM
   - Mapeamento objeto-relacional (ou ORM, do inglês: Object-relational mapping) é uma técnica de desenvolvimento utilizada para reduzir a impedência da programação orientada aos objetos utilizando bancos de dados relacionais. 
   - As tabelas do banco de dados são representadas através de classes e os registros de cada tabela são representados como instâncias das classes correspondentes.
   - Com esta técnica, o programador não precisa se preocupar com os comandos em linguagem SQL; ele irá usar uma interface de programação simples que faz todo o trabalho de persistência.
   - Não é necessária uma correspondência direta entre as tabelas de dados e as classes do programa. 
   - A relação entre as tabelas onde originam os dados e o objecto que os disponibiliza é configurada pelo programador, isolando o código do programa das alterações à organização dos dados nas tabelas do banco de dados.


- $ npm install require-dir
- $ sudo snap install insomnia
   - https://insomnia.rest/download/
   - $ insomnia -> manage environments
   ```json
   {
      "base_url": "http://localhost:3001/api"
   }
   ```
   - base_url/products


- $ npm install mongoose-paginate
   - http://localhost:3001/api/products?page=4

- $ npm install cors
   - Cross-Origin Resource Sharing = permite que nossa api seja acessado por outros domínios
   - https://www.google.com/search?q=cors&oq=cors&aqs=chrome..69i57j69i60.484j0j7&sourceid=chrome&ie=UTF-8