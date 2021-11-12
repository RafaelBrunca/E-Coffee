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
    
    res.send('logado')
  },
  gerenciarProdutos: function(req, res) {
    res.render('admin/gerenciarProdutos')
  },
  telaAdicionar: function(req, res) {
    res.render('admin/adicionarProduto');
  },
};

module.exports = adminController;