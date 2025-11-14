const userName = 'Ivek';

//let age = 21;
//var result;


/* function add(a: number, b: number) {
    let result;
    result = a + b;
    return result;
} */

//if (age > 20) {
// let isOld = true;
//}
//console.log(isOld); 

//const add = (a: number, b: number) =>  a + b;

//console.log(add(2, 5));

//const printOutput = (output: string | number) => console.log(output);

const printOutput: (output: string | number) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}


//printOutput(add(5, 2));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', 'Reading'];

activeHobbies.push(...hobbies);

const person = {
    name: 'Ivek',
    age: 21
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2);
console.log(addedNumbers);

/* const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
 */

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies ,hobby1, hobby2);
//const { name: userName, age } = person;