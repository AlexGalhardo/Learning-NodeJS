const fs = require('fs')

/*
const fetch = require('node-fetch');
const uuid = require('uuid');
const randomToken = require('rand-token');

const Bcrypt = require('../../helpers/Bcrypt');
const DateTime = require('../../helpers/DateTime');
*/

const JSON_DATABASE_FILE = "./database.json";
const database = JSON.parse(fs.readFileSync(JSON_DATABASE_FILE));

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

const DateTime = {
  getDateTime: function(timestamp){
    let date = new Date(timestamp*1000).toLocaleDateString("pt-BR")
    let time = new Date(timestamp*1000).toLocaleTimeString("pt-BR")
    return `${date} ${time}`;
  },

  getNow: () => {
    let date = new Date().toLocaleDateString("pt-BR")
    let time = new Date().toLocaleTimeString("pt-BR")
    return `${date} ${time}`;
  }  
}

class Users {

  static save(database, error_message){
    fs.writeFileSync(JSON_DATABASE_FILE, JSON.stringify(database, null, 2), error => {
      if (error) {
        console.log("Error writing file in registerUser: ", error);
        return false
      }
    });
    return true
  }

  static getUsers () {
    try {
      return database.users
    } catch (error) {
      return console.log("ERROR getUsers: ", error);
    };
  }

  static getUserByID(user_id) {
    try {
      for(let i = 0; i < database.users.length; i++){
        if(database.users[i].id == user_id) return database.users[i]
      }
      return null
    } catch (error) {
      return console.log("ERROR getUsers: ", error);
    }
  }

  static getUserByEmail(email) {
    try {
      for(let i = 0; i < database.users.length; i++){
        if(database.users[i].email == email) return database.users[i]
      }
      return null
    } catch (error) {
      return console.log("ERROR getUsers: ",error);
    }
  }

  static emailIsAlreadyRegistred(email){
    try {
      for(let i = 0; i < database.users.length; i++){
        if(database.users[i].email == email){
          return true
        }
      }
      return false
    } catch (error) {
      return console.log("ERROR emailIsAlreadyRegistred: ", error);
    }
  }

  static verifyConfirmEmailToken (email, token) {
    try {
      
      for(let i = 0; i < database.users.length; i++){
        
        if(
          database.users[i].email === email 
          && 
          database.users[i].confirm_email_token === token)
        {

          database.users[i].confirmed_email = true;
          // database.users[i].confirm_email_token = null;
          Users.save(database, 'ERROR verifyConfirmEmailToken: ')
        }

        return false
      }
    } 
    catch (error) {
      return console.log("ERROR verifyConfirmEmailToken: ", error);
    }
  }

  static verifyIfEmailIsConfirmed (email) {
    try {
      for(let i = 0; i < database.users.length; i++){
        if(database.users[i].email == email && database.users[i].confirmed_email){
          return true
        }
      }
      return false
    } catch (error) {
      return console.log("ERROR emailIsAlreadyRegistred: ", error);
    }
  }

  static async verifyLogin(email, password){
    try {
      for(let i = 0; i < database.users.length; i++){
        if(database.users[i].email == email){
          const passwordValid = await Bcrypt.comparePassword(password, database.users[i].password)
          if(passwordValid){
            return true
          }
          return false
        }
      }
    } catch (error) {
      return console.log("ERROR verifyLogin: ", error);
    }
  }

  static async registerUser (username, email, password, confirm_password, confirm_email_token) {
    try {
      
      if(Users.emailIsAlreadyRegistred(email)) return false

      const passwordHash = await Bcrypt.cryptPassword(password)

      database.users.push({
        id: 'id novo',
        name: username,
        email: email,
        confirmed_email: false,
        confirm_email_token: confirm_email_token,
        password: passwordHash,
        reset_password_token: null,
        admin: false,
        avatar: "avatar.png",
        document: null,
        phone: null,
        birth_date: null,
        google_id: null,
          github_id: null,
          facebook_id: null,
        address: {
          zipcode: null,
            street: null,
            street_number: null,
            neighborhood: null,
            city: null,
            state: null,
            country: "BRAZIL"
        },
          stripe: {
            customer_id: null,
            card_id: null,
            currently_subscription_id: null,
            currently_subscription_name: null,
            subscription_start: null, 
            subscription_end: null,
            subscription_automatically_renew: false
        },
        created_at: DateTime.getNow(),
        updated_at: DateTime.getNow()
      })

      Users.save(database, 'error register user: ')

    } catch (error) {
      return console.log("ERROR registerUser: ", error);
    }
  }

  static createResetPasswordToken(email, reset_password_token){
    try {
      for(let i = 0; i < database.users.length; i++){
        if(database.users[i].email == email){
          database.users[i].reset_password_token = reset_password_token
          Users.save(database, 'error createResetPasswordToken: ')
          return true
        }
        return false
      }
    } catch (error) {
      return console.log("ERROR createResetPasswordToken: ", error);
    }
  }

  static resetPasswordTokenIsValid(email, resetPasswordToken){
    try {
      for(let i = 0; i < database.users.length; i++){
        if(database.users[i].email === email 
          && 
          database.users[i].reset_password_token === resetPasswordToken){
          
          return true
        }
        return false
      }
    } catch (error) {
      return console.log("ERROR passwordResetTokenIsValid: ", error);
    }
  }

  static updateProfile(userObject){
    try {
      for(let i = 0; i < database.users.length; i++){

        if(database.users[i].email == userObject.email){
          database.users[i].name = userObject.username
          database.users[i].email = userObject.email
          database.users[i].document = userObject.document
          database.users[i].phone = userObject.phone
          database.users[i].birth_date = userObject.birth_date
          database.users[i].address.zipcode = userObject.zipcode
          database.users[i].address.street = userObject.street
          database.users[i].address.street_number = userObject.street_number
          database.users[i].address.neighborhood = userObject.neighborhood
          database.users[i].address.city = userObject.city
          database.users[i].address.state = userObject.state
          database.users[i].updated_at = DateTime.getNow()
          
          Users.save(database, 'Error updateProfile: ')
          return true
        }
      }
      return false
    } catch (error) {
      return console.log("ERROR updateProfile: ", error);
    }
  }

  static updateAvatarName(avatarName, user_id){
    try {
      for(let i = 0; i < database.users.length; i++){
        if(database.users[i].id == user_id){
          database.users[i].avatar = avatarName
          Users.save(database, 'Error updateAvatarName: ')
          return true
        }
      }
      return false
    } catch (error) {
      return console.log("ERROR updateAvatarName: ", error);
    }
  }
}

// 

async function main(){
  // console.log(Users.getUsers());

  // const user = Users.getUserByID("13667f62-03d6-4b46-bd22-0bbf2a3b89d2");
  // console.log('getUserByID é: ', user)

  // const user = await Users.getUserByEmail("kaka@gmail.com");
  // console.log('getUserByEmail é: ', user)

  //if(Users.emailIsAlreadyRegistred('admin@gmail.com')){
  //  console.log('email is already registred')
  //} else {
  //  console.log('email is valid')
  //}

  /*if(Users.verifyConfirmEmailToken("test@gmail.com", "kekeke")){
    console.log('email confirmed!')
  } else {
    console.log('you need to confirm your email!')
  }*/

  // if(Users.verifyIfEmailIsConfirmed('admin@gmail.com')) console.log('email confirmed!')

  // if(Users.verifyLogin("test@gmail.com", "test123")) console.log('login VALID!')

  // const userRegistred = await Users.registerUser('maria', 'test@gmail.com', 'maria123', 'maria123', 'mamama')
  // if(userRegistred) console.log('user registred!')

  //const resetPasswordTokenCreated = await Users.createResetPasswordToken('test@gmail.com', 'reset_password_token_NEW')
  //if(resetPasswordTokenCreated) console.log('rpt created!')

  // if(Users.resetPasswordTokenIsValid('test@gmail.com', 'reset_password_token_NEW')) console.log('reset password token is VALID!')

  /*if(Users.updateProfile({
    username: 'pedrin',
    email: 'maria@gmail.com',
    document: '123',
    phone: '189997103291',
    birth_date: '14/05/1999',
    zipcode: '13560290',
    street: 'logo ali',
    street_number: 24,
    neighborhood: 'bairro aqui',
    city: 'city here',
    state: 'state here'
  })) console.log('profile updated!')*/

  if(Users.updateAvatarName('maria.png', '2227a102-7d06-4d0a-a375-c04882297')) console.log('avatar name updated')
}

main()

