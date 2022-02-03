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
    const mandarEmail = transporter.sendMail({ /* obs: Isso se trata de uma promise, logo, precisa de um ".then" e um ".catch" */
        text: "Obrigado " + nomeEmail + " por se cadastrar",
        subject: "Cadastro de um novo Email",
        from: "ecoffe.teste@gmail.com",
        to: ['/']
    }).then(info => {
        res.send(info)
    }).catch(error => {
        res.send(error)
    });
    console.log(mandarEmail);
}

run();

module.exports = index;