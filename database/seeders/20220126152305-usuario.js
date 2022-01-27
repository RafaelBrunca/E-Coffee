'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('usuarios', [{
      usuario: "admin",
      senha: "$2a$12$trrrLVgno8lULg9zm0aXV.FJrie3vb7Y.H5QFDGmUoHI59Roji8kO"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
