'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Midia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Midia.belongsTo(models.TipoMidia, {
        foreignKey: 'tipo_id_midia',
        as: 'midia_tipomidia',
        onDelete: 'RESTRICT'
      });
    }
  }
  Midia.init({
    tipo_id_midia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    caminho_midia: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    posts_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Midia',
    tableName: 'midia',
    freezeTableName: true,
    timestamps: false
  });
  return Midia;
};