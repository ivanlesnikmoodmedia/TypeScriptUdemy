type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

/* type Results = {
    add: number;
    subtract: number;
}; */

type Results<T> = {
 readonly [Key in keyof T]?: number;
};


let mathOperations: Operations = {
    add: (a: number, b: number) => {
        return a + b;
    },
    subtract: (a: number, b: number) => {
        return a - b;
    }
}

/* let mathResults: Results = {
    add: mathOperations.add(5, 3),
    subtract: mathOperations.subtract(10, 4)
}; */

let mathResults: Results<Operations> = {
    add: mathOperations.add(5, 3),
    subtract: mathOperations.subtract(10, 4)
};