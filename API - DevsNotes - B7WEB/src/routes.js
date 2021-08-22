const express = require('express');
const router = express.Router();

const NoteController = require('./controllers/NoteController');

router.get('/ping', NoteController.ping);

router.get('/notes', NoteController.all);
router.get('/note/:id', NoteController.one);
router.post('/note', NoteController.new);
router.put('/note/:id', NoteController.edit);
router.delete('/note/:id', NoteController.delete);

module.exports = router;