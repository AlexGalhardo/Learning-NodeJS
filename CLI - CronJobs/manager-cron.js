const SendMailDaily = require("./cron/SendMailDaily");

class ManagerCron {
    constructor() {
        this.jobs = [SendMailDaily]
    }

    run() {
        this.jobs.forEach(job => job.start())
    }
}

module.exports = new ManagerCron()