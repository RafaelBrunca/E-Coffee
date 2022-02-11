const db = require('../database/models');

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

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

  gerenciarClientes: function(req, res) {

    db.Cliente.findAll()
    .then((clients) => {
      res.render('admin/gerenciarClientes', { 
        cliente: clients
      });
    })
    .catch((err) => {
      console.error(err);
    })
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
      isEditing: false,
      error: [],
      old: []
    });
  },

  adicionarProduto: async function(req, res) {

    const error = validationResult(req);

    if(!error.isEmpty()) {
      return res.render('admin/adicionarProduto',{
        error: error.mapped(),
        old: req.body,
        isEditing: false
      });
    } else {
      
      const { nomeproduto, sku, codigobarras, status, categoria, descricao, infotecnica, peso, preco, custo, titulo, palavrachave, estoque } = req.body;

      let nomeImg = [];
      Array(req.files).forEach((item) => {

        for(img in item){
          item[img].forEach((nome) => {

            nomeImg.push(nome.filename);

          });
        };
      });

      let imagem = "images/uploads/imagemDoProduto/"+nomeImg[0];
      let miniaturaUm = "images/uploads/imagemDoProduto/"+nomeImg[1];
      let miniaturaDois = "images/uploads/imagemDoProduto/"+nomeImg[2];
      
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
        estoque: estoque,
        imagem: imagem,
        miniaturaUm: miniaturaUm,
        miniaturaDois: miniaturaDois
      });

      return res.redirect('/admin/gerenciamentodeprodutos');
    };
  },
  telaEditar: async function(req, res) {
    const id = req.params.id;
    const informacoes = await db.Produto.findByPk(id)
    .then((result) => {
      return res.render('admin/adicionarProduto', {
        id: id,
        produto: result,
        error: [],
        isEditing: true
      });
    });
  },
  editarProduto: async function(req, res) {

    const error = validationResult(req);

    const { id } = req.params;
    const informacoes = await db.Produto.findByPk(id);

    if(!error.isEmpty()){
      res.render('admin/adicionarProduto', {
        id: id,
        produto: informacoes,
        error: error.mapped(),
        old: req.body,
        isEditing: true
      });
    } else { 

      let imagem = true;
      let miniaturaUm = true;
      let miniaturaDois = false;
      let filtrarCampoVazio = [];
  
      const { nomeproduto, sku, codigobarras, status, categoria, descricao, infotecnica, peso, preco, custo, titulo, palavrachave, estoque } = req.body;
  
      if(req.files){
        
        Array(req.files).forEach((item) => {
          
          let validarArquivos = [];
  
          for(img in item){
            
            validarArquivos.push(img);
            
            item[img].forEach((nome) => {
              filtrarCampoVazio.push(nome.filename);
            });
  
          };
          
          // Verifica quais imagens serão alteradas
          if(validarArquivos.includes('imagem') == false){
            filtrarCampoVazio.unshift('semImage');
            imagem = false;
          };
  
          if(validarArquivos.includes('miniaturaUm') == false) {
            filtrarCampoVazio.splice(1, 0,'semMini');
            miniaturaUm = false;
          };
  
          if (validarArquivos.includes('miniaturaDois') == true){
            miniaturaDois = true;
          };
  
        });
  
        // tira [''] do array
        let nomeImg = filtrarCampoVazio.filter((img) => { return img  });
  
        // Insere Imagem caso true
        if(imagem == true) {
          imagem = "images/uploads/imagemDoProduto/"+nomeImg[0];
        } else {
          imagem = undefined;
        };
  
        // Insere miniaturaUm caso true
        if(miniaturaUm == true) {
          miniaturaUm = "images/uploads/imagemDoProduto/"+nomeImg[1];
        } else {
          miniaturaUm = undefined;
        };
  
        // Insere miniaturaDois caso true
        if(miniaturaDois == true){
          miniaturaDois = "images/uploads/imagemDoProduto/"+nomeImg[2];
        } else {
          miniaturaDois = undefined;
        };
  
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
        estoque: estoque,
        imagem: imagem,
        miniaturaUm: miniaturaUm,
        miniaturaDois: miniaturaDois
      };
      buscarProduto.update(editar);
  
      return res.redirect('/admin/gerenciamentodeprodutos');

    };
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