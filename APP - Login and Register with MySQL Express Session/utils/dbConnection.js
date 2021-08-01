const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'remotemysql.com',
    user: '1sZVxYbeYG',
    password: '',
    database: '1sZVxYbeYG'
});

module.exports = dbConnection.promise();