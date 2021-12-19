const db = require('../../database/models');

/* Validador de CPF */
const CPF = require('cpf');
var { check } = require('express-validator');

const validacaoRegistro = [
    check("name")
        .notEmpty()
        .withMessage("O nome do campo é obrigatório")
        .isLength({ min: 3 })
        .withMessage("O campo deve ter no mínimo 3 caracteres"),
    check("lastname")
        .notEmpty()
        .withMessage("O sobrenome é obrigatório")
        .isLength({ min: 3 })
        .withMessage("O campo deve ter no mínimo 3 caracteres"),
    check("telefone")
		.isLength({ min: 11, max: 11 })
		.withMessage("Preencha o telefone corretamente"),
    check("cpf", "CPF é obrigatório")
        .isNumeric()
        .notEmpty()
        .custom( async (cpfBody) => {
            const formatCpf = await CPF.format(cpfBody);
            const validaCpf = CPF.isValid(formatCpf);

            const procuraCpf = db.Cliente.findOne({
                where: {cpf: cpfBody}
            });

            if(procuraCpf.cpf){
                return Promise.reject("Tente outro CPF");
            }
        })
        .withMessage("Digite um CPF válido!"),
    check("email").custom( async (emailBody) => {
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