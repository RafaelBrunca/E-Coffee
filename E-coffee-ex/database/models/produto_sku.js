module.exports = (sequelize, DataTypes) => {
    const Produto_sku = sequelize.define("Produto_sku", {
        id_produto_sku: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        produto_sku: DataTypes.STRING(150),
        id_produto: DataTypes.INTEGER.UNSIGNED,
    },{
        tableName: 'produtos_sku',
        timestamps: false
    });
    return Produto_sku
}