const db = require('../database/models');

const bcrypt = require('bcryptjs');

const adminController = {
  telaLogin: function(req, res) {
   res.render('admin/login')
  },
  login: async function(req, res) {

    const { usuario, senha } = req.body;
    
    const user = await db.Usuario.findOne({ where: { usuario: usuario} });
    
    if (!user) {
      return res.send({ error: 'Usuário não encontrado' });
    };
    
    if(!await bcrypt.compare(senha, user.senha)) {
      return res.send({ error: 'Senha incorreta' });
    };

    req.session.admin = user;
    
    res.send('logado');
  },

  /* Gerenciar, Adicionar, Editar produtos */

  gerenciarProdutos: async function(req, res) {

    const listar = await db.Produto.findAll()
    .then((result) => { return res.render('admin/gerenciarProdutos', { produtos: result }); 
    }
    ).catch((err) => { console.log(err) });
  },
  telaAdicionar: function(req, res) {
    return res.render('admin/adicionarProduto', { 
      isEditing: false
    });
  },
  adicionarProduto: async function(req, res) {

    const { nomeproduto, sku, codigobarras, status, categoria, descricao, infotecnica, peso, preco, custo, titulo, palavrachave, estoque } = req.body;
    
    let imagem = "images/uploads/imagemDoProduto"+req.file.filename;
    
    /* Criação de produto */
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

    const { nomeproduto, sku, codigobarras, status, categoria, descricao, infotecnica, peso, preco, custo, titulo, palavrachave, imagem, estoque } = req.body;
    
    if(req.file){
      imagem = "images/uploads/imagemDoProduto"+req.file.filename;
    };

    /* Busca o Produto selecionado */
    const buscarProduto = await db.Produto.findByPk(id);

    /* Editar Produto */
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
      estoque: estoque,
    };
    buscarProduto.update(editar);

    return res.redirect('/admin/gerenciamentodeprodutos');
  }
};

module.exports = adminController;