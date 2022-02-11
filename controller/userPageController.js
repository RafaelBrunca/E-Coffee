const db = require('../database/models');

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const homeUserController = {
    index: function(req, res) {
        res.render('homeUser');
    },

    pedidosRealizados: async function(req, res) {

        const cliente = req.session.user.id_cliente;

        let produtos = [];

        await db.Pedido.findAll({
            where: { id_cliente: cliente },
            include: { model: db.Produto, as: "produtoPedido" },
            order: [ [ 'data_pedido', 'DESC' ] ]
        }).then((itens) => {

            itens.forEach((produto) => {
                produtos.push({...produto.dataValues,...produto.produtoPedido});
            });
            
            res.render('pedidosUser', {
                pedidos: produtos
            });
        })
    },

    seguranca: function(req, res) {
        res.render('segurancaUser');
    },
    telaEditarInformacoes: function(req, res) {
        res.render("editarUsuario", { 
            errors: [],
            old: []
        });
    },
    editarPerfil: async function(req, res) {
        
        const { name, lastname, telefone, cpf, email, password } = req.body;

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.render('editarUsuario', {
                errors: errors.mapped(),
                old: req.body
            });
        } else {
            if(!password){
                let updateUsuer = db.Cliente.update({
                    nome: name,
                    sobrenome: lastname,
                    telefone: telefone,
                    cpf: cpf,
                    email: email
                },{
                    where: { id_cliente: req.session.user.id_cliente }
                }
                ) 
                req.session.user.nome = name;
                req.session.user.sobrenome = lastname;
                req.session.user.telefone = telefone;
                req.session.user.cpf = cpf;
                req.session.user.email = email;
                return res.redirect('/paginadousuario/seguranca')
            };

            const senhaCriptografada = await bcrypt.hashSync(password, 12);

            let updateUser = await db.Cliente.update({ 
                nome: name,
                sobrenome: lastname,
                telefone: telefone,
                cpf: cpf,
                email: email,
                senha: senhaCriptografada
            },{
                where: { id_cliente: req.session.user.id_cliente }
            }
            ).then((result) => { 
                req.session.user.nome = name;
                req.session.user.sobrenome = lastname;
                req.session.user.telefone = telefone;
                req.session.user.cpf = cpf;
                req.session.user.email = email;
                res.redirect('/paginadousuario/seguranca')
            })
            .catch((err) => {
                console.log(err)
            });
        };
    },
    enderecos: async function(req, res) {
        const enderecos = await db.Endereco.findAll( {where: { cliente: req.session.user.id_cliente } })
        req.session.user.enderecos = enderecos;
        res.render('enderecosUser', {
            enderecos: enderecos,
        });
    },
    telaCriarEndereco: function(req, res) {
        res.render('enderecoCriar');
    },
    registrarEndereco: async function(req, res) {

        const { apelidodoendereco, rua, cep, numero, bairro, cidade, estado, complemento } = req.body;

        const criarEndereco = await  db.Endereco.create({
            nome_do_endereco: apelidodoendereco,
            logradouro: rua,
            cep: cep,
            num_residencia: numero,
            bairro: bairro,
            cidade: cidade,
            uf: estado,
            complemento: complemento,
            cliente: req.session.user.id_cliente
        }).then((result) => {
            return res.redirect('/paginadousuario/enderecos');
        }).catch((err) => {
            console.log(err);
        });
    },
    telaEditarEnderecos: function(req, res) {
        const { id_endereco } = req.params;
        
        db.Endereco.findByPk(id_endereco)
        .then((result) => 
        {return res.render('enderecoEditar', { 
            editarEndereco: result })
        })
        .catch((err) => 
            {console.log(err)});
    },

    editarEnderecos: async function(req,res) {
        const { apelido, rua, cep, numero, bairro, cidade, estado, complemento } = req.body;

        const editaEndereco = await db.Endereco.update({
            nome_do_endereco: apelido,
            logradouro: rua,
            cep: cep,
            num_residencia: numero,
            bairro: bairro,
            cidade: cidade,
            uf: estado,
            complemento: complemento,
        },{
            where: { id_cli_enderecos: req.params.id_endereco }
        }
        ).then((result) => {
            return res.redirect('/paginadousuario/enderecos');
        }).catch((err) => {
            console.log(err)
        })
    },
    excluir: async function(req, res) {
        await db.Endereco.destroy({ where: { id_cli_enderecos: req.params.id_endereco } });
        return res.redirect('/paginadousuario/enderecos');
    }
}

module.exports = homeUserController;