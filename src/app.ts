//let  sumOrder: Function;
let  sumOrder: (price: number, quantity: number) => number;
// let  sumOrder: (price: number, quantity: number) => number = (x, y) => x * y;

// sumOrder = (price: number, quantity: number): number => {
//     return price * quantity;
// };
sumOrder = (x, y = 1) => x * y;

const sum = sumOrder(30, 3);

console.log(`Total sum: ${sum}`);