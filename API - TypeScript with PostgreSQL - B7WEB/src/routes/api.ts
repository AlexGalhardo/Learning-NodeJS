import { Router } from 'express';

import * as APIController from '../controllers/APIController';

const router = Router();

/*
router.get('/ping', (req, res) => {
	res.json({pong: true})
});

router.get('/random', (req, res) => {
	let randomNumber: number = Math.floor(Math.random() * 10);
	res.json({number: randomNumber})	
})

router.get('/name/:name', (req, res) => {
	const { name } = req.params
	res.json({name: name})
})
*/

router.get('/ping', APIController.ping);
router.get('/random', APIController.random);
router.get('/name/:name', APIController.name);

router.get('/phrase/random', APIController.getRandomPhrase);
router.post('/phrases', APIController.createPhrase);
router.get('/phrases', APIController.listPhrases);
router.get('/phrase/:id', APIController.getPhrase);
router.put('/phrase/update/:id', APIController.putPhrase);
router.delete('/phrase/delete/:id', APIController.deletePhrase);


export default router;