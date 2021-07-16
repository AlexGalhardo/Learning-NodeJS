module.exports = function(to, subject, text){
    const nodemailer = require('nodemailer');

    const smtpTransport = nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: parseInt(process.env.SMTP_PORT),
        secure: false,
        auth: {user: process.env.SMTP_USERNAME, pass: process.env.SMTP_PASSWORD}
    });

    const message = {
        from: process.env.SMTP_USERNAME,
        to,
        subject,
        text
    }

    smtpTransport.sendMail(message, (err, res) => {
        if(err)
            console.log('Erro ao enviar email: ' + err);
        else
            console.log('Email enviado com sucesso!');
        smtpTransport.close();
    })
}