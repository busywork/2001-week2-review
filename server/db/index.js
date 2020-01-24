const db = require('./db');
const Pizza = require('./models/pizza');
const Topping = require('./models/topping');

// Pizzas Have Many Toppings
Topping.belongsToMany(Pizza, { through: 'pizza_toppings' });
// Toppings are on many Pizzas
Pizza.belongsToMany(Topping, { through: 'pizza_toppings' });

// combining all the models and db in one place
module.exports = {
  db,
  Pizza,
  Topping
};
