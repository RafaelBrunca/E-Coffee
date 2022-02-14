const db = require('../database/models');
const { Op } = require("sequelize");

const produtoController = {
    detalhes: async function (req, res) {

        const { id } = req.params;

        const product = await db.Produto.findByPk(id)
        .then((result) => {
            return res.render('produtoSelecionado', { produto: result })
        })
    },

    searchBarProduct: async function(req, res) {
        const { produto } = req.params;

        const query = `%${produto}%`;

        const buscarMarca = await db.Produto.findAll({
            where: {
                nome_produto: { [Op.like]: query },
                [Op.or]: [
                    {categoria: "Cafeteira"},
                    {categoria: "Cápsula"}    
                ],
                status_produto: "Habilitado"
            }
        });
        return res.render("marcaSelecionada", {
            marca: buscarMarca,
            capsulas: false,
            cafeteira: false,
            marcaSelecionada: true
        });
    },

    cafeteiras: function (req, res) {

        db.Produto.findAll({
            where: {
                status_produto: "Habilitado",
                categoria: "Cafeteira"
            }
        })
        .then((cafeteiras) => {
            return res.render('marcaSelecionada', {
                marca: cafeteiras,
                cafeteira: true,
                capsulas: false,
                marcaSelecionada: false
            })
        })
    },
    capsulas: function (req, res) {
        const capsulas = db.Produto.findAll({
            where: {
                status_produto: "Habilitado",
                categoria: "Cápsula"
            }
        })
        .then((capsulas) => {
            return res.render('marcaSelecionada', {
                marca: capsulas,
                cafeteira: false,
                capsulas: true,
                marcaSelecionada: false
            });
        })
    },
    marcasCafeteiras: function (req, res) {
        const { marca } = req.params;

        const query = `%${marca}%`;

        const buscarMarca = db.Produto.findAll({
            where: {
                nome_produto: { [Op.like]: query },
                categoria: "Cafeteira",
                status_produto: "Habilitado"
            }
        }).then((marca) => {
            return res.render("marcaSelecionada", {
                marca: marca,
                capsulas: false,
                cafeteira: false,
                marcaSelecionada: true
            });
        })
    },
    marcasCapsulas: function (req, res) {
        const { marca } = req.params;

        const query = `%${marca}%`;

        const buscarMarca = db.Produto.findAll({
            where: {
                nome_produto: { [Op.like]: query },
                categoria: "Cápsula",
                status_produto: "Habilitado"
            }
        }).then((marca) => {
            return res.render("marcaSelecionada", {
                marca: marca,
                capsulas: false,
                cafeteira: false,
                marcaSelecionada: true
            });
        })
    },
};

module.exports = produtoController;