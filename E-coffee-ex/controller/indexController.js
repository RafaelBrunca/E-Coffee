const indexController = {
    index: function(req, res){
        res.render('index');
    },
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = indexController;