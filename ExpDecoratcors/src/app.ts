function Logger(logString: string) {
    console.log('Logger factory');
    return function (constructor: Function) {
        console.log('Logging...');
        console.log(constructor);
        console.log(logString);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function<T extends { new(...args: any[]): {name: string} }>(constructor: T) {
/*          const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }  */
        return class extends constructor { 
            constructor(...args: any[]) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        } 
            }
    }
  }
}
//@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Ivek'

    constructor() {
        console.log('Person created:', this.name);
    }
}

const pers = new Person();

console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');

}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, propertyName: string | Symbol) {
    console.log('Method decorator!');
    console.log(target);
    console.log(propertyName);
}

class Product {
    @Log
    title: string;
    private price1: number;

    set price(val: number) {
        if (val > 0) {
            this.price1 = val;
        }else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(title: string, price: number) {
        this.title = title;
        this.price1 = price;
    }

    getPriceWithTax(tax: number) { 
        return this.price * (1 + tax);
    }
}


const p1 = new Product('Book', 19); 
const p2 = new Product('Book 2', 29);