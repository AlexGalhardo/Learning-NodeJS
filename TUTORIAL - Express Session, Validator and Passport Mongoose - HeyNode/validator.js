const express = require('express')
const bodyParser = require('body-parser');

const app = express();

// Include Express Validator Functions
const { check, validationResult } = require('express-validator');

app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

// Home Page Route
app.get('/sessionID', (req, res) => {
  res.send(req.sessionID);
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/static/login.html');
});

// Validation Array
var loginValidate = [
  // Check Username
  check('email', 'Email Must Be an Email Address').isEmail()
  .trim().escape().normalizeEmail(),
  // Check Password
  check('password').isLength({ min: 8 })
  .withMessage('Password Must Be at Least 8 Characters')
  .matches('[0-9]').withMessage('Password Must Contain a Number')
  .matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter')
  .trim()
  .escape()
 ];

app.post('/login', loginValidate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  	return res.status(422).json({ errors: errors.array() });
  }
  else {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  }
});

const port = 4000// Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));