function authentication(req, res, next){
    if(!req.session.user) {
        return res.redirect('/iniciarcessao');
    }
    next();
}

module.exports = authentication;