const nodemailer = require('nodemailer');
const { getMaxListeners } = require('./app');

const SMTP_CONFIG = require('./config/smtp');
const { port } = require('./database/config/smtp');

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: fase,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: fase,
    },
});

async function run() {
    const mailSent = transporter.sendMail({
        text: "Se você leu esse email é porque deu certo!",
        subject: "Email Teste",
        from: "ecoffe.teste@gmail.com",
        to: ['rafael.brunca@gmail.com', 'stormizinho.brunca@outlook.com']
    });
    console.log(mailSent);
}

run();