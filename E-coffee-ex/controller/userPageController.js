const db = require('../database/models');

const bcrypt = require('bcryptjs');
const { ExpectationFailed } = require('http-errors');

const homeUserController = {
    index: function(req, res) {
        res.render('homeUser');
    },
    rastreio: function(req, res) {
        res.render('pedidosUser');
    },
    seguranca: function(req, res) {
        res.render('segurancaUser');
    },
    telaEditarInformacoes: function(req, res) {
        res.render("editarUsuario");
    },
    editarPerfil: async function(req, res) {
        
        const { name, lastname, telefone, cpf, email, password } = req.body;
        
        const senhaCriptografada = bcrypt.hashSync(password, 12);

        const alterarUsuario = await db.Cliente.update({ 
            nome: name,
            sobrenome: lastname,
            telefone: telefone,
            cpf: cpf,
            email: email,
            password: senhaCriptografada,
        },{
            where: { id_cliente: req.session.user.id_cliente }
        }
        ).then((result) => { 
            req.session.user.nome = name;
            req.session.user.sobrenome = lastname;
            req.session.user.telefone = telefone;
            req.session.user.cpf = cpf;
            req.session.user.email = email;
            res.redirect('/paginadousuario/'+ req.session.user.id_cliente + '/seguranca')
        })
        .catch((err) => {
            console.log(err)
        });
    },

    // Criar, editar e excluir ENDEREÇOS //

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
            return res.redirect('/paginadousuario/' + req.session.user.id_cliente + '/enderecos');
        }).catch((err) => {
            console.log(err);
        });
    },
    telaEditarEnderecos: async function(req, res) {
        const { id_cli_enderecos } = req.params;
        
        const editar = await db.Endereco.findByPk(id_cli_enderecos)

        .then((result) => 
        {return res.render('enderecoEditar', 
            { editarEndereco: result})})
        .catch((err) => 
            {console.log(err)});
    },

    editarEnderecos: async function(req,res) {
        const editaEndereco = await db.Endereco.update({
            nome_do_endereco: req.body.apelido,
            logradouro: req.body.rua,
            cep: req.body.cep,
            num_residencia: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            uf: req.body.estado,
            complemento: req.body.complemento,
            },{
                where: { id_cli_enderecos: req.params.id_cli_enderecos }
            }
        ).then((result) => {
            return res.redirect('/paginadousuario/' + req.session.user.id_cliente + '/enderecos');
        }).catch((err) => {
            console.log(err)
        })
    },
    excluir: async function(req, res) {
        await db.Endereco.destroy({ where: { id_cli_enderecos: req.params.id_cli_enderecos } });
        return res.redirect('/paginadousuario/' + req.session.user.id_cliente + '/enderecos');
    },

    // Criar, editar e excluir  PRODUTOS //

    produtos: async function(req, res) {
        const produtos = await db.produtos.findAll( {where: { cliente: req.session.user.id_cliente } })
        req.session.user.produtos = produtos;
        res.render('produtosUser', {
            produtos: produtos,
        });
    },

    telaCriarProduto: function(req, res) {
        res.render('produtoCriar');
    },

    registrarProduto: async function(req, res) {
        
        const { nomeproduto, idcategoria, informacoestecnicasproduto, precoproduto, descricaoproduto, codigobarraproduto } = req.body;

        const criarProduto = await db.Produto.create({
            nome_produto: nomeproduto,
            id_categoria: idcategoria,
            informacoes_tecnicas: informacoestecnicasproduto,
            produto_preco: precoproduto,
            descricao_produto: descricaoproduto,
            cod_barra_produto: codigobarraproduto
        }).then((result) => {
            return res.redirect('/paginadousuario' + req.session.user.id_produto + '/produtos');
        }).catch((err) => {
            console.log(err);
        })
    },

    telaEditarProduto: function(req, res) {
        const { id_produtos } = req.params;

        const editar = await db.Produto.findByPk(id_produtos)

        .then((result) => {
            return res.render('produtoEditar', { editarProduto: result})
        }).catch((err) => {
            console.log(err)
        });
    },
    
    editarProduto: async function(req, res) {
        const editaProduto = await db.Produto.update({
            nome_produto: req.body.nome,
            id_categoria: req.body.categoria,
            descricao_produto: req.body.descricao,
            informacoes_tecnicas: req.body.informacoes,
            produto_preco: req.body.preco,
            cod_barra_produto: req.body.codigobarra
        },{
            where: { id_produtos: req.params.id_produtos }
        }).then((result) => {
            return res.redirect('/paginadousuario/' + req.session.user.id_produto + ('/produtos'));
        }).catch((err) => {
            console.log(err)
        })
    },

    excluirProduto: async function(req, res) {
        await db.Produto.destroy({ where: { id_produtos: req.params.id_produtos } });
        return res.redirect('/paginadousuario/' + req.session.user.id_produto + '/produtos');
    },
}

module.exports = homeUserController;