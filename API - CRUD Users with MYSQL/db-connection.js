const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "remotemysql.com", // HOST NAME
    user: "1sZVxYbeYG", // USER NAME
    database: "1sZVxYbeYG", // DATABASE NAME
    password: "", // DATABASE PASSWORD
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;
