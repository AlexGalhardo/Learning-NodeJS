//index.js
// https://www.luiztools.com.br/post/tutorial-de-validacao-de-input-de-dados-em-node-js/
const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/),

    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2001),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

const val1 = userSchema.validate({ username: 'abc', birth_year: 1994 });
console.log("passou na validação: " + !val1.error)

const val2 = userSchema.validate({});
console.log("passou na validação: " + !val2.error)



//validations.js
const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/),

    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2001),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

module.exports = {
    userSchema
}

//index.js
const validations = require("./validations");

const val1 = validations.userSchema.validate({ username: 'abc', birth_year: 1994 });
console.log("Passou na validação: " + !val1.error);

const val2 = validations.userSchema.validate({});
console.log("Passou na validação: " + !val2.error);

// PARTE 2
// https://www.luiztools.com.br/post/tutorial-de-validacao-de-input-de-dados-em-nodejs-expressjs/
// WEB API EXPRESS
- sudo npm install -g express-generator
- express -e --git example-2
- cd example-2
- npm install
- npm start

// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json([]);
});

router.post('/', (request, response) => {
  response.json(request.body);
})

module.exports = router;


// models/userSchema.js
const Joi = require('joi');

module.exports = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/),

    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2001),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
});

// routes/users.js
const express = require('express');
const router = express.Router();
const userSchema = require("../models/userSchema");

const validationMiddleware = (request, response, next) => {
  const { error } = userSchema.validate(request.body)
  const valid = error == null; 

  if (valid) { 
    next(); 
  } else { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');

    console.log("error", message); 
    response.status(422).json({ error: message })
  } 
}

router.post('/', validationMiddleware, (request, response) => {
  response.status(201).json(request.body);
})