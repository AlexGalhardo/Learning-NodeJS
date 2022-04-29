/**
 * LEARNING API ENDPOINTS TESTS WITH JEST AND SUPERTEST
 * 
 * ./app.js
 */

require('express-async-errors');
const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const cors = require('cors')
const apiRoutes = require('./api_routes')

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', apiRoutes);

app.use((req, res) => {
    return res.status(404).json({ status: "ERROR", about: 'Endpoint not found!' });
});

app.use((err, req, res, next) => {
    return res.status(500).json({
        status: "ERROR",
        name: err.name,
        message: err.message
    })
});

module.exports = app;

