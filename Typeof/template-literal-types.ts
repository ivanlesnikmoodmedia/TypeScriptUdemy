//const userName = 'Ivek';

//const greeting = `hi THEREEEEEEEE, ${mainUserName}.`;
type ReadPermissions = 'no-read' | 'read-only' | 'read-and-write';
type WritePermissions = 'no-write' | 'write-only' | 'read-and-write';
type Permissions = `${ReadPermissions}` | `${WritePermissions}`;

type DataFile = {
    data: string;
    permissions: Permissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
 [Key in DataFileEventNames]: () => void;
};