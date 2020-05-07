const sequelize = require('./../models/sequilize');
const Locations = sequelize.import('./../models/Locations');


module.exports = {
    async index(req, res) {
        const locations = await Locations.findAll();
        return res.status(200)
            .json(locations);
    },
    async store(req, res) {
        const locationRequest = req.body;
        const data = await Locations.create(locationRequest);

        return res.status(200)
            .json(data);            
    },

    async update(req, res) {
        const { id } = req.params;
        const locationRequest = req.body;
        // const data = await Locations.create(locationRequest);
        // const location = await Locations.findByPk(id);
        // location.alter(locationRequest);
        const locationResult = await Locations.update(
            locationRequest,
            {where: {
                id: id
            }});


        return res.status(200)
            .json({
                status : true,
                updatedAffectLines : locationRequest,
            });
    },

    async delete(req, res) {
        const { id } = req.params;
        
        const locationResult = await Locations.destroy({where: {id}});
        
        return res.status(200)
            .json({
                status : true,
                updatedAffectLines : locationResult,
            });
    },

    

    async get(req, res) {
        const { id } = req.params;
        const location = await Locations.findByPk(id);
        return res.status(200)
            .json(location);
    }
};