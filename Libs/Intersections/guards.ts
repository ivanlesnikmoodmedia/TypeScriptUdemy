type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = { 
    type: 'file',
    path: 'some/path/to/file.csv' 
};

type DBSource = { type: 'db'; connectionUrl: string };
const fbSource: DBSource = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function isFile(source: Source){
    return source.type === 'file';
}

function loadData(source: Source) {
    //if (typeof source === 'object' && 'path' in source) {
    if (source.type === 'file') {  
    
    return;
    }
    source.connectionUrl
}

class User {
    constructor(public name: string) {}

    join() {
        
    }
}

class Admin {
    constructor(public name: string) {}

    scan() {

    }    
}

const user = new User('Ivek');
const admin = new Admin('Alice');

type Entity = User | Admin;

function init(entity: Entity)   {
    if(entity instanceof User) {
        entity.join();
        return;   
    }

    entity.scan();
}
