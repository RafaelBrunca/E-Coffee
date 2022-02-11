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

//Verifica se o endereco pertence ao usuario

async function verifyUser (req, res, next){
    let cliente = req.session.user.id_cliente;
    const { id_endereco } = req.params;

    const consultaEnderecos = await db.Endereco.findOne({
        where: {
            id_cli_enderecos: id_endereco,
            cliente: cliente
        }
    });

    if(!consultaEnderecos){
        return res.redirect('/paginadousuario/enderecos');
    };

    next();
};

module.exports = { 
    enderecos,
    verifyUser
};