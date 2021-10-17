function authentication(req, res, next){
    if(!req.session.email) {
        return res.redirect('/iniciarcessao');
    }
    next();
}

module.exports = authentication;