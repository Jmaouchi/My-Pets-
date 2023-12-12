const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}


// create fields/columns for Post model
Reviews.init(
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
    my_comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'reviews'
  }
);

module.exports = Reviews;
