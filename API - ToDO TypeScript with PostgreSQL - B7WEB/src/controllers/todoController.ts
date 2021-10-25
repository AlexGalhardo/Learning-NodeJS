import { Request, Response } from 'express';
import { Todo } from '../models/Todo';


export const all = async (req: Request, res: Response) => {
	const list = await Todo.findAll();
	return res.json(list)
}


export const add = async (req: Request, res: Response) => {
	if(req.body.title){
		let newTodo = await Todo.create({
			title: req.body.title,
			done: req.body.done ? true : false
		})

		return res.status(201).json(newTodo)
	}

	return res.json({error: 'You need to send title in body x-www-form-urlencoded'})
}


export const update = async (req: Request, res: Response) => {
	
	const id: string = req.params.id;

	let todo = await Todo.findByPk(id) // primary key

	if(todo){

		if(req.body.title){
			todo.title = req.body.title;
		}

		if(req.body.done){

			switch(req.body.done.toLowerCase()){
				case 'true':
				case '1':
					todo.done = true; break;
				case 'false':
				case '0':
					todo.done = false; break;
			}

			todo.done = req.body.done;
		}

		await todo.save();

		return res.json(todo)

	} else {
		return res.json({ error: 'id not found' })
	}
}


export const remove = async (req: Request, res: Response) => {
	
	let id: string = req.params.id;

	let todo = await Todo.findByPk(id);

	if(todo){
		await todo.destroy();
		return res.json({status: 'SUCCESS: todo deleted!'})
	}

	return res.json({status: 'ERROR: todo not deleted!'})
}