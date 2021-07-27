//7.1
npm init

//7.2
npm i express mysql2 body-parser

//7.3
const mysql = require('mysql2/promise');
async function connect(){

    if(global.connection && global.connection.state !== 'disconnected') 
        return global.connection;

        const connectionString = 'mysql://root:luiztools@localhost:3306/crud'; 
    const connection = await mysql.createConnection(connectionString);

    console.log('Conectou no MySQL!');
    global.connection = connection;
    return global.connection;
}
connect();

module.exports = {}

//7.4
global.db = require('./db');
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão

//7.5
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//7.6
//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//7.7
//inicia o servidor
app.listen(port);
console.log('API funcionando!');

//7.8
node app

//7.9
async function selectClientes(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}

module.exports = {selectClientes}

//7.10
// GET /clientes
router.get('/clientes', async (req, res) => {
    try{
        const results = await global.db.selectClientes();
        res.json(results);
    }
    catch(error){
        res.status(500).json(error);
    }
})

//7.11
async function selectCliente(id){  
    const conn = await connect();
    const sql = "SELECT * FROM clientes WHERE id=?";
    const [rows] = await conn.query(sql, [id]);
    return rows && rows.length > 0 ? rows[0] : {};
}

module.exports = {selectClientes, selectCliente}

//7.12
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

//7.13
async function insertCliente(cliente){
    const conn = await connect();
    const sql = "INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);";
    return await conn.query(sql, [cliente.nome, cliente.idade, cliente.uf]);
}

module.exports = {selectClientes, selectCliente, insertCliente}

//7.14
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

//7.15
curl -X POST -d "{'nome':'Curl', 'idade': 11, 'uf': 'RJ'}" http://localhost:3000/clientes

//7.16
async function updateCliente(id, cliente){
    const conn = await connect();
    const sql = "UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?";
    return await conn.query(sql, [cliente.nome, cliente.idade, cliente.uf, id]);
}

module.exports = {selectClientes, selectCliente, insertCliente, updateCliente}

//7.17
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

//7.18
curl -X PUT -d "{'nome':'Postman', 'idade': 20, 'uf': 'SP'}" http://localhost:3000/clientes/9

//7.19
async function updateCliente(id, cliente, callback){
    let sql = "UPDATE clientes SET ";
    const props = Object.entries(cliente);

    for(var i=0; i < props.length; i++){
        const item = props[i];
        if(i !== props.length - 1) //não é o último
            sql += ` ${item[0]}=?,`;
        else
            sql += ` ${item[0]}=? WHERE id=?;`;
    }

    const values = props.map(p => p[1]);
    values.push(id);

    const conn = await connect();
    return await conn.query(sql, values);
}

//7.20
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

//7.21
curl -X PATCH -d "{'idade':53}" http://localhost:3000/clientes/9

//7.22
async function deleteCliente(id){
    const conn = await connect();
    return await conn.query('DELETE FROM clientes WHERE id=?;', [id]);
}

module.exports = {selectClientes, selectCliente, insertCliente, updateCliente, deleteCliente}

//7.23
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

//7.24
curl -X DELETE http://localhost:3000/clientes/9