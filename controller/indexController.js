const { token } = require('morgan');
const db = require('../database/models');

const indexController = {
    index: async function(req, res){

        const cafeteiras = await db.Produto.findAll({
            where: 
            {   
                categoria: "Cafeteira",
                status_produto: "Habilitado"
            },
            limit: 3
        });

        const capsulas = await db.Produto.findAll({
            where: 
            { 
                categoria: "Cápsula",
                status_produto: "Habilitado"
            },
            limit: 3
        });

        res.render('index', { 
            cafeteiras: cafeteiras, 
            capsulas: capsulas
        });
    },
    sobre: function(req, res){
        res.render('sobre');
    },
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/')
    },
    token: function(req, res){
        res.render('token',{
            erro: ""
          });
    },
}

module.exports = indexController;