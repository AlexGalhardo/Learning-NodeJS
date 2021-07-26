// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'w3_nodejs_mysql2'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

// SELECT
connection.query(
  'SELECT * FROM `users` WHERE `name` = "alex" AND `email` = "aleexgvieira@gmail.com"',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
    if(err) throw err;
  }
);

// SELECT *
connection.query(
    "SELECT * FROM customers", 
    function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    }
);

connection.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(result[2].address);
});

// CREATE TABLE
connection.query(
    "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))", 
    function (err, result) {
        if (err) throw err;
        console.log("Table Customers created");
    }
);

// INSERT SINGLE QUERY
connection.query(
    "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')", 
    function (err, result) {
        if (err) throw err;
        console.log("INSERT SINGLE CUSTOMER!");
    }
);

// INSERT MULTIPLE QUERY
var sql = "INSERT INTO customers (name, address) VALUES ?";
var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
];
connection.query(
    sql,
    [values], 
    function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    }
);

// GET LAST ID INSERTED
connection.query(
    "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')", 
    function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    }
);

// SELECT * WHERE
connection.query(
    'SELECT * FROM customers WHERE name = ? OR address = ?',
    [
        'name here',
        'address here'
    ], 
    function (err, result) {
        if (err) throw err;
        console.log(result);
    }
);

// DELETE
var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
});


var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
});

/*
[
  { id: 154, name: 'Chocolate Heaven' },
  { id: 155, name: 'Tasty Lemons' },
  { id: 156, name: 'Vanilla Dreams' }
]

USERS
[
  { id: 3, name: 'John', favorite_product: 154},
  { id: 4, name: 'Peter', favorite_product: 154},
  { id: 5, name: 'Amy', favorite_product: 155},
  { id: 6, name: 'Hannah', favorite_product:},
  { id: 7, name: 'Michael', favorite_product:}
]
*/

// JOIN 
connection.query(
    `CREATE TABLE IF NOT EXISTS products 
    (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    )`,
    function (err, result) {
        if (err) throw err;
        console.log("Table products created!");
    }
)

var sql = "INSERT INTO products (name) VALUES ?";
var products = [
    ['Chocolate Heaven'],
    ['Bolo Laranja'],
    ['Brigadeiro']
];

connection.query(
    sql,
    [products],
    function (err, result) {
        if (err) throw err;
        console.log("Total products added: " + result.affectedRows);
    }
);

var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});