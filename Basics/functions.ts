function add_func(a: number, b: number): number { // i can write return type but i don't have to
    return a + b;
}

function log (message: string) {
    console.log(message);
}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
    console.log(msg);

};

function performJob(cb: (m: string) => void) {

    cb('How AI know what i watch on Udemy?');

}

performJob(logMsg);

type User2 = {   
    id: number;
    name: string;
    greet: () => string;
};

let newUser: User2 = {
    id: 1,
    name: 'Ivan',
    greet() {
        console.log('Hello there!');
        return this.name;
    }


}
