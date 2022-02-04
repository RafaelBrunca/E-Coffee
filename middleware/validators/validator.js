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
            const procuraCpf = await db.Cliente.findOne({
                where: {cpf: cpfBody}
            });

            if(procuraCpf){
                throw new Error("Tente outro CPF");
            };

            const formatCpf = CPF.format(cpfBody);
            const validaCpf = CPF.isValid(formatCpf);

            if(!validaCpf){
                throw new Error("Digite um CPF válido!");
            };
        }),
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

const validaUsuario = [
    check("name").notEmpty().withMessage("Informe seu nome").isLength({ min: 3 }).withMessage("Informe seu nome"),
    check("lastname").notEmpty().withMessage("Informe seu sobrenome").isLength({ min: 3 }).withMessage("Informe seu sobrenome"),
    check("telefone").notEmpty().withMessage("digite um numero de telefone"),
    check("cpf", "CPF é obrigatório!").isNumeric().notEmpty().withMessage("CPF é obrigatório")
    .custom((cpfBody) => {
        const formatCpf = CPF.format(cpfBody);
        const validaCpf = CPF.isValid(formatCpf);

        if(!validaCpf){
            throw new Error("Digite um CPF válido!");
        }
    }),
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
	}),
    check("password")
        .isLength({ max: 100}),
    check("confirmpassword")
        .isLength({ max: 100 })
        .withMessage("As senhas devem ser iguais!")
        .custom(async (confirmpassword, { req }) => {
            const senha = req.body.password;
            if(senha !== confirmpassword) {
                throw new Error("As senhas devem ser iguais!");
            }
        }),
];

const validacaoProduto = [
    check("nomeproduto").notEmpty().withMessage('Digite o nome do produto'),

    check("sku").notEmpty().withMessage('Digite o SKU do produto'),

    check("codigobarras").notEmpty().withMessage('Digite o código de barras do produto').isNumeric().withMessage('somente números são aceitos'),

    check("descricao").notEmpty().withMessage('Digite a descrição do produto'),

    check("infotecnica").notEmpty().withMessage('Digite as informações técnicas do produto'),

    check("peso").notEmpty().withMessage('Digite o peso do produto').isNumeric().withMessage('somente números são aceitos'),

    check("preco").notEmpty().withMessage('Digite o preço do produto').isNumeric().withMessage('somente números são aceitos'),

    check("custo").notEmpty().withMessage('Digite o custo do produto').isNumeric().withMessage('somente números são aceitos'),

    check("titulo").notEmpty().withMessage('Digite titulo do produto'),

    check("palavrachave").notEmpty().withMessage('Digite palavras chave do produto'),

    check("estoque").notEmpty().withMessage('Digite a quantidade do produto').isNumeric().withMessage('somente números são aceitos')
];

module.exports = { validacaoRegistro, validaUsuario, validacaoProduto };