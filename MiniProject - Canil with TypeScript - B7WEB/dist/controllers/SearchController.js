"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const Pet_1 = require("../models/Pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = Pet_1.Pet.getFromName(query);
    res.render('pages/page', {
        menu: createMenuObject_1.createMenuObject(''),
        list,
        query
    });
};
exports.search = search;
