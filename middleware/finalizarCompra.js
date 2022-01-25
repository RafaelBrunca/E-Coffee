const db = require('../database/models');

async function finalizarCompra(req, res, next){
    const cliente = req.session.user.id_cliente;

    const buscaCarrinho = await db.Carrinho.findAll({
        where: {id_cliente: cliente},
        include: { model: db.Produto, association: "produto"}
    })

    if(!buscaCarrinho.length){
        return res.redirect('/');
    };

    next();
};

module.exports = finalizarCompra;