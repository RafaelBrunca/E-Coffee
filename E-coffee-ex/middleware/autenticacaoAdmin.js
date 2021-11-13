function autenticacaoAdmin(req, res, next){
    if(!req.session.admin) {
        return res.redirect('/admin');
    }
    next();
}

module.exports = autenticacaoAdmin;