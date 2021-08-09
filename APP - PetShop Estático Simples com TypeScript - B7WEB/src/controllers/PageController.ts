import { Request, Response } from 'express';

import { Pet } from '../models/Pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
	
	let list = Pet.getAll();

	res.render('pages/page', {
		menu: createMenuObject('all'),
		/*
		menu: {
			all: true,
			dog: false,
			cat: false,
			fish: false
		},*/
		banner: {
			title: 'Todos os animais',
			background: 'allanimals.jpg'
		},
		list: list
	});
};

export const dogs = (req: Request, res: Response) => {
	
	let list = Pet.getFromType('dog');

	res.render('pages/page', {
		menu: createMenuObject('dogs'),
		banner: {
			title: 'Cachorros',
			background: 'banner_dog.jpg'
		},
		list
	});
};

export const cats = (req: Request, res: Response) => {
	let list = Pet.getFromType('cat');
	res.render('pages/page', {
		menu: createMenuObject('cats'),
		banner: {
			title: 'Gatos',
			background: 'banner_cat.jpg'
		},
		list
	});
};

export const fishes = (req: Request, res: Response) => {
	let list = Pet.getFromType('fish');
	res.render('pages/page', {
		menu: createMenuObject('fishes'),
		banner: {
			title: 'Peixes',
			background: 'banner_fish.jpg'
		},
		list
	});
};