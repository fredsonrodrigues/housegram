'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blocked extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Blocked.belongsTo(models.User, {
        as: 'bloqueador_usuario',
        foreignKey: 'usuario_principal',
        onDelete: 'CASCADE'
      });

      Blocked.belongsTo(models.User, {
        as: 'bloqueado_usuario',
        foreignKey: 'usuario_bloqueado',
        onDelete: 'CASCADE'
      });
    }
  }
  Blocked.init({
    usuario_principal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_bloqueado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data_bloqueio: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Blocked',
    freezeTableName: true,
    tableName: 'Blocked',
    timestamps: false
  });
  return Blocked;
};