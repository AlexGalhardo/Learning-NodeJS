const fs = require("fs");

function jsonReader(filePath, callback) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return callback && callback(err);
    }
    try {
      const object = JSON.parse(fileData);
      return callback && callback(null, object);
    } catch (err) {
      return callback && callback(err);
    }
  });
}

jsonReader("./customer.json", (err, customer) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  // increase customer order count by 1
  customer.order_count += 1;
  fs.writeFile("./customer.json", JSON.stringify(customer, null, 2), err => {
    if (err) console.log("Error writing file:", err);
    console.log('DONE')
  });
});