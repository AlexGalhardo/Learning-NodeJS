# Adding Server Logs to your Node.js App

## Why do we need logging?

Any good application with active users needs to be maintained. Part of that maintenance phase consists of analyzing your application's activity for potential issues or bugs. Effective logging in some cases may become the last line of defense when a debugging a critical production issue. Ask anyone who's ever had to debug any serious production bug without efficient logging and they'll most likely agree and have some war story that could have been prevented by effective error logging.

 In this tutorial, we'll be doing just that. We'll create a simple Node API that captures it's request and writes exceptions to a logging file to be stored and view at a later time. 


## What Info should we log?

Before we start logging we should define what we want to log. Obviously we don't want to observe every piece of activity in our application, but by storing the exceptions and errors, we might have a better chance of understanding bugs within our code as the users experience them. Best practice is to write meaningful logs that explain your application and it's activity. Cryptic logs are often just as helpful as having no logs at all.

As for what exactly to the logs, that's more particular to your applications and its individual components. Generally speaking, these types of things are safe to log.

- User Id's
- Timestamps
- log level/severity
- Error Messages 
- Status Codes 
- Methods


## How are we going to log?

This might be the hardest part to logging, picking an appropriate logger. There's no shortage of logging options out there in the Javascript ecosystem and really most are going to get the job done. My suggestion would be to start with one that has a particular feature you know you need and decent documentation. Today we'll be using Morgan and Winston who both have very great documentation.    

#### Morgan 
If your application communicates via HTTP, you'll want some kind of middleware to monitor incoming request. Morgan is a request logger that does just that. It's easy to install and has a lot of customizing and formatting benefits. We'll be using Morgan to communicate our web traffic requests to our application in a reasonable format.

#### Winston
Once we've captured our requests, we'll want some kind of way to persist that data to view at a later time. For this example we'll be using Winston. Winston is a powerful library that makes logging to file simple. It supports multiple transports, child loggers, custom levels and much more. Winston at it's core is designed to be simple to use, so we'll be using it to catch our errors and write them to file. 



### Step 1 - Set Up

To start off, we'll clone this starter repo containing a simple Express API.

[Clone this repo](https://github.com/lukepate/logger-) if you want to follow along with the tutorial.

Make sure to install all of the projects dependencies

```shell
npm install 
```


### Step 2 - Installing Winston

Now that our app is up and running, lets install Winston. 

```shell
npm install winston
```

We'll go ahead and create two folders. One for our Winston code and one for our log outputs.

```shell
mkdir ./logs ./config 
```

Create a file for our Winston Logger configuration. This is to simply to organize our loggers and keep them to their own directory. 

```shell
touch ./config/winston.js
```

We'll start by creating a new logger with the winston.createLogger method. CreateLogger accepts a few parameters such as 'format' and 'silent', but for now we're going to pass 'level', 'exitOnError and 'transports' to create a basic logger implementation. You can see in our transports that we're defining a filename and path to send our logging. 

```javascript
const winston = require('winston');
// creates a new Winston Logger
const logger = new winston.createLogger({
  level: 'info' 
  transports: [
    new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
  ],
  exitOnError: false
});
module.exports = logger;
```


### Step 3 - Adding Logs

Now that we have our logger installed, we'll need a way to use it. In our App.js file were going to bring in Morgan
for capturing HTTP requests. We'll use Morgans standard "combined" format and pass the stream to our Winston logger. 
In our app.get we're going to intentionally have the route throw an exception to stream that error to our Winston logger. You can see we're using the error method and sending a custom string of some of the requests data. This is the information that we're going to see on our log files, so feel free to customize it to your app's needs.   


Your app.js file should look like this:
```javascript
const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./config/winston');
const port = 8080

app.use(morgan("combined", { stream: logger.stream.write }));

app.get('/', function(req, res) {
    throw new Error('error thrown navigating to');
});

app.use(function(err, req, res, next) {
  logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
  next(err)
})  

app.listen(port, console.log(`Listening on port ${port}!`));
```

Now we're ready to start our server and see our logs in action. In one terminal window, start the application with:

```shell
node app.js 
```

Then, open a new Terminal window and tail the error file. This will allow you to see new logs being written to our file. Tail outputs the content of a file as lines are added to it.

Run the following command in the second terminal window:

```shell
tail -f ./logs/error.log
```

Now if we navigate our browser to [localhost:8080](http://localhost:8080) we can see errors as they are written to /logs/error.log. After you load the page, you should see something like this:

```
{"message":"GET - / - error thrown navigating to - ::1","level":"error"}
```

Now we have a simple API logging exceptions with Winston as they are thrown. I highly recommend jumping into the Winston docs and learning more about capabilities. We didn't touch on even half of Winston's additional logging features, but this is a good starting point to dive in. Good luck!  