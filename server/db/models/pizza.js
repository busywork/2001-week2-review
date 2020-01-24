// Import required db and sequelize
const Sequelize = require('sequelize');
const db = require('../db');

// Define the model
const Pizza = db.define('pizza', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Add class & instance methods if applicable
Pizza.halfAPizza = function() {
  console.log('Cuttin that pizza in half');
};

// export the model
module.exports = Pizza;
