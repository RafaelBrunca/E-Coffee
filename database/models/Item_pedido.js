module.exports = (sequelize, DataTypes) => {
    const Item_pedido = sequelize.define("Item_pedido", {
        preco_unitario: DataTypes.DECIMAL.UNSIGNED,
        item_quantidade: DataTypes.INTEGER.UNSIGNED,
        sub_total: DataTypes.DECIMAL,
        preco_total: DataTypes.DECIMAL.UNSIGNED,
        id_produto: DataTypes.INTEGER.UNSIGNED,
        id_cli_pedido: DataTypes.INTEGER.UNSIGNED,
    },{
        tableName: 'produtos',
        timestamps: false
    });
    return Item_pedido;
}