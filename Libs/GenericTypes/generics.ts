//let names: string[] = ['Nomad', 'Ivek'];
let names: Array<string> = ['Nomad', 'Ivek'];
 
type DataStore<T> = {
    [key: string]: T;
} 

let store: DataStore<number | string | boolean> = {};
store.name = 'Ivek';
store.isInstructor = true;
store.age = 21;

let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U){
    return [a, b] 
};
const ids = merge(21,'Ivek');

function mergeObj<T, U>(a: T, b: U){
    return {...a, ...b};
}

const merged = mergeObj(21, 21);
console.log(merged);

class UserDR<T> {
    constructor(public id: T) {}
}

const user = new UserDR('21');
user.id;