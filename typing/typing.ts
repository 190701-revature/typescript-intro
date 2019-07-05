// Declaring a variable 'myString'
// type declaration follows variable name with a colon and type
let myString: string = 'this is a string';
// myString = 22; We can't assign 22 because 22 is a number and we've declared
// a string variable

class Person {
    firstName: string; // Assigned type arguments to field names
    lastName: string;

    // Function arguments can also be typed
    constructor(fn: string, ln: string) {
        this.firstName = fn;
        this.lastName = ln;
    }

    // Functions that should not return anything and should not be
    // used for assignments we can use the special typing keyword `void`
    sayHello() : void {
        console.log(`Hello, I'm ${this.getFullName()}`);
    }

    // Function return type, between parenthesis and curly bracket
    getFullName() : string {
        return `{${this.firstName} ${this.lastName}}`
    }
}

const abby : Person = new Person('Abby', 'Addams');