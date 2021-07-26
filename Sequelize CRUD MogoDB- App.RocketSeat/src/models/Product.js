const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const ProductSchema = new mongoose.Schema({
	titleGame: {
		type: String,
		required: true,
	},
	gamePlatform: {
		type: String,
		required: true,
	},
	gameType: {
		type: String,
		required: true,
	},
	gameMetacritic: {
		type: Number,
		required: true,
	},
    gameWantToPlay: {
    	type: Number,
    	required: true,
    },
    gameFinalized: {
    	type: Number,
    	required: true,
    },
    gameRecommend: {
    	type: Number,
    	required: true,
    },
    gameNotRecommended: {
    	type: Number,
    	required: true,
    },
    gameUrlImage: {
    	type: String,
    	required: true
    },
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

/**
{
	"titleGame": "God Of War 2018",
	"gamePlatform": "Exclusive PS4",
	"gameType": "Ação e Aventura",
	"gameMetacritic": 9.5,
	"gameWantToPlay": 45,
	"gameFinalized": 32,
	"gameRecommend": 108,
	"gameNotRecommended": 14,
	"gameUrlImage": "https://media.playstation.com/is/image/SCEA/god-of-war-box-art-01-ps4-us-27mar18?$native_nt$"
}
**/

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);