module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto" , {
        id_produto: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        nome_produto: DataTypes.STRING(200),
        id_categoria: DataTypes.INTEGER.UNSIGNED,
        descricao_produto: DataTypes.INTEGER,
        informacoes_tecnicas: DataTypes.INTEGER,
        produto_preco: DataTypes.DECIMAL,
        cod_barra_produto: { type: DataTypes.STRING(13),
        unique: true
        }
    },{
        tableName: 'produtos',
        timestamps: false
    });
    return Produto;
}