const Sequelize = require('sequelize');
const db = require('../db');

// define the model
const Topping = db.define('topping', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Add any helper functions for topping here

module.exports = Topping;
