function locals (req, res, next) {
    res.locals.sessao = req.session;
    return next();
};

module.exports = locals;