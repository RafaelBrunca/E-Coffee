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
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = indexController;