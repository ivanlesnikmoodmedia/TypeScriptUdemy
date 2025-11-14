/*const appUser = {
    id: 1,
    name: "Alice",
    age: 30,
    permissions: [{ action: "read", resource: "posts" }],
}; */

 type AppUser = {
    id: number;
    name: string;
    age: number;
    isAdmin: boolean;
};

type Perms = {
    id: number;
    action: string;
    resource: string;
}[];
//type Perms1 = AppUser["permissions"];  
type Perm = Perms[number];
type Names = string[];
type Name = Names[number];