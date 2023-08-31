const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pets extends Model {}


// create fields/columns for Post model
Pets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pets'
  }
);

module.exports = Pets;
