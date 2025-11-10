type FileData = {
    path: string
    content: string
};

type DatabaseData = {
    connectionUrl: string;
    cradentials: string;
}

type Status = {
    isOpern: boolean;
    errorMessage?: string;
};

interface AccessedFileData extends FileData, Status {}
interface AccessedDatabaseData extends DatabaseData, Status {}