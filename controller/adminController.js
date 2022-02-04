const db = require('../database/models');

const bcrypt = require('bcryptjs');
<<<<<<< HEAD
=======
const { validationResult } = require('express-validator');
>>>>>>> bda186a66cb763ec4020ddbf072799859b52a595

const adminController = {
  telaLogin: function(req, res) {
   res.render('admin/login', { error: undefined });
  },
  login: async function(req, res) {

    const { usuario, senha } = req.body;
    
    const user = await db.Usuario.findOne({ where: { usuario: usuario} });
    
    if (!user) {
      return res.render('admin/login', { error: "Usuário ou senha incorretos!"});
    };
    
    if(!await bcrypt.compare(senha, user.senha)) {
      return res.render('admin/login', { error: "Usuário ou senha incorretos!"});
    };

    req.session.admin = user;
    
    res.redirect('/admin/painel');
  },

  painel: function(req, res) {
    res.render('admin/painel');
  },

  gerenciarProdutos: function(req, res) {

    db.Produto.findAll()
    .then((result) => { 
      return res.render('admin/gerenciarProdutos', { produtos: result }); 
    })
    .catch((err) => { console.log(err) });
  },

  telaAdicionar: function(req, res) {
    return res.render('admin/adicionarProduto', { 
<<<<<<< HEAD
      isEditing: false
=======
      isEditing: false,
      error: [],
      old: []
>>>>>>> bda186a66cb763ec4020ddbf072799859b52a595
    });
  },

  adicionarProduto: async function(req, res) {

<<<<<<< HEAD
    const { nomeproduto, sku, codigobarras, status, categoria, descricao, infotecnica, peso, preco, custo, titulo, palavrachave, estoque } = req.body;
    
    let imagem = "images/uploads/imagemDoProduto/"+req.file.filename;
    
    const criarProduto = await db.Produto.create({
      nome_produto: nomeproduto,
      sku: sku,
      cod_barra: codigobarras,
      status_produto: status,
      categoria: categoria,
      descricao_produto: descricao,
      informacoes_tecnicas: infotecnica,
      peso: peso,
      preco: preco,
      custo: custo,
      title_pagina: titulo,
      palavras_chave: palavrachave,
      imagem: imagem,
      estoque: estoque,

    });

    return res.redirect('/admin/gerenciamentodeprodutos');
=======
    const error = validationResult(req);

    if(!error.isEmpty()) {
      return res.render('admin/adicionarProduto',{
        error: error.mapped(),
        old: req.body,
        isEditing: false
      });
    } else {
      
      const { nomeproduto, sku, codigobarras, status, categoria, descricao, infotecnica, peso, preco, custo, titulo, palavrachave, estoque } = req.body;
    
      let imagem = "images/uploads/imagemDoProduto/"+req.file.filename;
      
      const criarProduto = await db.Produto.create({
        nome_produto: nomeproduto,
        sku: sku,
        cod_barra: codigobarras,
        status_produto: status,
        categoria: categoria,
        descricao_produto: descricao,
        informacoes_tecnicas: infotecnica,
        peso: peso,
        preco: preco,
        custo: custo,
        title_pagina: titulo,
        palavras_chave: palavrachave,
        imagem: imagem,
        estoque: estoque,

      });

      return res.redirect('/admin/gerenciamentodeprodutos');
    };
>>>>>>> bda186a66cb763ec4020ddbf072799859b52a595
  },
  telaEditar: async function(req, res) {
    const id = req.params.id;
    const informacoes = await db.Produto.findByPk(id)
    .then((result) => {
      return res.render('admin/adicionarProduto', {
        id: id,
        produto: result,
        isEditing: true
      });
    });
  },
  editarProduto: async function(req, res) {

    const { id } = req.params;
<<<<<<< HEAD

    const { nomeproduto, sku, codigobarras, status, categoria, descricao, infotecnica, peso, preco, custo, titulo, palavrachave, imagem, estoque } = req.body;
    let image;
    if(req.file){
      image = "images/uploads/imagemDoProduto/"+req.file.filename;
=======
    let imagem = undefined;

    const { nomeproduto, sku, codigobarras, status, categoria, descricao, infotecnica, peso, preco, custo, titulo, palavrachave, estoque } = req.body;
    
    if(req.file){
      imagem = "images/uploads/imagemDoProduto/"+req.file.filename;
>>>>>>> bda186a66cb763ec4020ddbf072799859b52a595
    };

    const buscarProduto = await db.Produto.findByPk(id);

    const editar = {
      nome_produto: nomeproduto,
      sku: sku,
      cod_barra: codigobarras,
      status_produto: status,
      categoria: categoria,
      descricao_produto: descricao,
      informacoes_tecnicas: infotecnica,
      peso: peso,
      preco: preco,
      custo: custo,
      title_pagina: titulo,
      palavras_chave: palavrachave,
      imagem: imagem,
      estoque: estoque
    };
    buscarProduto.update(editar);

    return res.redirect('/admin/gerenciamentodeprodutos');
  },
  removerProduto: async function(req, res) {
    const id = req.params.id;

    await db.Produto.destroy({
      where: { id_produto: id }
    })
    return res.redirect('/admin/gerenciamentodeprodutos')
  }
};

module.exports = adminController;