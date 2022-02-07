'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtos', { 
      id_produto: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_produto: { 
        type: Sequelize.STRING(200),
        allowNull: false
      },
      sku: { 
        type: Sequelize.STRING(150),
        allowNull: false
      },
      cod_barra: { 
        type: Sequelize.STRING(13),
        allowNull: false
      },
      status_produto: { 
        type: Sequelize.STRING(15),
        allowNull: false
      },
      categoria: { 
        type: Sequelize.STRING(40),
        allowNull: false
      },
      descricao_produto: { 
        type: Sequelize.TEXT,
        allowNull: false
      },
      informacoes_tecnicas: { 
        type: Sequelize.TEXT,
        allowNull: false
      },
      peso: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      custo: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      title_pagina: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      palavras_chave: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      estoque: {
        type: Sequelize.DOUBLE.UNSIGNED,
        allowNull: false
      },
      imagem: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      miniaturaUm: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      miniaturaDois: {
        type: Sequelize.STRING(200),
        allowNull: false
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produtos');
  }
};