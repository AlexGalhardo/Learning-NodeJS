const fs = require('fs')
const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
}
const jsonString = JSON.stringify(customer, null, 2)
fs.writeFile('./newCustomer.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})