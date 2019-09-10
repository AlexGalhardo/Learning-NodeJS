function generatePassword(){
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var pass = ''
    for(var i=0; i< 10; i++)
      pass += chars.charAt(Math.random() * 61)
    return pass
}

module.exports = { generatePassword }

/**
# .env
MONGO_CONNECTION=conection_heroku_mongo_here
MONGO_DB=heroku_45pspqs1
MONGO_STORE_SECRET=123
SMTP_SERVER=SMTP.office365.com
SMTP_PORT=587
SMTP_USERNAME=email_here
SMTP_PASSWORD=password_here
**/