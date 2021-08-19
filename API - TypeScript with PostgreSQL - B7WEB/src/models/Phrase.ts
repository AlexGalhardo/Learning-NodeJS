import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../instances/pg';

export interface PhraseInstance extends Model {
	id: number;
	author: string;
	txt: string;
}

export const Phrase = sequelize.define<PhraseInstance>('Phrase', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		type: DataTypes.INTEGER
	},
	author: {
		type: DataTypes.STRING
	},
	txt: {
		type: DataTypes.STRING
	}
}, {
	tableName: 'phrases',
	timestamps: false
});