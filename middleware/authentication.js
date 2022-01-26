function authentication(req, res, next){
    if(!req.session.user) {
        return res.redirect('/iniciarsessao');
    }
    next();
}

module.exports = authentication;