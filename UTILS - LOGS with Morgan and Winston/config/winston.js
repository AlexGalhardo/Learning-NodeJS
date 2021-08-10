const winston = require('winston');

// creates a new Winston Logger
const logger = new winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
  ],
  exitOnError: false
});

module.exports = logger;