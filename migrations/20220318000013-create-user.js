'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      data_nascimento: {
        type: Sequelize.DATE
      },
      genero: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
      },
      apelido: {
        type: Sequelize.STRING
      },
      eh_admin: {
        type: Sequelize.BOOLEAN
      },
      esta_ativo: {
        type: Sequelize.BOOLEAN
      },
      foto_perfil: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      site: {
        type: Sequelize.STRING
      },
      esta_verificado: {
        type: Sequelize.BOOLEAN
      },
      eh_marca: {
        type: Sequelize.BOOLEAN
      },
      privado: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};