const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const moment = require('moment');


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
    },
    stars_num: {
      type: DataTypes.INTEGER,
      allowNull:
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
