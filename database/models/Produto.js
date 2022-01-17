module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto" , {
        id_produto: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        nome_produto: { 
            type: DataTypes.STRING(200),
            allowNull: false
        },
        sku: { 
            type: DataTypes.STRING(150),
            allowNull: false
        },
        cod_barra: { 
            type: DataTypes.STRING(13),
            allowNull: false
        },
        status_produto: { 
            type: DataTypes.STRING(15),
            allowNull: false
        },
        categoria: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },
        descricao_produto: { 
            type: DataTypes.TEXT,
            allowNull: false
        },
        informacoes_tecnicas: { 
            type: DataTypes.TEXT,
            allowNull: false
        },
        peso: { 
            type: DataTypes.DOUBLE.UNSIGNED,
            allowNull: false
        },
        preco: { 
            type: DataTypes.DOUBLE.UNSIGNED,
            allowNull: false
        },
        custo: { 
            type: DataTypes.DOUBLE.UNSIGNED,
            allowNull: false
        },
        title_pagina: { 
            type: DataTypes.STRING(200),
            allowNull: false
        },
        palavras_chave: { 
            type: DataTypes.STRING(200),
            allowNull: false
        },
        imagem: { 
            type: DataTypes.STRING(200),
            allowNull: false
        },
        estoque: { 
            type: DataTypes.DOUBLE.UNSIGNED,
            allowNull: false
        },
    },{
        tableName: 'produtos',
        timestamps: false
    });

    Produto.associate = (models) => {
        Produto.hasMany(models.Carrinho, { foreignKey: "id_produto", as: "produtos" });
    };

    return Produto;
};