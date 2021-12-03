const db = require('../database/models');

const indexController = {
    index: async function(req, res){

        //Tras Cafeteiras do banco

        const cafeteiras = await db.Produto.findAll({
            where: { categoria: "Cafeteira"},
            limit: 3
        });

        // Tras cápsulas do banco

        const capsulas = await db.Produto.findAll({
            where: { categoria: "Cápsula"},
            limit: 3
        });

        res.render('index', { 
            cafeteiras: cafeteiras, 
            capsulas: capsulas
        });
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