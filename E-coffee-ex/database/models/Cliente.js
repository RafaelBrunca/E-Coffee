module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        id_cliente: { 
            type: DataTypes.INTEGER.UNSIGNED, 
            primaryKey: true,
        },
        nome: DataTypes.STRING(100),
        sobrenome: DataTypes.STRING(100),
        telefone: DataTypes.STRING(11),
        cpf: { type: DataTypes.STRING(11),
        unique: true,
        },
        email: { type: DataTypes.STRING(80),
        unique: true,
        },
        senha: DataTypes.STRING(100),
    }, {
        tableName: 'clientes',
        timestamps: false,
    });

    Cliente.associate = (models) => {
        Cliente.hasMany(models.Endereco, { foreignKey: "cliente", as: "enderecos" });
    };

    return Cliente;
}