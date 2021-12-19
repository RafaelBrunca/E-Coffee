module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id_usuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        usuario: { 
            type: DataTypes.STRING(40),
            allowNull: false
        },
        senha: { 
            type: DataTypes.STRING(100),
            allowNull: false
        },
    },{
        tableName: 'usuarios',
        timestamps: false
    });
    return Usuario;
};