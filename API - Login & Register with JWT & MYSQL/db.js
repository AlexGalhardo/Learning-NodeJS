const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "remotemysql.com", 
    user: "1sZVxYbeYG", 
    database: "1sZVxYbeYG", 
    password: "", 
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;