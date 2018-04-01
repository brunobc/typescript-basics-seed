//let  sumOrder: Function;
let  sumOrder: (price: number, quantity: number) => number;
// let  sumOrder: (price: number, quantity: number) => number = (x, y) => x * y;

// sumOrder = (price: number, quantity: number): number => {
//     return price * quantity;
// };
sumOrder = (x, y = 1) => x * y;

const sum = sumOrder(30, 3);

console.log(`Total sum: ${sum}`);

let pizza: [string, number, boolean];

pizza = ['Pepperoni', 20, true];


type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;
let pizzaSize: Size = 'small';

const selectSize: Callback = x => {
    pizzaSize = x;
};

selectSize('medium');