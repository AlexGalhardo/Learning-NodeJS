## DOCKER and MYSQL Example

#### docker-compose.yml
```
# https://hub.docker.com/_/adminer
# https://hub.docker.com/_/mysql

# $ sudo docker-compose up -d
# $ sudo docker-compose ps
# $ sudo docker-compose ps -a
# $ sudo docker-compose restart
# $ sudo docker-compose down
# $ sudo docker-compose down
# $ sudo docker-compose down -v
# $ sudo docker-compose up -d --remove-orphans

# $ sudo docker network ls

# $ sudo docker rm -f CONTAINER_ID
# $ sudo docker rmi -f IMAGE_ID

# $ sudo docker inspect CONTAINER_NAME_OR_ID

# $ sudo kill -9 $(sudo lsof -t -i:3000)

version: '3'

services:
  
    galhardoapp_mysql:
        image: mysql:latest
        container_name: galhardoapp_mysql
        environment:
          MYSQL_ROOT_PASSWORD: "root"
        ports:
          - "3306:3306"
        volumes:
          - mysql-data:/var/lib/mysql
        networks:
          - galhardoapp_network

    # ADMINER GUI FOR MYSQL
    # http://localhost:8080
    # MYSQL username: root | password: root | server: galhardoapp_mysql
    galhardoapp_adminer:
        image: adminer
        container_name: galhardoapp_adminer
        ports:
          - "8080:8080"
        networks:
          - galhardoapp_network

networks: 
  galhardoapp_network:
    driver: bridge

volumes:
  mysql-data:
```

#### dump-users.sql
```sql
DROP DATABASE IF EXISTS `galhardoapp`;

CREATE DATABASE `galhardoapp`;
USE `galhardoapp`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` varchar(128) NOT NULL,
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `confirmed_email` tinyint(1) DEFAULT NULL,
  `confirm_email_token` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `reset_password_token` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `admin` tinyint(1) NOT NULL,
  `avatar` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `document` varchar(12) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone_country` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone_ddd` varchar(3) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone_number` varchar(12) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `birth_date` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `google_id` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `github_id` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `facebook_id` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address_zipcode` varchar(24) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address_street` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address_street_number` int DEFAULT NULL,
  `address_neighborhood` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address_city` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address_state` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address_country` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pagarme_customer_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pagarme_card_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pagarme_card_brand` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pagarme_card_first_digits` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pagarme_card_last_digits` int DEFAULT NULL,
  `pagarme_card_expiration_date` int DEFAULT NULL,
  `pagarme_currently_subscription_id` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pagarme_currently_subscription_name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pagarme_subscription_start` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pagarme_subscription_end` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pagarme_subscription_cancel_at_period_end` tinyint(1) DEFAULT NULL,
  `created_at` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `updated_at` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
```

#### testUserModel.js
```js
// yarn init -y && yarn add mysql2 uuid rand-token bcryptjs
// npm init -y && npm isntall mysql2 uuid rand-token bcryptjs



import mysql2 from 'mysql2';
import { v4 as uuid } from 'uuid';
import randomToken from 'rand-token';
import bcrypt from 'bcryptjs';



// CONNECT TO MYSQL 
let connection = null
try {
    connection = mysql2.createPool({
        host: '172.18.0.3', // DOCKER IPv4 Address Here (use $ sudo docker inspect galhardoapp_mysql)
        user: 'root',
        password: 'root',
        database: 'galhardoapp',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
}
catch(error){
    throw new Error(error)
}

let MYSQL = connection.promise()




// BCRYPT 
class Bcrypt {
    
    static cryptPassword (password) {
        return bcrypt.genSalt(16)
        .then((salt => bcrypt.hash(password, salt)))
        .then(hash => hash)
    }

    static comparePassword (password, hashPassword) {
        return bcrypt.compare(password, hashPassword)
        .then(resp => resp)
    }
};



// DATETIME
class DateTime  {
    
    static getDateTime(timestamp){
        let date = new Date(timestamp*1000).toLocaleDateString('pt-BR')
        let time = new Date(timestamp*1000).toLocaleTimeString('pt-BR')
        return `${date} ${time}`;
    }

    static getNow() {
        let date = new Date().toLocaleDateString('pt-BR')
        let time = new Date().toLocaleTimeString('pt-BR')
        return `${date} ${time}`;
    }
}



// MODEL USERS
class Users {

    static async selectAll() {
        try {
            let stmt = `SELECT * 
                        FROM users`;

            const [ rows ] = await MYSQL.execute(stmt)

            // return rows ? rows : null
            console.log('selectAll: ', rows ? rows : null)
        } catch(error){
            throw new Error(error)
        }
    }


    static async selectByID(user_id) {
        try {
            let stmt = `SELECT * 
                        FROM users 
                        WHERE id = '${user_id}'`;

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('selectByID: ', rows ? rows[0] : null)

            // return rows ? rows[0] : null
        } catch(error){
            throw new Error(error)
        }
    }


    static async selectByEmail(email) {
        try {
            let stmt = `SELECT * 
                        FROM users 
                        WHERE email = '${email}'`;

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('selectByEmail: ', rows ? rows[0] : null)

            // return rows ? rows[0] : null
        } catch(error){
            throw new Error(error)
        }
    }


    static async verifyIfAdminByID(user_id) {
        try {
            let stmt = `SELECT * 
                        FROM users 
                        WHERE id = '${user_id}'`;

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('verifyIfAdminByID: ', rows[0].admin ? true : false)

            // return rows[0].admin ? true : false
        } catch(error){
            throw new Error(error)
        }
    }

    static async emailAlreadyRegistred(email){
        try {
            let stmt = `SELECT * 
                        FROM users 
                        WHERE email = '${email}'`;

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('emailAlreadyRegistred: ', rows[0] ? true : false)

            return rows[0] ? true : false
        } catch(error){
            throw new Error(error)
        }
    }

    static async verifyConfirmEmailToken (email, confirm_email_token) {
        try {
            let stmt = `SELECT email, 
                                confirm_email_token 
                        FROM users 
                        WHERE email = '${email}'`;

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('verifyConfirmEmailToken: ', rows[0].confirm_email_token === confirm_email_token ? true : false)

            // return rows[0].confirm_email_token === confirm_email_token ? true : false
        } catch (error){
            throw new Error(error)
        }
    }

    static async verifyIfEmailIsConfirmed(email){
        try {
            let stmt = `SELECT email, 
                                confirmed_email 
                        FROM users 
                        WHERE email = '${email}'`;

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('verifyIfEmailIsConfirmed: ', rows[0].confirmed_email ? true : false)

            return rows[0] ? true : false
        } catch(error){
            throw new Error(error)
        }
    }

    static async verifyLogin(email, password){
        try {
            let stmt = `SELECT * 
                        FROM users 
                        WHERE email = '${email}'`;

            const [ rows ] = await MYSQL.execute(stmt);

            const passwordValid = await Bcrypt.comparePassword(password, rows[0].password)

            console.log('verifyLogin: ', passwordValid ? rows[0] : null)

            // return passwordValid ? rows[0] : null
        } catch (error){
            throw new Error(error)
        }
    }


    static async verifyLoginGitHub(email, github_id, avatar){
        try {
            let stmt = `SELECT *
                        FROM users
                        WHERE email = '${email}'`

            const [ rows ] = await MYSQL.execute(stmt);

            if(rows.length > 0){
                stmt = `UPDATE users
                        SET 
                            github_id = '${github_id}',
                            avatar = '${avatar}'
                        WHERE email = '${email}'`

                await MYSQL.execute(stmt);
            }

            console.log('verifyLoginGitHub: ', rows ? rows : null)

            // return rows ? rows : null
        } catch(error){
            throw new Error(error)
        }
    }


    static async verifyLoginGoogle(email, google_id, avatar){
        try {
            let stmt = `SELECT *
                        FROM users
                        WHERE email = '${email}'`

            const [ rows ] = await MYSQL.execute(stmt);

            if(rows.length > 0){
                stmt = `UPDATE users
                        SET 
                            google_id = '${google_id}',
                            avatar = '${avatar}'
                        WHERE email = '${email}'`

                await MYSQL.execute(stmt);
            }

            console.log('verifyLoginGoogle: ', rows ? rows : null)

            // return rows ? rows : null
        } catch(error){
            throw new Error(error)
        }
    }


    static async verifyLoginFacebook(email, facebook_id){
        try {
            let stmt = `SELECT *
                        FROM users
                        WHERE email = '${email}'`

            const [ rows ] = await MYSQL.execute(stmt);

            if(rows.length > 0){
                stmt = `UPDATE users
                        SET 
                            facebook_id = '${facebook_id}'
                        WHERE email = '${email}'`

                await MYSQL.execute(stmt);
            }

            console.log('verifyLoginFacebook: ', rows ? rows : null)

            // return rows ? rows : null
        } catch(error){
            throw new Error(error)
        }
    }


    static async updateResetPasswordToken(email){
        try {
            const reset_password_token = await randomToken.generate(24);

            let stmt = `UPDATE users 
                        SET reset_password_token = '${reset_password_token}' 
                        WHERE email = '${email}'`

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('updateResetPasswordToken: ', rows.affectedRows ? true : false)

            // return rows.affectedRows ? true : false
        } catch(error){
            throw new Error(error)
        }
    }


    static async verifyResetPasswordToken(email, reset_password_token){
        try {
            let stmt = `SELECT email, 
                                reset_password_token 
                        FROM users 
                        WHERE email = '${email}'`;

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('verifyResetPasswordToken: ', rows[0].reset_password_token === reset_password_token ? true : false)

            // return rows[0].reset_password_token === reset_password_token ? true : false
        } catch(error){
            throw new Error(error)
        }
    }


    static async updateProfile(userObject){
        try {
            let stmt = `UPDATE users 
                        SET 
                            name = '${userObject.name}',
                            email = '${userObject.email}',
                            password = '${userObject.password}',
                            document = '${userObject.document}',
                            phone_country = '${userObject.phone_country}',
                            phone_ddd = '${userObject.phone_ddd}',
                            phone_number = '${userObject.phone_number}',
                            birthday = '${userObject.birthday}',
                            address_zipcode = '${userObject.address_zipcode}',
                            address_street = '${userObject.address_street}',
                            address_street_number = '${userObject.address_street_number}',
                            address_neighborhood = '${userObject.address_neighborhood}',
                            address_city = '${userObject.address_city}',
                            address_state = '${userObject.address_state}',
                            address_country = '${userObject.address_country}'
                        WHERE id = '${userObject.id}'`

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('updateProfile: ', rows.affectedRows ? true : false)

            // return rows.affectedRows ? true : false
        } catch(error){
            throw new Error(error)
        }
    }


    static async updateAvatarName(email, avatarName){
        try {
            let stmt = `UPDATE users 
                        SET avatar = '${avatarName}' 
                        WHERE email = '${email}'`

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('updateAvatarName: ', rows.affectedRows ? true : false)

            // return rows.affectedRows ? true : false
        } catch(error){
            throw new Error(error)
        }
    }


    static async deleteProfile(email, password){
        try {
            let stmt = `SELECT password
                        FROM users 
                        WHERE email = '${email}'`;

            let [ rows ] = await MYSQL.execute(stmt);

            const passwordValid = await Bcrypt.comparePassword(password, rows[0].password)

            if(passwordValid) {
                stmt = `DELETE
                        FROM users 
                        WHERE email = '${email}'`;

                [ rows ] = await MYSQL.execute(stmt);

                console.log('deleteProfile: ', rows.affectedRows ? true : false)

                // return rows.affectedRows ? true : false
            }

            return 

        } catch(error){
            throw new Error(error)
        }
    }


    static async updatePagarmeCustomerID(email, pagarme_customer_id){
        try {
            let stmt = `UPDATE users 
                        SET pagarme_customer_id = '${pagarme_customer_id}' 
                        WHERE email = '${email}'`

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('updatePagarmeCustomerID: ', rows.affectedRows ? true : false)

            // return rows.affectedRows ? true : false
        } catch(error){
            throw new Error(error)
        }
    }


    static async updatePagarmeCard(email, cardObject){
        try {
            let stmt = `UPDATE users 
                        SET 
                            pagarme_card_id = '${cardObject.id}',
                            pagarme_card_brand = '${cardObject.brand}',
                            pagarme_card_first_digits = '${cardObject.first_digits}',
                            pagarme_card_last_digits = '${cardObject.last_digits}',
                            pagarme_card_expiration_date = '${cardObject.expiration_date}' 
                        WHERE email = '${email}'`

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('updatePagarmeCard: ', rows.affectedRows ? true : false)

            // return rows.affectedRows ? true : false
        } catch(error){
            throw new Error(error)
        }
    }


    static async updatePagarmeSubscription(email, subscriptionObject){
        try {
            let stmt = `UPDATE users 
                        SET 
                            pagarme_currently_subscription_id = '${subscriptionObject.id}',
                            pagarme_currently_subscription_name = '${subscriptionObject.plan_name}',
                            pagarme_subscription_start = '${subscriptionObject.start}',
                            pagarme_subscription_end = '${subscriptionObject.end}',
                            pagarme_subscription_cancel_at_period_end = '${subscriptionObject.cancel_at_period_end}' 
                        WHERE email = '${email}'`

            const [ rows ] = await MYSQL.execute(stmt);

            console.log('updatePagarmeSubscription: ', rows.affectedRows ? true : false)

            return 

            // return rows.affectedRows ? true : false
        } catch(error){
            throw new Error(error)
        }
    }


    static async create(userObject) {
        try {
            
            const emailAlreadyRegisted = await Users.emailAlreadyRegistred(userObject.email)
            
            if(emailAlreadyRegisted) return console.log('Email already Registred!')

            let stmt = `INSERT INTO users
                                (id,
                                name,
                                email,
                                confirmed_email,
                                confirm_email_token,
                                password,
                                reset_password_token,
                                admin,
                                avatar,
                                document,
                                phone_country,
                                phone_ddd,
                                phone_number,
                                birthday,
                                google_id,
                                github_id,
                                facebook_id,
                                address_zipcode,
                                address_street,
                                address_street_number,
                                address_neighborhood,
                                address_city,
                                address_state,
                                address_country,
                                pagarme_customer_id,
                                pagarme_card_id,
                                pagarme_card_first_digits,
                                pagarme_card_last_digits,
                                pagarme_card_expiration_date,
                                pagarme_currently_subscription_id,
                                pagarme_currently_subscription_name,
                                pagarme_subscription_start,
                                pagarme_subscription_end,
                                pagarme_subscription_cancel_at_period_end,
                                created_at,
                                updated_at)
                    VALUES (?,
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?, 
                            ?,
                            ?,
                            ?,
                            ?,
                            ?,
                            ?,
                            ?)`;

            const confirm_email_token = await randomToken.generate(24);
            const passwordHash = await Bcrypt.cryptPassword(userObject.password)

            const google_id = userObject.google_id || null
            const github_id = userObject.google_id || null
            const facebook_id = userObject.google_id || null

            let data = [
                uuid(), // id
                userObject.name, // name
                userObject.email, // email
                0, // confirmed_email
                confirm_email_token, // confirm_email_token
                passwordHash, // password
                null, // reset_password_token
                userObject.admin, // admin
                "avatar.png", // avatar
                null, // document
                null, // phone_country
                null, // phone_ddd
                null, // phone_number
                null, // birthday
                google_id, // google_id
                github_id, // github_id
                facebook_id, // facebook_id
                null, // address_zipcode,
                null, // address_street,
                null, // address_street_number,
                null, // address_neighborhood,
                null, // address_city,
                null, // addreess_state,
                null, // address_country,
                null, // pagarme_customer_id,
                null, // pagarme_card_id,
                null, // pagarme_card_first_digits,
                null, // pagarme_card_last_digits,
                null, // pagarme_card_expiration_date,
                null, // pagarme_currently_subscription_id,
                "FREE", // pagarme_currently_subscription_name,
                null, // pagarme_subscription_start,
                null, // pagarme_subscription_end,
                null, // pagarme_subscription_cancel_at_period_end,
                DateTime.getNow(), // created_at
                DateTime.getNow() // updated_at
            ];

            const [ rows ]  = await MYSQL.execute(stmt, data);

            rows.affectedRows ? console.log(`USER: ${userObject.email} CREATED!`) : console.log('USER NOT CREATED!')

            return

        } catch(error){
            throw new Error(error)
        }
    }
}


// TEST MODEL USER
async function testModelUser(){
    
    await Users.create({
        name: 'Test Jack',
        email: 'test@gmail.com',
        password: 'test123',
        admin: 0
    }) // return void

    await Users.create({
        name: 'ADMIN Alex',
        email: 'admin@gmail.com',
        password: 'testadmin',
        admin: 1
    }) // return void

    await Users.selectAll() // return array with users objects

    await Users.selectByID('30555547-6c7d-473b-931f-1cffef121c98') // return user object

    await Users.selectByEmail('test@gmail.com') // return user object

    await Users.verifyIfAdminByID('791bf9a9-2ae0-42a1-8b22-fbc73f0dcf8c') // return true or false

    await Users.verifyConfirmEmailToken('test@gmail.com', 'DWLXb16HyGdYPlKFrMhA6827') // return true or false

    await Users.verifyIfEmailIsConfirmed('test@gmail.com') // return true or false

    await Users.updateResetPasswordToken('test@gmail.com')  // return void

    await Users.verifyResetPasswordToken('test@gmail.com', 'GNKVFstF4FFwMCZhIlcaHJlX') // return true or false

    await Users.verifyLogin('test@gmail.com', 'test123') // return user object if true, null if false

    await Users.updateAvatarName('test@gmail.com', 'test_avatar.png') // return void

    await Users.updatePagarmeCustomerID('test@gmail.com', '87687123') // return void

    await Users.updatePagarmeCard('test@gmail.com', {
        id: 'card_id_from_pagarme',
        brand: 'visa',
        first_digits: '1234',
        last_digits: '5678',
        expiration_date: '1022', // return void
    })

    await Users.updatePagarmeSubscription('test@gmail.com', {
        id: 'subs_id_from_pagarme',
        plan_name: 'PREMIUM',
        start: '23/09/2021 18:32:45',
        end: '23/10/2021 18:32:45',
        cancel_at_period_end: 0 
    }) // return void  

    await Users.updateProfile({
        id: '868606ab-d227-40f0-8cfb-7a6c20d89b5c',
        name: 'Updated_name',
        email: 'new_email_updated@gmail.com',
        password: 'test987',
        document: '1111111111',
        phone_country: '+55',
        phone_ddd: '18',
        phone_number: '999999999',
        birthday: '23-09-2020',
        address_zipcode: '13560290',
        address_street: 'Rua logo ali',
        address_street_number: 42,
        address_neighborhood: 'Bairro Top',
        address_city: 'São Paulo',
        address_state: 'SP',
        address_country: 'Brazil'
    }) 

    // await Users.verifyLoginGitHub('test@gmail.com', 'github_id_here', 'github_avatar.png')
    // await Users.verifyLoginGoogle('test@gmail.com', 'google_id_here', 'google_avatar.png')
    // await Users.verifyLoginFacebook('test@gmail.com', 'facebook_id_here', 'facebook_avatar.png')

    // await Users.deleteProfile('test@gmail.com', 'test123') // return void
}

testModelUser()
```