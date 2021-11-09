'use strict';
//================================================================== import
const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const Collection = require('./data-collection.js');
//==================================================================data base
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ?  {dialectOptions: {ssl: {require: true, rejectUnauthorized: false}}}: {}
const sequelize = new Sequelize(DATABASE_URL,DATABASE_CONFIG);
//================================================================== two shcema
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
//================================================================== export
module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
}