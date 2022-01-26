'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cli_enderecos', { 
      id_cli_enderecos: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_do_endereco: { 
        type: Sequelize.STRING(45),
        allowNull: false
      },
      logradouro: { 
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cep: { 
        type: Sequelize.STRING(8),
        allowNull: false
      },
      num_residencia: { 
        type: Sequelize.STRING(10),
        allowNull: false,
        
      },
      bairro: { 
        type: Sequelize.STRING(200),
        allowNull: false
      },
      cidade: { 
        type: Sequelize.STRING(200),
        allowNull: false
      },
      uf: { 
        type: Sequelize.STRING(2),
        allowNull: false
      },
      complemento: { 
        type: Sequelize.STRING(250),
        allowNull: false
      },
      cliente: { 
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: { 
          model: { 
            tableName: 'clientes'
          },
          key: 'id_cliente'
        }
      }
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos');
  }
};