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

        const cafeteiras = db.Produto.findAll({ 
            where: { categoria: "Cafeteira" }
        })
        .then((cafeteiras) => {
            return res.render('marcaSelecionada', { 
                cafeteiras: cafeteiras,
                capsulas: false
            });
        })

        
    }
}

module.exports = produtoController;