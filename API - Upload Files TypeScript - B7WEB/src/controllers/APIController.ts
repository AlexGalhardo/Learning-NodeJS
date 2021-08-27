import { unlink } from 'fs/promises';
import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import sharp from 'sharp';
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


export const uploadFile = async (req: Request, res: Response) => {

	// const files = req.files as {[fieldname: string]: Express.Multer.File[]};

	type UploadTypes = {
		avatar: Express.Multer.File[],
		gallery: Express.Multer.File[]
	}

	const files = req.files as UploadTypes;

	console.log('AVATAR: ', files.avatar)
	console.log('GALLERY: ', files.gallery)

	res.json({})
}


export const uploadFileByType = async (req: Request, res: Response) => {
	// console.log('FILE: ', req.file)
	// console.log('FILES: ', req.files)

	if(req.file){
		const filename = `${req.file.filename}.jpg`;

		await sharp(req.file.path)
			.resize(200, 200)
			.toFormat('jpeg')
			.toFile(`./public/media/${filename}`)

		await unlink(req.file.path);

		return res.json({image: `${req.file.filename}.jpg`})
	} else {
		res.status(400);
		return res.json({error: 'Arquivo inválido.'})
	}
}
