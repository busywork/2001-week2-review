const express = require('express');
const router = express.Router();
// Grab both models from a single file
const { Pizza, Topping } = require('../db');

router.get('/', async (req, res, next) => {
  // use try catch to grab any errors thrown by async functions
  try {
    const myPizzas = await Pizza.findAll({
      include: [{ model: Topping, as: 'toppings' }]
    });
    res.status(200).json(myPizzas);

    // Example of using custom methods on the model
    //    Pizza.halfAPizza();
    // this console.log a sentence.

    /* Example of getting topping of a single pizza:
    
      const pizza1 = await Pizza.findByPk(1);
      const toppings = await pizza1.getToppings();
      res.status(200).json({ 
        pizza: pizza1, 
        toppings: toppings 
      });
    */
  } catch (err) {
    next(err);
  }
});

module.exports = router;
