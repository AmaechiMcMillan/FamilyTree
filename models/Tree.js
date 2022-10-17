const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Tree extends Model {}

Tree.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "test",
      allowNull: true
    },
    nameX: {
      type: DataTypes.STRING,
      defaultValue: "test",
      allowNull: false
    },
    nameY: {
      type: DataTypes.STRING,
      defaultValue: "test",
      allowNull: false
    },
    fam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descendant: {
      type: DataTypes.STRING,
      defaultValue: "none",
      allowNull: false
    },
   
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tree'
  }
);

module.exports = Tree;
