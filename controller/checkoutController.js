const db = require('../database/models');
const moment = require('moment');

const checkout = {
    finalizarCompra: async function(req, res) {
        const cliente = req.session.user.id_cliente;
        
        let produtosEncontrados = [];

        const buscaCarrinho = await db.Carrinho.findAll({
            where: {id_cliente: cliente},
            include: { model: db.Produto, association: "produto"}
        })
        .then((result) => {
            result.forEach((item) => {  
                let valorTotal = {
                    total: item.quantidade*item.produto.preco
                };

                produtosEncontrados.push({...item.dataValues,...item.produto, ...valorTotal});
            });
        })
        .catch((err) => {
            console.error(err);
        })

        const endereco = await db.Endereco.findAll({
            where: {cliente: cliente},
        }).then((data) => {

            return res.render('finalizarCompra', {
                produtos: produtosEncontrados,
                endereco: data,
                erroEndereco: []
            });
        })    
    },

    confirmar: function(req, res) {

        const cliente = req.session.user.id_cliente;
        const enderecoSelecionado = req.body.enderecoSelecionado;

        db.Carrinho.findAll({
            where: { id_cliente: cliente },
            include: { model: db.Produto, association: "produto"}
        })
        .then(async function(result) {

            for(item of result){

                let valorTotal = item.quantidade*item.produto.preco;
                let quantidade = item.quantidade;

                const pedido = await db.Pedido.create({
                    id_cliente: cliente,
                    id_endereco: enderecoSelecionado,
                    id_produto: item.produto.id_produto,
                    quantidade: quantidade,
                    data_pedido: moment().format('L'),
                    preco_total: valorTotal
                }).then( async function (){
                    
                    // Primeiro subtrai quantidade pedida no total estoque
                    const subtraiEstoque = await db.Produto.findOne({
                        where: { id_produto: item.produto.id_produto }
                    })
                    .then((produto) => {

                        let novoEstoque = produto.estoque-quantidade;

                        db.Produto.update({
                            estoque: novoEstoque,
                        }, {
                            where: { id_produto: item.produto.id_produto }
                        })
                    })

                    // Segundo, limpa o carrinho do usuario
                    const limparCarrinho = await db.Carrinho.destroy({
                        where: {
                            id_cliente: cliente,
                            id_produto: item.produto.id_produto
                        }
                    });

                }).catch( (err) => {
                    console.error(err);
                })
            };

            return res.redirect('/');

        }).catch((err) => {
            console.log(err);
        })
    }
};

module.exports = checkout;