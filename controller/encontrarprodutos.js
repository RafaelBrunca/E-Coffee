const db = require('../database/models');
const { Op } = require("sequelize");

const encontrarprodutos = {
    api: async function (req, res){
        
        const { produto } = req.params;
        
        let busca = [];
        const query = `%${produto}%`;
        let buscarItem = await db.Produto.findAll({
            limit: 3,
            where: {
                nome_produto: { [Op.like]: query },
                status_produto: "Habilitado"
            }
        });

        busca.push(buscarItem);

        res.status(200).json(busca);
    }
};

module.exports = encontrarprodutos;