class Parent {
    firstName: string;
    lastName: string;

    sayHello() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
    }

    constructor(fn: string, ln: string) {
        this.firstName = fn;
        this.lastName = ln;
    }
}

/**
 * Class Extension
 * In many cases, we have classes that are similar to or less specific versions
 * of classes we want to make. As developers, we want to keep our code DRY 
 * (Don't Repeat Yourself). A class can extend another class an inherit all of
 * its (non-private) defined fields and methods.
 */

class Child extends Parent {
    birthdate: Date;
    
    // Overrides the method sayHello of the parent
    // An overridden will called by the class, even if the reference type
    // is that of a parent implementation
    sayHello() {
        const yearsOld: number = new Date().getFullYear() - this.birthdate.getFullYear();
        // Changed Freddy -> Fweddy, because kids
        const name = this.firstName.replace('r', 'w');
        console.log(`Hi mister, I'm ${name} and I'm ${yearsOld}.`)
    }

    constructor(fn: string, ln: string, date: Date = new Date()) {
        // The 'super' keyword is used to reference the parent class
        // It's sort of like 'this' but for the parent
        // super() <--- super constructor
        // super.firstName <--- super class's firstName field
        super(fn, ln);
        this.birthdate = date;
    }
}

const myChild: Child = new Child('Billy', 'Bob', new Date());
myChild.firstName // valid, as defined on parent class
myChild.birthdate // valid, as this is defined on child

const myParent: Parent = new Parent('Abby', 'Addams');
myParent.firstName // valid, as defined on Parent
// myParent.birthdate //invalid, not defined on Parent


const secondChild: Parent = new Child('Freddy', 'Kruger');
// secondChild.birthdate;

const myPeople: Array<Parent> = [myChild, myParent, secondChild];
myPeople.forEach(p => p.sayHello());