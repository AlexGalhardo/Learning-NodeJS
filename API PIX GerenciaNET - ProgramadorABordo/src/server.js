// if (process.env.NODE_ENV !== 'development') {
//   require('dotenv').config()
// }

const express = require('express');
const bodyParser = require('body-parser');
const GNRequest = require('./apis/gerencianet');

const app = express();

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const reqGNAlready = GNRequest({
  clientID: process.env.GN_CLIENT_ID,
  clientSecret: process.env.GN_CLIENT_SECRET
});

app.get('/', async (req, res) => {
  const reqGN = await reqGNAlready;
  const dataCob = {
    calendario: {
      expiracao: 3600
    },
    devedor: {
      cpf: "45672888828",
      nome: "Alex Galhardo Vieira"
    },
    valor: {
      original: '0.10'
    },
    chave: '49f351a0-bed9-439e-bc68-1d906e885bed',
    solicitacaoPagador: 'GOD OF WAR 2018 PS4'
  };

  const cobResponse = await reqGN.post('/v2/cob', dataCob);
  const qrcodeResponse = await reqGN.get(`/v2/loc/${cobResponse.data.loc.id}/qrcode`);

  res.render('qrcode', { qrcodeImage: qrcodeResponse.data.imagemQrcode })
});

app.get('/cobrancas', async(req, res) => {
  const reqGN = await reqGNAlready;

  const cobResponse = await reqGN.get('/v2/cob?inicio=2021-02-15T16:01:35Z&fim=2021-02-22T23:59:00Z');

  res.send(cobResponse.data);
});

app.post('/webhook(/pix)?', (req, res) => {
  console.log(req.body);
  res.send('200');
});

app.listen(process.env.PORT, () => {
  console.log('API PIX GERENCIANET HEROKU running...');
})