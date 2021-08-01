const express = require('express');  // Include ExpressJS
const app = express();  // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware
const session = require('express-session');  // express-sessions
const { v4: uuidv4 } = require('uuid'); //To call: uuidv4

app.use(bodyParser.urlencoded({ extended: false }));

// Configure Sessions Middleware
app.use(session({
  genid: function (req) {
	  return uuidv4();
  },
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/static/login.html');
});

//  /login post route
app.post('/login', (req, res) => {
   req.session.email = req.body.email;
   res.send(`Hello ${req.session.email}. Your session ID is   
   ${req.sessionID} and your session expires in  
   ${req.session.cookie.maxAge} milliseconds.`);
});



const port = 4000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));