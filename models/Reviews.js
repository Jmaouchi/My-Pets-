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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
        // getter function, that will be called before entring the data into the database
        get(){
          const currentDate = new Date;
          const formattedDate = moment(currentDate).format("MM/DD/YY, hh:mm:ss");
          return formattedDate
        }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'reviews'
  }
);

module.exports = Reviews;
