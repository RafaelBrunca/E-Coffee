module.exports = (sequelize, DataTypes) => {
    const Produto_estoque = sequelize.define("Produto_estoque", {
        id_produto_estoque: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        quantidade_produto_estoque: DataTypes.INTEGER.UNSIGNED,
        sku_do_produto: DataTypes.INTEGER.UNSIGNED,
    },{
        tableName: 'produtos_estoque',
        timestamps: false
    });

    Produto_estoque.associate = (models) => {
        Produto_estoque.hasOne(models.Produto_sku, { as: "sku_do_produtoObj", foreignKey: "id_produto_sku" });
    }
    return Produto_estoque;
}