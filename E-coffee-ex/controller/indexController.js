const indexController = {
    index: function(req, res){
        res.render('index');
    },
    produtos: function(req, res) {
        res.render('marcaSelecionada');
    },
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = indexController;