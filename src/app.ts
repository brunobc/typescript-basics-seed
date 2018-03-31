console.log('Hello TypeScript!');

const toppings = ['bacon', 'more bacon'];
const newToppings = ['pepperoni with bacon'];
const all = [...toppings, ...newToppings];
console.log(all);