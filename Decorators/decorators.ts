function logger<T extends { new (...args: any[]): {} }>(target: T, ctx: ClassDecoratorContext) {
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

function autobind(target: (...args: any[]) => any, ctx: ClassDecoratorContext) {
    ctx.addInitializer(function (this: any) {
 //       this[ctx.name] = this[ctx.name].bind(this);
    });

    return function (this: any) {
        console.log("Autobind decorator applied");
        target.apply(this);
    };
}

@logger
class User {
    name = "John Doe";

//    @autobind
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