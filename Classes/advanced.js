"use strict";
/* class UserAdv{
    constructor(private firstName: string, private lastName: string){}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const ivek = new UserAdv('Ivek', 'Lesnik');
console.log(ivek.fullName); */
Object.defineProperty(exports, "__esModule", { value: true });
class UserAdv {
    _firstName = '';
    _lastName = '';
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid first name - must not be empty');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid last name - must not be empty');
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
}
const ivek = new UserAdv();
ivek.firstName = 'Ivek';
ivek.lastName = 'Lesnik';
console.log(ivek.fullName);
//# sourceMappingURL=advanced.js.map