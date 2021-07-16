const sequelize = require('./sequilize');
// const Manicure = sequelize.import('./Manicure');

module.exports = (sequelize, DataTypes) => {
    const Locations = sequelize.define('locations', {        
        zip_code: DataTypes.STRING(8),
        street: DataTypes.STRING,
        street_number: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING(2),
        usr_id: DataTypes.INTEGER,
        lat: DataTypes.FLOAT(10, 8),
        lng: DataTypes.FLOAT(11, 8),
    }, {
        timestamps: false
    });

    return Locations;
}
