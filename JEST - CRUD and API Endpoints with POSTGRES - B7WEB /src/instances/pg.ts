import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';
import db from './database'

dotenv.config();

export const sequelize = new Sequelize(
    db.name,
    db.user,
    db.password,
    {
        host: '172.18.0.4',
        dialect: 'postgres',
        port: parseInt(db.port)
    }
);