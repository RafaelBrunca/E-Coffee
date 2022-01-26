'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pedidos', { 
      id_pedido: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_cliente: { 
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'clientes'
          },
          key: 'id_cliente'
        }
      },
      id_endereco: { 
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      id_produto: { 
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'produtos'
          },
          key: 'id_produto'
        }
      },
      quantidade: { 
        type: Sequelize.STRING(3),
        allowNull: false
      },
      data_pedido: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      preco_total: {
        type: Sequelize.DOUBLE.UNSIGNED,
        allowNull: false
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedidos');
  }
};