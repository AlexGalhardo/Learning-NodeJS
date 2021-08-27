import { Router } from 'express';
import multer from 'multer';

import * as APIController from '../controllers/APIController';

const router = Router();

const storageConfig = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './tmp');
	},
	filename: (req, file, cb) => {
		let randomName = Math.floor(Math.random()*99999)
		cb(null, `${randomName+Date.now()}.jpg`);
	}
});

const upload = multer({
	dest: './tmp',
	// storage: multer.memoryStorage()
	// storage: storageConfig
	fileFilter: (req, file, cb) => {
		// cb(null, false); // não aceito nada
		// cb(null, true) // aceito qualquer tipo de arquvio
		
		const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
		console.log('Informações', file);
		
		cb(null, allowed.includes(file.mimetype))
	},
	limits: { fieldSize: 1000000 } // 1MB
});

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

router.post('/upload/avatar', upload.single('avatar'), APIController.uploadFile);
router.post('/upload/avatars/2', upload.array('avatars', 2), APIController.uploadFile);

router.post('/upload/fields', upload.fields([
	{name: 'avatar', maxCount: 1},
	{name: 'gallery', maxCount: 2}
]), APIController.uploadFile);

router.post('/uploadByType', upload.single('avatar'), APIController.uploadFileByType);

export default router;