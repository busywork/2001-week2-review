const { db, Pizza, Topping } = require('./server/db');
const { green, red, yellow } = require('chalk');

// These are just some mock datasets I created
// Im keeping them in a data folder to stay organized
const toppingList = require('./data/toppingList');
const pizzaList = require('./data/pizzaList');

const seed = async function() {
  try {
    console.log(yellow('Resetting Database..'));
    await db.sync({ force: true });

    console.log(yellow('Creating Toppings..'));

    const createdToppings = await Topping.bulkCreate(
      toppingList.map(top => {
        return { name: top };
      })
    );

    console.log(yellow('Building awesome Pizzas..'));
    const pepperoni = await Pizza.create(pizzaList[0]);
    await pepperoni.addTopping(createdToppings[4]); // Pepperoni
    await pepperoni.addTopping(createdToppings[7]); // Chedar

    const hawaiian = await Pizza.create(pizzaList[1]);
    await hawaiian.addTopping(createdToppings[3]); // Ham
    await hawaiian.addTopping(createdToppings[8]); // Mozzarella
    await hawaiian.addTopping(createdToppings[16]); // Pineapple

    const meatLovers = await Pizza.create(pizzaList[2]);
    await meatLovers.addTopping(createdToppings[0]); // Bacon
    await meatLovers.addTopping(createdToppings[1]); // Chicken
    await meatLovers.addTopping(createdToppings[2]); // Beef
    await meatLovers.addTopping(createdToppings[3]); // Ham
    await meatLovers.addTopping(createdToppings[4]); // Pepperoni
    await meatLovers.addTopping(createdToppings[5]); // Salami
    await meatLovers.addTopping(createdToppings[6]); // Sausage
    await meatLovers.addTopping(createdToppings[7]); // Chedar
  } catch (err) {
    console.log(red(err));
  }
};

async function runSeed() {
  try {
    await seed(); // generate all the values and add them to database

    console.log(green('Seeding success!'));
  } catch (err) {
    console.error(red('Oh No! Something went wrong!'));
    // Logging out the error is useful for debugging
    console.error(err);
  } finally {
    // Always try to close your connection to the database after finishing the seed
    db.close();
  }
}

runSeed(); // executes the seed function
