interface Authenticateble {
    email: string;
    password: string;

    login() : void;
    logout() : void;
}

interface AuthenticatableAdmin extends Authenticateble {
    role: 'admin' | 'superadmin';
}


class AuthenticatebleUser implements Authenticateble {
    constructor(public email: string, public password: string) {}

    login() {

    }

    logout() {

    }

}


let user: Authenticateble;

user = {
    email: 'test@example.com',
    password: 'securepassword',
    login() {   
    },
    logout() {
    }
};