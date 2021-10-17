const usuarioModel = require('../../models/usuarios');
var { check } = require('express-validator');

const validacaoRegistro = [
    /* Checar Nome */
    check("name")
    .trim()
    .notEmpty()
    .withMessage("O nome do campo é obrigatório")
    .isLength({ min: 3 })
    .withMessage("O campo deve ter no mínimo 3 caracteres"),
    /* Checar Sobrenome */
    check("lastname")
    .trim()
    .notEmpty()
    .withMessage("O sobre nome é obrigatório")
    .isLength({ min: 3 })
    .withMessage("O campo deve ter no mínimo 3 caracteres"),
     /* Checar CPF */
    check("cpf", "CPF é obrigatório")
    .trim()
    .isNumeric()
    .notEmpty()
    .isLength({ min: 11, max: 11 })
    .withMessage("Um CPF valido é obrigatório"),
    /* Checar E-mail */
    check("email").custom((emailBody) => {
		const procuraEmail = usuarioModel.find(
			(email) => email.email == emailBody
		);
		if (!emailBody) {
			return Promise.reject("E-mail é obrigatório");
		}
		if (!procuraEmail) {
			return emailBody;
		}
		if (procuraEmail.email) {
			return Promise.reject("E-mail já cadastrado");
		}
	}),
    /* Checar Senha */
    check("password")
    .trim()
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("A senha precisa ter 6 caracteres ou mais"),
    check("corfirmpassword")
    .trim()
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("A senha precisa ter 6 caracteres ou mais"),
];
const validacaoLogin = [
    check("email", "Um E-mail é obrigatório")
    .trim()
    .notEmpty(),
    check("password", "A senha é obrigatória")
    .trim()
    .notEmpty()
];

module.exports = {
    validacaoRegistro,
    validacaoLogin
};