/**
 * LEARNING API ENDPOINTS TESTS WITH JEST AND SUPERTEST
 * 
 * ./server.js
 */

const server = require('./app')

server.listen(process.env.PORT || 3333, (error) => {
    if(error) throw new Error(error)
    console.log(`Learning Tests running on port 3333`)
});