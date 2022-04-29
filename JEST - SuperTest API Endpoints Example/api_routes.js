const router = require('express').Router();

const APIController = require('./APIController')

router
	.get('/test', APIController.testEndpoint)

	.get('/names', APIController.getNames)

	.post('/name', APIController.postName)

	.put('/name/:id', APIController.putName)

	.delete('/name', APIController.deleteName)

	.delete('/rule', APIController.deleteRule)


module.exports = router;