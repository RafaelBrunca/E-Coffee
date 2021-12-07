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
    cafeteiras: function (req, res) {

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
                    cafeteira: true,
                    capsulas: false,
                    marcaSelecionada: false
                });
            })
    },
    capsulas: function (req, res) {

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
                    cafeteira: false,
                    capsulas: true,
                    marcaSelecionada: false
                });
            })
    },
    marcasCafeteiras: function (req, res) {

        //Recupera marca da URL
        const { marca } = req.params;

        const query = `%${marca}%`;

        //Busca marca selecionada
        const buscarMarca = db.Produto.findAll({
            where: {
                nome_produto: { [Op.like]: query },
                categoria: "Cafeteira"
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
        //Recupera marca da URL
        const { marca } = req.params;

        const query = `%${marca}%`;

        //Busca marca selecionada
        const buscarMarca = db.Produto.findAll({
            where: {
                nome_produto: { [Op.like]: query },
                categoria: "Cápsula"
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
    produto: async function (req, res) {

        const { id_produto } = req.params;
        const id_cliente = req.session.user.id_cliente;
        const quantidade = 1;

        await db.Carrinho.create({
            id_produto: id_produto,
            quantidade: quantidade,
            id_cliente: id_cliente

        }).then((result) => {

            //Busca todos os itens do carrinho
            const resultadoCarrinho = db.Carrinho.findAll({
                where: {
                    id_cliente: id_cliente
                }
            }).then((resultadoCarrinho) => {
                console.log(resultadoCarrinho)
                res.render("carrinho", { resultadoCarrinho });
            })

            
        }).catch((err) => {
            console.log(err);
        });

    }
};

module.exports = produtoController;