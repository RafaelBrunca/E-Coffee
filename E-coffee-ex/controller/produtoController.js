const db = require('../database/models');

const produtoController = {
    detalhes: async function(req, res) {

        const { id } = req.params;

        const product = await db.Produto.findByPk(id)
        .then((result) =>{ 
            return res.render('produtoSelecionado', { produto: result }) 
        })        
    },
    cafeteiras: function(req, res) {

        /* Busca todas as Cafeteiras Habilitadas no sistema */

        const cafeteiras = db.Produto.findAll({ 
            where: { 
                status_produto: "Habilitado", 
                categoria: "Cafeteira"
            }
        })
        .then((cafeteiras) => {
            return res.render('marcaSelecionada', { 
                cafeteiras: cafeteiras,
                capsulas: false
            });
        })
    },
    capsulas: function(req, res) {

        /* Busca todas as Cápsulas Habilitadas no sistema */

        const capsulas = db.Produto.findAll({ 
            where: { 
                status_produto: "Habilitado", 
                categoria: "Cápsula"
            }
        })
        .then((capsulas) => {
            return res.render('marcaSelecionada', { 
                capsula: capsulas,
                capsulas: true
            });
        })
    }
};

module.exports = produtoController;