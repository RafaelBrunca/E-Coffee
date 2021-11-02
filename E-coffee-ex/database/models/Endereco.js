module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
        id_cli_enderecos: { 
            type: DataTypes.INTEGER.UNSIGNED, 
            primaryKey: true,
        },
        nome_do_endereco: DataTypes.STRING(45),
        logradouro: DataTypes.STRING(255),
        cep: DataTypes.STRING(8),
        num_residencia: DataTypes.STRING(10),
        bairro: DataTypes.STRING(200),
        cidade: DataTypes.STRING(200),
        uf: DataTypes.STRING(2),
        complemento: DataTypes.STRING(250),
        cliente: DataTypes.INTEGER.UNSIGNED
    }, {
        tableName: 'cli_enderecos',
        timestamps: false,
    });
    Endereco.associate = (models) => {
        Endereco.hasOne(models.Cliente, { as: "clienteObj", foreignKey: "id_cliente" });
    };
    return Endereco;
}