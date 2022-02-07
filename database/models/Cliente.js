module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        id_cliente: { 
            type: DataTypes.INTEGER.UNSIGNED, 
            primaryKey: true,
        },
        nome: { 
            type: DataTypes.STRING(100),
            allowNull: false
        },
        sobrenome: { 
            type: DataTypes.STRING(100),
            allowNull: false
        },
        telefone: { 
            type: DataTypes.STRING(11),
            allowNull: false
        },
        cpf: { type: DataTypes.STRING(11),
        unique: true,
        allowNull: false
        },
        email: { type: DataTypes.STRING(80),
        unique: true,
        allowNull: false
        },
        senha: { 
            type: DataTypes.STRING(100),
            allowNull: false
        },
        token: { 
            type: DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        tableName: 'clientes',
        timestamps: false,
    });

    Cliente.associate = (models) => {
        Cliente.hasMany(models.Endereco, { foreignKey: "cliente", as: "enderecos" });
    };

    Cliente.associate = (models) => {
        Cliente.hasMany(models.Pedido, { foreignKey: "id_cliente", as: "pedidosCliente" });
    };

    return Cliente;
};
