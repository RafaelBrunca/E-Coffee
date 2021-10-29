module.exports = (sequelize, DataTypes) => {
    const produto = sequelize.define("Categoria" , {
        id_produto_categoria: {
            type: DataTypes.INTERGER.UNSIGNED,
            primaryKey: true
        },
        nome_categoria: DataTypes.STRING(45)
    },{
        tableName: 'categorias',
        timestamps: false
    });
    return Categoria;
}