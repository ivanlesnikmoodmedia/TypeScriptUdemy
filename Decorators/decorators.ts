function logger(target: any, ctx: any){
    console.log(target);
    console.log(ctx);
    console.log("Logging...");
}

@logger
class User {
    name: string = "John Doe";
    

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

}