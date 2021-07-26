    mongod --dbpath /mongo/data
 
> O utilitário ‘mongo’ é o client do MongoDB, enquanto ‘mongod’ é o server.
- O ‘d’ é de daemon?
- Sim, daemon, um processo que fica executando em background. 

    mongo
    // cria tabela listadecompras
    use listadecompras
    db.itens.find()

> - A função find() é para retornar os documentos de uma coleção.
- Assim como o SELECT do SQL?
- Exato, mas com uma sintaxe JavaScript.

    db.itens.insert({nome:”bolo de pacote”, quantidade: 1})
    db.itens.find()

    npm install mongodb

> Sei… Mas vamos voltar ao Node aqui, que me interessa mais. Como que
eu faço o Node conectar no MongoDB?
- Para isso você vai precisar do pacote mongodb do NPM.

    npm install mongodb