//10.1
standard --fix

//10.2
mkdir novo-projeto
cd novo-projeto
npm init

//10.3
"scripts": {
    "start": "node index.js"
  }

//10.4
require('dotenv').config()

//10.5
app.get("/meu-servico", function(request, response) {
    var datastore = require("db-module")(config);
    datastore.get(req.query.someKey)
    // etc, ...
})

//10.6
exports.test = function(){
    return 'hello world';
}

//10.7
if(typeof exports == 'undefined'){
    var exports = this['mymodule'] = {};
}

//10.8
(function(exports){

    // seu codigo vai aqui
   exports.test = function(){
        return 'hello world'
    };

})(typeof exports === 'undefined'? this['mymodule']={}: exports);

//10.9
var mymodule = require('./mymodule'),
    sys = require('sys');

sys.puts(mymodule.test());

//10.10
<script src="mymodule.js"></script>
<script>
    alert(mymodule.test());
</script>

//10.11
doSomething()
    .then(doNextStage)
    .then(recordTheWorkSoFar)
    .then(updateAnyInterestedParties)
    .then(tidyUp)
    .catch(errorHandler)

//10.12
console.log(myObject);

//10.13
const util = require('util')
console.log(util.inspect(myObject, {showHidden: false, depth: null}))

//10.14
console.log(JSON.stringify(myObject, null, 4))

//10.15
npm install helmet

//10.16
var helmet = require('helmet');
app.use(helmet());

//10.17
npm install pm2 -g

//10.18
pm2 start myApp.js

//10.19
pm2 start myApp.js -i max

//10.20
