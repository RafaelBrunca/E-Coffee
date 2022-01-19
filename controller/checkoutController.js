const db = require('../database/models');

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
                endereco: data
            });
        })    
    }
};

module.exports = checkout;