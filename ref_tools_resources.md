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