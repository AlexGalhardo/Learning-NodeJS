const express = require("express");
const {nanoid} = require('nanoid');
const router = express.Router();

const idLength = 8;

router.get('/', (req,res) => {

    let todos = req.app.db.get('todos').value();

    return res.send(todos);

});

router.get('/:id', (req,res) => {

    let todo = req.app.db.get('todos').find({ 
        id: req.params.id
    }).value();

    if(!todo){

        res.sendStatus(404);

        return res.send({
            message: "Todo cannot be found",
            internal_code: "Invalid id"
        });

    };

    return res.send(todo);

});

router.post('/', (req,res) => {

    let todo = {
        id:nanoid(idLength),
        ...req.body
    };

    try {

        req.app.db.get("todos").push(todo).write();
        
        return res.sendStatus(201).send("Todo saved successfully");

    }catch(error){

        return res.sendStatus(500).send(error);
    }
});

router.put('/:id', (req,res) => {

    //find todo.
    let todo = req.app.db.get("todos").find({
        id: req.params.id
    }).value();

    if(!todo){

        return res.sendStatus(404);

    };

    //update that todo.
    try {

        req.app.db.get("todos").find({
            id:req.params.id
        })
        .assign({ completed: !todo['completed'] })
        .write();

        return res.send("Todo updated");

    } catch(error) {

        res.sendStatus(500);

        return res.send(error);

    };

});

router.delete('/:id', (req,res) => {

    //find todo.
    let todo = req.app.db.get("todos").find({
        id:req.params.id
    }).value();

    if(!todo){

        return res.sendStatus(404);

    };

    // delete the todo.
    try {
        req.app.db.get("todos").remove({
            id:req.params.id
        })
        .write();

        return res.send("Todo deleted");

    } catch(error) {

        return res.sendStatus(500);

    }

});

module.exports = router;