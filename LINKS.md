## Tips
- https://tipscode.com.br/melhores-praticas-em-nodejs-para-ambientes-de-producao
- https://tipscode.com.br/10-boas-praticas-do-nodejs-em-producao-passo-a-passo
- https://tipscode.com.br/como-construir-uma-api-restful-conheca-as-13-melhores-boas-praticas
- https://tipscode.com.br/event-loop-em-node-guia-completo


- https://blog.risingstack.com/node-js-logging-tutorial/
- https://expressjs.com/pt-br/advanced/best-practice-security.html

## PM2
- https://imasters.com.br/back-end/executando-o-pm2-e-o-node-js-em-ambientes-de-producao
- https://blog.rocketseat.com.br/pm2-com-funcionalidades-secretas/
- pm2 start process_prod.json: inicia um ou mais processos via arquivo JSON.
- pm2 start NomeDoApp: inicia um aplicativo específico.
- pm2 stop NomeDoApp: para uma aplicação específica.
- pm2 ls: mostra uma lista de todas as aplicações sendo executadas.
- pm2 NomeDoApp scale N: escala o aplicativo que foi especificado para n números de instâncias.
- pm2 show NomeDoApp: mostra informações sobre a aplicação.
- pm2 kill all: mata todos os aplicativos em execução.
- pm2 restart all: reinicia todos os aplicativos em execução.
- pm2 reload all: recarrega a configuração do aplicativo, como as variáveis de ambiente.
- pm2 startup: configura o pm2 para inicializar com o sistema operacional.
- pm2 logs
- pm2 logs site1 --lines 100
- pm2 start app.js --watch

- GET PLATFORM
```js
const bodyParser = require ('body-parser') 
const os = require ('os')
const app = require ('express')()

app.use (bodyParser.json ())
app.use (bodyParser.urlencoded ({extended: true}))

app.get ('/', (req, res, próximo) => { 
  res.send (os.platform ()); 
})

app.listen (3000, () => console.log ('servidor iniciado')) 
```