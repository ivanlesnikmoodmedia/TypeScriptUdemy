type DataStore = {
  [prop: string]: any | string;  
};

let someObj = {
    record: 123,
    isActive: true
} satisfies Record<string, number | boolean>;

let store: DataStore = {};


store.id = 5;
store.name = 'Ivek';
store.isAdmin = true;

let roles = ['admin', 'user'] as const;
const firstRole = roles[0];

someObj.record;