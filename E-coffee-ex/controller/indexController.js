const db = require('../database/models');

const indexController = {
    index: async function(req, res){

        const listar = await db.Produto.findAll({
            limit: 3
        });

        res.render('index', { produtos: listar});
    },
    produtos: function(req, res) {
        res.render('marcaSelecionada');
    },
    carrinho: function(req, res) {
        res.render('carrinho');
    },
    produtoSelecionado: function (req, res) {
        res.render('produtoSelecionado');
    },
    
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = indexController;