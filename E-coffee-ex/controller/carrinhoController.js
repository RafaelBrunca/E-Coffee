const db = require('../database/models');

const { validationResult } = require('express-validator');


const carrinhoController = {
    adicionar: async function (req, res) {

        const { idProduto } = req.body;
        
        console.log(idProduto);

        res.render('carrinho');
    }

}

module.exports = carrinhoController;