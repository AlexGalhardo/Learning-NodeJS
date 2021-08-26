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