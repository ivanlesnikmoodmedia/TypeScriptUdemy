type FileSource = { path: string };
const fileSource: FileSource = { 
    path: 'some/path/to/file.csv' 
};

type DBSource = { connectionUrl: string };
const fbSource: DBSource = {
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
    if (typeof source === 'object' && 'path' in source) {
      return;
    }
}
