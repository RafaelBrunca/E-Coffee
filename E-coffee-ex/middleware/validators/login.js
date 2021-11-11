const db = require('../../database/models');

const CPF = require('cpf');
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
        .custom( async (cpfBody) => {
            const formatCpf = await CPF.format(cpfBody);
            const validaCpf = CPF.isValid(formatCpf);

            if (!validaCpf) {
                return Promise.reject("Digite um CPF válido!");
            };
        }),
    /* Checar E-mail */
    check("email").custom( async (emailBody) => {
        /* Recupera e compara informações com o db */
		const procuraEmail = await db.Cliente.findOne({
            where: {email: emailBody}
        });
		if (!emailBody) {
			return Promise.reject("E-mail é obrigatório");
		};
		if (!procuraEmail) {
			return emailBody;
		};
		if (procuraEmail.email) {
			return Promise.reject("E-mail já cadastrado");
		};
	}),
    /* Checar Senha */
    check("password")
        .isLength({ min: 6, max: 100})
        .withMessage("A senha precisa ter 6 caracteres ou mais"),
    check("confirmpassword")
        .isLength({ min: 6, max: 100 })
        .withMessage("As senhas devem ser iguais!")
        .custom(async (confirmpassword, { req }) => {
            const senha = req.body.password;
            if(senha !== confirmpassword) {
                throw new Error("As senhas devem ser iguais!");
            }
        }),
];

module.exports = { validacaoRegistro };