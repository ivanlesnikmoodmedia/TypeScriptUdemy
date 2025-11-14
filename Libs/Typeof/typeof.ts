const userName = 'Ivek'; 

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
    difficulty: 'hard',
    level: 21

};

type Settings = {
    difficulty: string;
    level: number;
};

type Settings2 = typeof settings;

function loadData(settings: Settings){

}
loadData(settings);  