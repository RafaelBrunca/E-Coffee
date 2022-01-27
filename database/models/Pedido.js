module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
        id_pedido: { 
            type: DataTypes.INTEGER.UNSIGNED, 
            primaryKey: true,
        },
        id_endereco: { 
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        quantidade: { 
            type: DataTypes.STRING(3),
            allowNull: false
        },
        data_pedido: { 
            type: DataTypes.DATE,
            allowNull: false
        },
        preco_total: {
            type: DataTypes.DOUBLE.UNSIGNED,
            allowNull: false
        }
    }, {
        tableName: 'pedidos',
        timestamps: false,
    });

    Pedido.associate = (models) => {
        Pedido.belongsTo(models.Cliente, { foreignKey: "id_cliente", as: "clientes" });
    };

    Pedido.associate = (models) => {
        Pedido.belongsTo(models.Produto, { foreignKey: "id_produto", as: "produtoPedido" });
    };

    return Pedido;
};