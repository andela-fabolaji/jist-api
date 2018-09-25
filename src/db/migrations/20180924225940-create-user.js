'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlpha: true,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlpha: true
      },
      handle: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true,
        isUrl: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        isEmail: true
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id',
          as: 'roleId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'active'
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
  down(queryInterface) {
    return queryInterface.dropTable('users');
  }
};