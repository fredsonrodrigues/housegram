'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoMidia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoMidia.hasMany(models.Midia, {
        foreignKey: 'tipo_midia_id',
        as: 'tipomidia_midia',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
      });
    }
  }
  TipoMidia.init({
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tipo_tag: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    duracao: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'TipoMidia',
    tableName: 'tipo_midia',
    freezeTableName: true,
    timestamps: false
  });
  return TipoMidia;
};