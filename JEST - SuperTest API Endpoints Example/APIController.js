class APIController {
    
    static async testEndpoint(req, res){
        return res.json({status: 'endpoints working!'})
    }

    static async getNames(req, res){
        return res.json({
            names: ['alex', 'paulo', 'maria', 'ana']
        })
    }

    static async postName(req, res){
        const { name } = req.body
        return res.json({
            status: 'success',
            about: 'created name!'
        })
    }

    static async putName(req, res){
        const { id } = req.params
        return res.json({
            status: 'success',
            about: 'updated name!'
        })
    }

    static async deleteName(req, res){
        const { id } = req.body
        return res.json({
            status: 'success',
            about: 'deleted name!'
        })
    }

    static async deleteRule(req, res){
        const {rule_type, rule_id} = req.body
        return res.json({
            status: "DELETED RULE!",
            rule_type,
            rule_id
        })
    }
}

module.exports = APIController