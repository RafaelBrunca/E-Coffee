function usuarioLogado(req, res, next){
    if(req.session.user){
        return res.redirect('/paginadousuario');
    };
    next();
};

module.exports = usuarioLogado;