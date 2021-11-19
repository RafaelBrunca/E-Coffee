const db = require('../database/models');

const produtoController = {
    detalhes: async function(req, res) {
        const product = await db.Produto.findByPK()
    }
}

module.exports = produtoController;