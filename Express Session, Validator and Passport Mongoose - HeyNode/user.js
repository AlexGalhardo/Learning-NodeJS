// dependencies
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// connect to database
mongoose.connect('mongodb://localhost/users',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create Model
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String
});

// Export Model
User.plugin(passportLocalMongoose);

// CREATE FAKE DATA
// UserDetails.register({ username: 'alex', active: false }, '123456');
// UserDetails.register({ username: 'admin', active: false }, 'root');

module.exports = mongoose.model('userData', User, 'userData');