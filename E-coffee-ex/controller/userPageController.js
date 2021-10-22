const usuarios = require('../models/usuarios');

const homeUserController = {
    index: function(req, res) {
        res.render('homeUser');
    },
    rastreio: function(req, res) {
        res.render('pedidosUser');
    },
    seguranca: function(req, res) {
        res.render('segurancaUser');
    },
    enderecos: function(req, res) {
        res.render('enderecosUser');
    },
    telaEditarInformacoes: function(req, res) {
        res.render("editarUsuario");
    },
    editarPerfil: function(req, res) {        
        const alterarUsuario = usuarios.map((usuario) => {
			usuario.name = req.body.name;
			usuario.lastname = req.body.lastname;
			usuario.telefone = req.body.telefone;
			usuario.cpf = req.body.cpf;
			usuario.email = req.body.email;
			usuario.password = req.body.password;
			return (req.session.user = usuario);
		});
        console.log(alterarUsuario)
		return res.redirect('/paginadousuario/seguranca');
    },
}

module.exports = homeUserController;