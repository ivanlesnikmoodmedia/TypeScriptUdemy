type User1 = {name : string; age: number };
type UserKeys = keyof User1;

let validKey: UserKeys;

validKey = 'name';
validKey = 'age';

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];
    if ( val === undefined || val === null) {
        throw new Error('Invalid key');
    }
    return val;
}
const data = {id: 1, name: 'Ivek', isAdmin: true};
const user = {name: 'Ivek', age: 21};

const val = getProp(user, 'name');