const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function run() {
  const mailSent = await transporter.sendMail({
    text: "Texto do E-mail",
    subject: "Assunto do e-mail",
    from: "Victor Moraes <victormoraesgs@gmail.com",
    to: ["victormoraesgs@gmail.com", "victormoraesgs@hotmail.com"],
    html: `
    <html>
    <body>
      <strong>Conteúdo HTML</strong></br>Do E-mail
    </body>
  </html> 
    `,
  });

  console.log(mailSent);
}

run();
