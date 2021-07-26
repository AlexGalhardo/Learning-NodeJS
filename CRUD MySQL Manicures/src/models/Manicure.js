const Sequelize = require('./sequilize');
const Locations = Sequelize.import('./Locations');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
    }, {
        timestamps: false
    });

     User.hasMany(Locations, {foreignKey: 'usr_id'})

    return User;
}