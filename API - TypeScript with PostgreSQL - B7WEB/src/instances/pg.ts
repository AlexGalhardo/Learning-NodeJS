import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

/*
export const sequelize = new Sequelize(
	process.env.PG_HOST as string,
	process.env.PG_DB as string,
	process.env.PG_USER as string,
	process.env.PG_PASSWORD as string,
	{
		dialect: 'postgres',
		port: parseInt(process.env.PG_PORT as string)
	}
);
*/

export const sequelize = new Sequelize('postgres://vrcgtvpn:3pA5iuLUCYwWRvHiZMOpPTY60de9j0BY@kesavan.db.elephantsql.com/vrcgtvpn')