const usuarios = require('../Modelteste/usuarios');

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
		return res.redirect('/paginadousuario/seguranca');
    },
    enderecos: function(req, res) {
        res.render('enderecosUser', {
            enderecosUser: usuarios
        });
    },
    telaCriarEndereco: function(req, res) {
        res.render('enderecoCriar');
    },
    registrarEndereco: function(req, res) {
        
        const apelidoEndereco = req.body.apelido;
        const cep = req.body.cep;
        const rua = req.body.rua;
        const numero = req.body.numero;
        const bairro = req.body.bairro;
        const cidade = req.body.cidade;
        const estado = req.body.estado;
        const complemento = req.body.complemento;
        
        usuarios.push({
            apelido: apelidoEndereco,
            cep: cep,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            complemento: complemento,
        })
        res.redirect('/paginadousuario/enderecos')
    },
    telaEditarEnderecos: function(req, res) {

    },
    EditarEnderecos: function(req, res) {

    },
}

module.exports = homeUserController;