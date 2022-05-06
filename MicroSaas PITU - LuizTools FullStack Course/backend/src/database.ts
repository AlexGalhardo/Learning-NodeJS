import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(`${process.env.CONNECTION_STRING}`);

export default sequelize;