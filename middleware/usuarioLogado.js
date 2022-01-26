function usuarioLogado(req, res, next){
    if(req.session.user){
        return res.redirect('/paginadousuario/' + req.session.user.id_cliente);
    };
    next();
};

module.exports = usuarioLogado;