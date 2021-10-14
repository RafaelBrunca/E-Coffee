const homeUserController = {
    index: function(req, res) {
        res.render('homeUser');
    },
    rastreio: function(req, res) {
        res.render('pedidosUser');
    },
    seguranca: function(req, res) {
        res.render('segurancaUser');
    },
    enderecos: function(req, res) {
        res.render('enderecosUser');
    },
}

module.exports = homeUserController;