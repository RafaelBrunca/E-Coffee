const usuarioModel = require('../../models/usuarios');
var { check } = require('express-validator');

const validacaoRegistro = [
    /* Checar Nome */
    check("name")
        .notEmpty()
        .withMessage("O nome do campo é obrigatório")
        .isLength({ min: 3 })
        .withMessage("O campo deve ter no mínimo 3 caracteres"),
    /* Checar Sobrenome */
    check("lastname")
        .notEmpty()
        .withMessage("O sobre nome é obrigatório")
        .isLength({ min: 3 })
        .withMessage("O campo deve ter no mínimo 3 caracteres"),
    /* Checar Telefone */
    check("telefone")
		.isLength({ min: 11, max: 11 })
		.withMessage("Preencha o telefone corretamente"),
    /* Checar CPF */
    check("cpf", "CPF é obrigatório")
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
        .isLength({ min: 6, max: 30})
        .withMessage("A senha precisa ter 6 caracteres ou mais"),
    check("confirmpassword")
        .isLength({ min: 6, max: 30 })
        .withMessage("A senha precisa ter 6 caracteres ou mais")
        .custom(async (confirmpassword, { req }) => {
            const senha = req.body.password;
            if(senha !== confirmpassword) {
                throw new Error("As senhas devem ser iguais!");
            }
        }),
];

module.exports = { validacaoRegistro };