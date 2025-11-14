function getLength(val: string): string;
function getLength(val: any[]): number;
function getLength(val: string | any[]) {
    //return val.length;¸
    if (typeof val === 'string') {
        const numberOdWords = val.split(' ').length;
        return `${numberOdWords} words`;
}
  return val.length;
}

const numOfWords = getLength('does this work fine?');
