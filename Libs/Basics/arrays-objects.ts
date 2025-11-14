let hobbies = ['Football', 'Cooking'];

let users: (string | number)[];
let usarray: Array<string | number>;

users = ['Ivan', 21,];
users = [1, 2, 3];
users = ['Alice', 'Bob'];

let possibleResults: number[];

possibleResults = [1, -1];
possibleResults = [5, 10, 12];

let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Ivek',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'Admin',
        id: 1
    }
};

let val: {} = 'some text';
const someObj = {
    0: 'value1',
    1: 'value2'
};

let data: Record<string, number | string>;   
      