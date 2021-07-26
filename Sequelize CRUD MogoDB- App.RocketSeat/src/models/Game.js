const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('recomendae', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Sequelize will keep the connection open by default, and use the same connection for all queries. 
// If you need to close the connection, call sequelize.close() (which is asynchronous and returns a Promise).

const Model = Sequelize.Model;
class Game extends Model {}

/**
"titleGame": "God Of War 2018",
	"gamePlatform": "Exclusive PS4",
	"gameType": "Ação e Aventura",
	"gameMetacritic": 9.5,
	"gameWantToPlay": 45,
	"gameFinalized": 32,
	"gameRecommend": 108,
	"gameNotRecommended": 14,
	"gameUrlImage": "https://media.playstation.com/is/image/SCEA/god-of-war-box-art-01-ps4-us-27mar18?$native_nt$"
**/

Game.init({
  // attributes
  game_title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  game_platform: {
    type: Sequelize.STRING,
    allowNull: false
  },
  game_type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  game_metacritic: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  game_want_play: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  game_finalized: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  game_recommend: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  game_notRecommended: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  game_img_url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  game_shop_url: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'game'
  // options
});


// Find all users
User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});

// Create a new user
User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
  console.log("Jane's auto-generated ID:", jane.id);
});

// Delete everyone named "Jane"
User.destroy({
  where: {
    firstName: "Jane"
  }
}).then(() => {
  console.log("Done");
});

// Change everyone without a last name to "Doe"
User.update({ lastName: "Doe" }, {
  where: {
    lastName: null
  }
}).then(() => {
  console.log("Done");
});