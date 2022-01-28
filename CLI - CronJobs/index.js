const express = require('express');
const ManagerCron = require('./manager-cron')
const app = express()

app.listen(3333, () => {
    console.log('Running on port 3333')
    ManagerCron.run()
})