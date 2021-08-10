const fs = require('fs')
const config = require("./customer.json");

fs.readFile("./customer.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const customer = JSON.parse(jsonString);
    console.log("Customer address is:", customer.address); // => "Customer address is: Infinity Loop Drive"
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

	try {
	  const jsonString = fs.readFileSync("./customer.json");
	  const customer = JSON.parse(jsonString);
	  console.log(customer.address); // => "Infinity Loop Drive"
	} catch (err) {
	  console.log(err);
	  return;
	}


console.log(config) // { name: 'Mega Corp.', order_count: 83, address: 'Infinity Loop Drive' }