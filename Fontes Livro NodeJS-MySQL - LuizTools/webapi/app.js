//app.js
global.db = require('./db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão

app.use(require('cors')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

// GET /clientes
router.get('/clientes', async (req, res) => {
    try {
        const results = await global.db.selectClientes();
        res.json(results);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

// GET /clientes/{id}
router.get('/clientes/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const cliente = await global.db.selectCliente(id);
        res.json(cliente);
    } catch (error) {
        res.status(500).json(error);
    }
})

// POST /clientes
router.post('/clientes', async (req, res) => {
    const nome = req.body.nome;
    const idade = !req.body.idade ? null : parseInt(req.body.idade);
    const uf = req.body.uf;

    try {
        const [ResultSetHeader] = await global.db.insertCliente({ nome, idade, uf });
        const cliente = await global.db.selectCliente(ResultSetHeader.insertId);
        res.json(cliente);
    } catch (error) {
        res.status(500).json(error);
    }
})

// PUT /clientes/{id}
router.put('/clientes/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome
    const idade = !req.body.idade ? null : parseInt(req.body.idade);
    const uf = req.body.uf
    try {
        await global.db.updateCliente(id, { nome, idade, uf });
        res.json({ message: 'Cliente atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json(error);
    }
})

// PATCH /clientes/{id}
router.patch('/clientes/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const cliente = {};
    if (req.body.hasOwnProperty("nome")) cliente.nome = req.body.nome;
    if (req.body.hasOwnProperty("idade")) cliente.idade = parseInt(req.body.idade);
    if (req.body.hasOwnProperty("uf")) cliente.uf = req.body.uf;

    try {
        await global.db.updateCliente(id, cliente);
        res.json({ message: 'Cliente atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json(error);
    }
})

// DELETE /clientes/{id}
router.delete('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await global.db.deleteCliente(id);
        res.json({ message: 'Cliente excluído com sucesso!' });
    } catch (error) {
        res.status(500).json(error);
    }
})

app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');
