const NoteService = require('../services/NoteService');

module.exports = {
    ping: (req, res) => {
        res.json({pong: true});
    },
    all: async (req, res) => {
        let json = {error:'', result:[]};

        let notes = await NoteService.getAll();

        for(let i in notes) {
            json.result.push({
                id: notes[i].id,
                title: notes[i].title,
                body: notes[i].body
            });
        }

        res.json(json);
    },
    one: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let note = await NoteService.findById(id);

        if(note) {
            json.result = note;
        }

        res.json(json);
    },
    new: async (req, res) => {
        let json = {error:'', result:{}};

        let title = req.body.title;
        let body = req.body.body;

        if(title && body) {

            let noteId = await NoteService.add(title, body);

            json.result = {
                id: noteId,
                title,
                body
            };

        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },
    edit: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let title = req.body.title;
        let body = req.body.body;

        if(id && title && body) {

            await NoteService.update(id, title, body);

            json.result = {
                id,
                title,
                body
            };

        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },
    delete: async (req, res) => {
        let json = {error:'', result:{}};

        await NoteService.delete(req.params.id);

        res.json(json);
    },
};