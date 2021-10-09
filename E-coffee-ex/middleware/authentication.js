function authentication(request, response){
    if(!request.session.user) {
        return response.redirect('/');
    }
    next();
}

module.exports = authentication;