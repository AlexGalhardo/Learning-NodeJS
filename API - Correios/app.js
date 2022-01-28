import express from 'express';
import { calcularPrecoPrazo } from 'correios-brasil';
import cors from 'cors';
import axios from 'axios';

import pkg from 'body-parser';
const { urlencoded } = pkg;

const app = express();

app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`)
    } else {
        next();
    }
});

app.use(cors());
app.use(urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    res.json({
        "/shipping/:zipcode": "Return Shipping Deadline and Fee",
        "/cep/:zipcode": "Return ZipCode/CEP Data",
    });
});

app.get('/shipping/:zipcode', async (req, res) => {
    const zipcode = req.params.zipcode;

    let args = {
        sCepOrigem: '16050590',
        sCepDestino: zipcode,
        nVlPeso: '5',
        nCdFormato: '1',
        nVlComprimento: '20',
        nVlAltura: '20',
        nVlLargura: '20',
        nCdServico: ['04014'],
        nVlDiametro: '0',
    };

    const response = await calcularPrecoPrazo(args);

    res.json(response);
});

app.get('/cep/:cep', async (req, res) => {
    const cep = req.params.cep;

    const response = await axios.get(`http://viacep.com.br/ws/${cep}/json`)

    res.json(response.data);
})


app.listen(9090, () => {
    console.log(`Localhost rodando na porta 9090....`)
});
