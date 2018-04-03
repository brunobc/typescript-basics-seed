function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];
function reverse<T>(stringOrArray: string | T[]): string | T[] {
    if (typeof stringOrArray === 'string') {
        return stringOrArray
            .split('')
            .reverse()
            .join('');
    }
    return stringOrArray.slice().reverse();
}

reverse('Pepperoni');
reverse(['bacon', 'pepperoni', 1]);





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

enum Sizes {
    Small,
    Medium,
    Large
}

enum Sizes {
    ExtraLarge = 3
}

console.log(Sizes.ExtraLarge, Sizes[Sizes.ExtraLarge]);
console.log(Sizes.Large, Sizes[Sizes.Large]);