const db = require('../database/models');

const carrinhoController = {
    carrinho: async function(req, res){

        const cliente = req.session.user.id_cliente;

        let produtosEncontrados = [];

        const buscaCarrinho = await db.Carrinho.findAll({
            where: {id_cliente: cliente},
            include: { model: db.Produto, association: "produto"}
        })
        .then((result) => {
            result.forEach((item) => {
                produtosEncontrados.push({...item.dataValues,...item.produto})
            });

            return res.render('carrinho', {
                produtos: produtosEncontrados
            });
        })
        .catch((err) => {
            console.error(err);
        })
    },
    adicionarNoCarrinho: async function (req, res) {

        const { id_produto } = req.params;
        const id_cliente = req.session.user.id_cliente;
        const quantidade = 1;

        await db.Carrinho.create({
            id_produto: id_produto,
            quantidade: quantidade,
            id_cliente: id_cliente

        }).then((result) => {
            res.redirect('/carrinho');
        }).catch((err) => {
            console.log(err);
        });
    },

    removerProdutoCarrinho: async function(req, res) {
        const id = req.params.id_produto;
        const user = req.session.user.id_cliente;

        await db.Carrinho.destroy({
            where: { id_cliente: user, id_produto: id }
        })
        res.redirect('/carrinho');
    },

    limparCarrinho: async function(req, res) {
        const user = req.session.user.id_cliente;

        await db.Carrinho.destroy({
            where: { id_cliente: user}
        })
        res.redirect('/carrinho');
    }
}

module.exports = carrinhoController;