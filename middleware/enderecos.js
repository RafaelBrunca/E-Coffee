const db = require('../database/models');

async function enderecos(req, res, next){
    let cliente = req.session.user.id_cliente;

    let enderecos = await db.Endereco.findAll({
        where: { cliente: cliente }
    })

    if(enderecos.length == 3){
        return res.redirect('/paginadousuario/enderecos');
    };
    next();
};

module.exports = enderecos;