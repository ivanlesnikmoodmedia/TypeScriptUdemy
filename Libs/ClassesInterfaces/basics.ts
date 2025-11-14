/* class User {
    name = 'Ivek';
    age = 21;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

new User(); */

class User {
    constructor(public name: string, public age: number) {}
}

const max = new User('Ivek', 21);