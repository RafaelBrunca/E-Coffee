const carrinhoController = {
    carrinho: function(req, res){
        res.render('carrinho');
    },

    removerProdutoCarrinho: async function(req, res) {
        const id = req.params.id; 

        await db.Produto.destroy({
            where: { id_produto: id }
          })
          res.redirect('/carrinho')
    }
}

module.exports = carrinhoController;