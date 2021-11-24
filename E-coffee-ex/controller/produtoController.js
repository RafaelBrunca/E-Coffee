const db = require('../database/models');

const produtoController = {
    detalhes: async function(req, res) {

        const { id } = req.params;

        const product = await db.Produto.findByPk(id)
        .then((result) =>{ return res.render('produtoSelecionado', { produto: result }) }).catch((err) =>{console.log(err)})

        
    }
}

module.exports = produtoController;