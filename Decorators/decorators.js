"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(target, ctx) {
    console.log(target);
    console.log(ctx);
    console.log("Logging...");
    return class extends target {
        constructor(...args) {
            super(...args);
            console.log("New instance created");
        }
    };
}
function autobind(target, ctx) {
    ctx.addInitializer(function () {
        //       this[ctx.name] = this[ctx.name].bind(this);
    });
    return function () {
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
function fieldLogger(target, ctx) {
    console.log("Field decorator applied to:", ctx.name);
    console.log(target);
    return (initialValue) => {
        console.log(`Initial value for ${ctx.name}:`, initialValue);
        return initialValue;
    };
}
function replacer(initValue) {
    return function (target, ctx) {
        console.log(`Replacing field ${ctx.name} with value:`, initValue);
        return initValue;
    };
}
//# sourceMappingURL=decorators.js.map