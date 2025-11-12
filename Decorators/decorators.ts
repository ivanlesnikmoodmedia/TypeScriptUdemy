function logger<T extends { new (...args: any[]): {} }>(target: T, ctx: any) {
    console.log(target);
    console.log(ctx);
    console.log("Logging...");
    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            console.log("New instance created");
        }
    };
}

function autobind(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        },
    };
}

@logger
class User {
    name = "John Doe";

    @autobind
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const user = new User();
const person = new User();

function fieldLogger(target: any, ctx: any) {
    console.log("Field decorator applied to:", ctx.name);
    console.log(target);

    return (initialValue: any) => {
        console.log(`Initial value for ${ctx.name}:`, initialValue);
        return initialValue;
    };
}

function replacer<T>(initValue: T) {
    return function (target: any, ctx: any) {
        console.log(`Replacing field ${ctx.name} with value:`, initValue);
        return initValue;
    };
}