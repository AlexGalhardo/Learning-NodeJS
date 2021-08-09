"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const Pet_1 = require("../models/Pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const home = (req, res) => {
    let list = Pet_1.Pet.getAll();
    res.render('pages/page', {
        menu: createMenuObject_1.createMenuObject('all'),
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
exports.home = home;
const dogs = (req, res) => {
    let list = Pet_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: createMenuObject_1.createMenuObject('dogs'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = Pet_1.Pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuObject_1.createMenuObject('cats'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = Pet_1.Pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenuObject_1.createMenuObject('fishes'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};
exports.fishes = fishes;
