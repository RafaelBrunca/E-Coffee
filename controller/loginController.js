const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { body } = require('express-validator');

const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('../database/config/smtp');

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

const loginController = {
  login: async function (req, res) {

    const { email, password } = req.body;
    
    const user = await db.Cliente.findOne({ where: { email: email } })

    if (!user) {
      return res.render('cadastro', {
        old: [],
        message: "E-mail ou senha inválidos"
      });
    };

    if (user.token !== null) {
      return res.render('cadastro', {
        old: [],
        message: "Token ainda não validado!"
      });
    };  

    if (!await bcrypt.compare(password, user.senha)) {
      return res.render('cadastro', {
        old: [],
        message: "E-mail ou senha inválidos"
      });
    };

    req.session.user = user;

    return res.redirect('/');
  },
  cadastro: function (req, res) {
    res.render('cadastro', {
      old: [],
      message: []
    });
  },
  create: async function (req, res) {

    const senhaCriptografada = bcrypt.hashSync(req.body.password, 12);

    const erro = validationResult(req);

    if (!erro.isEmpty()) {
      res.render('cadastro', {
        erro: erro.mapped(),
        old: req.body,
        message: []
      });
    } else {

      const { name, lastname, telefone, cpf, email } = req.body;

      let r = Math.random().toString(36).substr(2, 3) + "-" + Math.random().toString(36).substr(2, 3) + "-" + Math.random().toString(36).substr(2, 4);

      await db.Cliente.create({
        nome: name,
        sobrenome: lastname,
        telefone: telefone,
        cpf: cpf,
        email: email,
        senha: senhaCriptografada,
        token: r.toUpperCase()

      }).then((result) => {

        const mailSent = transporter.sendMail({
          text: "Obrigado por se cadastrar insira o token no link abaixo para a confirmação da conta",
          subject: "Confirmação de cadastro E-Coffee",
          from: "ecoffe.teste@gmail.com",
          to: [email],
          html: `
        <html>
            <body>
                <strong>Seu Token é: `+ r.toUpperCase() + `</strong> <br></br>
                <strong>•<a href="http://localhost:3000/token">Confirme seu TOKEN</a></strong>
            </body>
        </html>
        `,
        }).then(info => {
          res.send(info)
        }).catch(error => {
          res.send(error)
        });
      }).catch((err) => {
        console.log(err);
      });

      return res.redirect('/token');
    }
  },

  confirm: async function (req, res) {

    const { token } = req.body;

    const tokendb = await db.Cliente.findOne({ where: { token: token } })

    if (tokendb == null) {
      return res.render('token', {
        erro: "O Token informado está incorreto!"
      });
    } else {
      
      let updateCliente = db.Cliente.update({
        token: null,
      }, {
        where: { token: token }
      }
      )

      return res.redirect('/');
    }

  }
};

module.exports = loginController;