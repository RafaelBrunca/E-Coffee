const nodemailer = require('nodemailer');
const { getMaxListeners } = require('./app');
const { index } = require('./controller/indexController');
const SMTP_CONFIG = require('./database/config/smtp');
const { port } = require('./database/config/smtp');

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false,
    },
});

async function run() {
    const mailSent = transporter.sendMail({ /* obs: Isso se trata de uma promise */
        text: "Se você leu esse email é porque deu certo!",
        subject: "Email Teste",
        from: "ecoffe.teste@gmail.com",
        to: ['rafael.brunca@gmail.com']
    }).then(info => {
        res.send(info)
    }).catch(error => {
        res.send(error)
    });
    console.log(mailSent);
}

run();

module.exports = index;