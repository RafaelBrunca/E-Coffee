module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define("Categoria" , {
        id_produto_categoria: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        nome_categoria: DataTypes.STRING(45)
    },{
        tableName: 'categorias',
        timestamps: false
    });
    return Categoria;
}