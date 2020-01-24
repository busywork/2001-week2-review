//  Import sequelize
const Sequelize = require('sequelize');

// connect to db
const db = new Sequelize('postgres://localhost:5432/week2-review', {
  logging: false
});

module.exports = db;
