const Sequelize = require('sequelize');

module.exports = {
    // Option 1: Passing parameters separately
	const sequelize = new Sequelize('recomendae', 'root', '', {
	  host: 'localhost',
	  dialect: 'mysql'
	});


	sequelize
	  .authenticate()
	  .then(() => {
	    console.log('Connection has been established successfully.');
	  })
	  .catch(err => {
	    console.error('Unable to connect to the database:', err);
	  });

    const Model = Sequelize.Model;
    class Game extends Model {}

	// Find all users
	Game.findAll().then(users => {
	  console.log("All users:", JSON.stringify(users, null, 4));
	});

	// Create a new user
	Game.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
	  console.log("Jane's auto-generated ID:", jane.id);
	});

	// Delete everyone named "Jane"
	Game.destroy({
	  where: {
	    firstName: "Jane"
	  }
	}).then(() => {
	  console.log("Done");
	});

	// Change everyone without a last name to "Doe"
	Game.update({ lastName: "Doe" }, {
	  where: {
	    lastName: null
	  }
	}).then(() => {
	  console.log("Done");
	});
}