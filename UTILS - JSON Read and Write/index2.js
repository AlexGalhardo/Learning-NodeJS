const fs = require("fs");

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

jsonReader("./customer.json", (err, customer) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(customer.address); // => "Infinity Loop Drive"
});