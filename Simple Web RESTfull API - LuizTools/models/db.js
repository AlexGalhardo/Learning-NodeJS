var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectId;

function conectar(callback){
    mongoClient.connect(process.env.MONGO_CONNECTION, function(err, conn){
        if(err) return console.log(err);

        global.conn = conn.db("aula03");
        callback();
    })
}

function findCliente(id, callback){
    global.conn.collection("clientes").findOne({_id: objectId(id)}, callback)
}

function findClientes(callback){
    global.conn.collection("clientes").find().toArray(callback)
}

function insertCliente(cliente, callback){
    global.conn.collection("clientes").insert(cliente, callback);
}

function updateCliente(id, cliente, callback){
    global.conn.collection("clientes").update({_id: objectId(id) }, cliente, callback);
}

function updateDadosCliente(id, cliente, callback){
    global.conn.collection("clientes").updateOne({_id: objectId(id) }, {$set: cliente }, callback);
}

function deleteCliente(id, callback){
    global.conn.collection("clientes").remove({_id: objectId(id) }, callback);
}

module.exports = { conectar, findCliente, findClientes, insertCliente, updateCliente, deleteCliente, updateDadosCliente }