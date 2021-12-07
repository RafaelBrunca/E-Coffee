module.exports = (sequelize, DataTypes) => {
    const Carrinho = sequelize.define('Carrinho', {
        id_carrinho: {
            type: DataTypes.INTEGER.UNSIGNED, 
            primaryKey: true
        },
        id_produto: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        quantidade: {
            type: DataTypes.STRING(3),
            allowNull: false
        },
        id_cliente: {
            type: DataTypes.INTEGER.UNSIGNED, 
            allowNull: false
        }
    },
    {
        tableName: 'Carrinhos',
        timestamps: false
    });

    Carrinho.associate = (models) => {
        Carrinho.belongsTo(models.Cliente, { foreignKey: "id_cliente", as: "id_clientes" });
    };

    Carrinho.associate = (models) => {
        Carrinho.belongsTo(models.Produto, { foreignKey: "id_produto", as: "id_produtos" });
    };
    
    return Carrinho

}
