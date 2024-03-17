const { DataTypes, Model } = require('sequelize');
const sequelize = require('../src/utils/sequelize');

class User extends Model {}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name must not be empty.',
        },
      },
    },
    email: {
      allowNull: false,
      unique: true,
      neverUpdate: true,
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('email', value.toLowerCase());
      },
      validate: { isEmail: true },
    },
    sessionToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'User',
    scopes: {
      user(value) {
        return { where: { id: value } };
      },
    },
  }
);

module.exports = User;
