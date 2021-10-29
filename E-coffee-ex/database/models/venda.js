module.exports = (sequelize, DataTypes) => {
    const Venda = sequelize.define("Venda" , {
        desconto: DataTypes.INTEGER.UNSIGNED,
        forma_pagamento: DataTypes.STRING(45),
        id_cliente: DataTypes.INTEGER.UNSIGNED
    },{
        tableName: 'vendas',
        timestamps: false
    });
    return Venda;
}