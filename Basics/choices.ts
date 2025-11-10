enum Role {
    ADMIN = 0,
    READ_ONLY = 1,
    WRITE = 2,
    EXECUTE = 3
}

let userRole: Role = 0;
let userRole1: Role = Role.READ_ONLY;


userRole = Role.EXECUTE;


let roles: 'admin' | 'read-only' | 'writer' | 'executor' = 'admin';

//userRole = 'admin';

let possibleResults1: [1  | -1, number];
possibleResults1 = [1, 42];

function access(role: 'admin' | 'read-only' | 'writer' | 'executor') {
    
}

type Roli = 'admin' | 'read-only' | 'writer' | 'executor'; 

type User = {   
    name: string;
    age: number | string;
    hobbies: string[];
    role: Roli;
}




