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