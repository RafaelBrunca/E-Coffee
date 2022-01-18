function enderecos(req, res, next){
    if(req.session.user.enderecos.length == 3){
        res.redirect('/paginadousuario/enderecos');
    };
    next();
};

module.exports = enderecos;