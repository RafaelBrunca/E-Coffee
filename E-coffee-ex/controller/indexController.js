const indexController = {
    index: function(req, res){
        res.render('index');
    },
    produtos: function(req, res) {
        res.render('marcaSelecionada');
    },
    carrinho: function(req, res) {
        res.render('carrinho');
    },
    produtoSelecionado: function (req, res) {
        res.render('produtoSelecionado');
    },
    
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = indexController;