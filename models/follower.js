'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Follower.belongsTo(models.User, {
        as: 'seguidor_usuario',
        foreignKey: 'usuario_principal',
        onDelete: 'CASCADE'
      });

      Follower.belongsTo(models.User, {
        as: 'seguido_usuario',
        foreignKey: 'usuario_seguido',
        onDelete: 'CASCADE'
      });
    }
  }
  Follower.init({
    usuario_principal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_seguido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data_follow: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    confirmado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Follower',
    timestamps: false,
    tableName: 'Followers'
  });
  return Follower;
};