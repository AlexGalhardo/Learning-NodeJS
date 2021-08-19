import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
	res.json({pong: true});
}

export const random = (req: Request, res: Response) => {
	let randomNumber: number = Math.floor(Math.random() * 10);
	res.json({number: randomNumber})	
}

export const name = (req: Request, res: Response) => {
	const { name } = req.params
	res.json({name: name})
}

export const createPhrase = async (req: Request, res: Response) => {
	let { author, txt } = req.body
	
	let newPhrase =	await Phrase.create({
		author, txt
	})

	res.status(201);
	res.json({id: newPhrase.id, author, txt});
}

export const listPhrases = async (req: Request, res: Response) => {
	let list = await Phrase.findAll();

	res.json({ list })
}

export const getPhrase = async (req: Request, res: Response) => {

	const { id } = req.params
	let phrase = await Phrase.findByPk(id);
	if(phrase){
		res.json({ phrase })
	}
	else {
		res.json({error: 'Phrase not found'})
	}
}

export const putPhrase = async (req: Request, res: Response) => {

	const { id } = req.params
	const { author, txt } = req.body

	let phrase = await Phrase.findByPk(id)
	if(!phrase){
		return res.json({error: 'Phrase not found'})
	}

	phrase.author = author;
	phrase.txt = txt;
	await phrase.save()

	res.json({success: 'Phrase updated!'})
}

export const deletePhrase = async (req: Request, res: Response) => {

	const { id } = req.params

	await Phrase.destroy({where: {id}})

	res.json({});
}


export const getRandomPhrase = async (req: Request, res: Response) => {

	let phrase = await Phrase.findOne({
		order: [
			Sequelize.fn('RANDOM')
		]
	})

	if(phrase){
		res.json({phrase})
	}
	else {
		res.json({error: 'Not found any phrase in postgre'})
	}
}




