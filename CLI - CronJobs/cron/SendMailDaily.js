const cron = require('node-cron')

function SendMailDaily() {
    console.log("Enviar o email diariamente")
}

module.exports = cron.schedule('*/1 * * * *', SendMailDaily, {
    scheduled: false
})