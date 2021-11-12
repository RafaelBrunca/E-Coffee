function autenticacaoAdmin(req, res, next){
    if(!true) {
        return res.redirect('/admin');
    }
    next();
}

module.exports = autenticacaoAdmin;