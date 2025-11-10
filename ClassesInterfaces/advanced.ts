/* class UserAdv{
    constructor(private firstName: string, private lastName: string){}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const ivek = new UserAdv('Ivek', 'Lesnik');
console.log(ivek.fullName); */

class UserAdv{
    private _firstName: string = '';
    private _lastName: string = '';

    set firstName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid first name - must not be empty');
        }
        this._firstName = name;
    }

    set lastName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid last name - must not be empty');
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    
    static eid = 'USER';

    static greet() {
        console.log('Hello there!');
    }
}

const ivek = new UserAdv();
ivek.firstName = 'Ivek';
ivek.lastName = 'Lesnik';
console.log(ivek.fullName);

class Employee extends UserAdv {
    constructor (public jobTitle: string) {
        super();
    }

}
abstract class UIEElement {
        constructor (public identifier: string) {}

        clone(targetLocation:string) {
        }
}