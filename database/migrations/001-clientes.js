'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clientes', { 
      id_cliente: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: { 
        type: Sequelize.STRING(100),
        allowNull: false
      },
      sobrenome: { 
        type: Sequelize.STRING(100),
        allowNull: false
      },
      telefone: { 
        type: Sequelize.STRING(11),
        allowNull: false
      },
      cpf: { 
        type: Sequelize.STRING(11),
        unique: true,
        allowNull: false,
      },
      email: { 
        type: Sequelize.STRING(80),
        unique: true,
        allowNull: false
      },
      senha: { 
        type: Sequelize.STRING(100),
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clientes');
  }
};