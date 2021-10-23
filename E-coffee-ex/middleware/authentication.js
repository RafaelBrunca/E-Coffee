function authentication(req, res, next){
    if(!req.session.user) {
        return res.redirect('/login/iniciarsessao');
    }
    next();
}

module.exports = authentication;