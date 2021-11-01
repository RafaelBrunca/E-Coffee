module.exports = (sequelize, DataTypes) => {
    const Produto_estoque = sequelize.define("Produto_estoque", {
        id_produto_estoque: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        quantidade_produto_estoque: DataTypes.INTEGER.UNSIGNED,
        produto_sku: DataTypes.INTEGER.UNSIGNED,
    },{
        tableName: 'produto_estoque',
        timestamps: false
    });

    Produto_estoque.associate = (models) => {
        Produto_estoque.belongsToMany(models.Produto_sku, { as: "produto_sku", foreignKey: "id" });
    }
    return Produto_estoque;
}