const usuarios = require('../Modelteste/usuarios');
const router = require('../routes/userPage');

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
        });
        res.redirect('/paginadousuario/enderecos')
    },
    telaEditarEnderecos: function(req, res) {
        res.render('enderecoEditar');
    },

    //Edição de endereços via express
    /*editarEnderecos: function(req, res) {
        const editarEndereco = usuarios.map((usuario) => {
            usuario.apelido = req.body.apelido;
            usuario.cep = req.body.cep;
            usuario.rua = req.body.rua;
            usuario.numero = req.body.numero;
            usuario.bairro = req.body.bairro;
            usuario.cidade = req.body.cidade;
            usuario.estado = req.body.estado;
            usuario.complemento = req.body.complemento;
            return (req.session.user = usuario)
        });
        return res.redirect('/paginadousuario/enderecos')
    },*/
    
    editarEnderecos: function(req,res) {
        db.endereco.update({
            apelido = req.body.apelido,
            cep = req.body.cep,
            rua = req.body.rua,
            numero = req.body.numero,
            bairro = req.body.bairro,
            cidade = req.body.cidade,
            estado = req.body.estado,
            complemento = req.body.complemento,
        }).then((result) => {
            res.render(('enderecoEditar', {result}))
        }).catch((err) => {
            console.log(err)
        });
    },
    
}

module.exports = homeUserController;