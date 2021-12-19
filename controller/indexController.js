const db = require('../database/models');

const indexController = {
    index: async function(req, res){

        const cafeteiras = await db.Produto.findAll({
            where: { categoria: "Cafeteira"},
            limit: 3
        });

        const capsulas = await db.Produto.findAll({
            where: { categoria: "Cápsula"},
            limit: 3
        });

        res.render('index', { 
            cafeteiras: cafeteiras, 
            capsulas: capsulas
        });
    },
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = indexController;