module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
        id_cli_enderecos: { 
            type: DataTypes.INTEGER.UNSIGNED, 
            primaryKey: true,
        },
        nome_do_endereco: { 
            type: DataTypes.STRING(45),
            allowNull: false
        },
        logradouro:{ 
            type: DataTypes.STRING(255),
            allowNull: false
        },
        cep: { 
            type: DataTypes.STRING(8),
            allowNull: false
        },
        num_residencia: { 
            type: DataTypes.STRING(10),
            allowNull: false
        },
        bairro: { 
            type: DataTypes.STRING(200),
            allowNull: false
        },
        cidade: { 
            type: DataTypes.STRING(200),
            allowNull: false
        },
        uf: { 
            type: DataTypes.STRING(2),
            allowNull: false
        },
        complemento: { 
            type: DataTypes.STRING(250),
            allowNull: false
        },
    }, {
        tableName: 'cli_enderecos',
        timestamps: false,
    });
    Endereco.associate = (models) => {
        Endereco.belongsTo(models.Cliente, { foreignKey: "cliente", as: "id_cliente" });
    };
    return Endereco;
};