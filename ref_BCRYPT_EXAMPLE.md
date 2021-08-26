## Using Bcrypt Example
- $ npm install bcrypt
- ../helpers/Bcrypt.js
```js
const bcrypt = require('bcrypt');

const Bcrypt = {
    cryptPassword: (password) =>
        bcrypt.genSalt(12)
        .then((salt => bcrypt.hash(password, salt)))
        .then(hash => hash),

    comparePassword: (password, hashPassword) =>
        bcrypt.compare(password, hashPassword)
        .then(resp => resp)
};

module.exports = Bcrypt;
```
- using Bcrypt
```js
const Bcrypt = require('../helpers/Bcrypt')
const password = 'userpassword';

// return hash
const userPasswordHash = await Bcrypt.cryptPassword(password);
userPasswordHash = '$2y$12$skd4.pWo.BU6/QpMIWhAK..XSVfpWWx7srqIrdmO0nHmknwOCureS'
// return true or false
const userPasswordIsValid = await Bcrypt.comparePassword(password, userPasswordHash)
```