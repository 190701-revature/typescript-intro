var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Parent = (function () {
    function Parent(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    Parent.prototype.sayHello = function () {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    };
    return Parent;
})();
/**
 * Class Extension
 * In many cases, we have classes that are similar to or less specific versions
 * of classes we want to make. As developers, we want to keep our code DRY
 * (Don't Repeat Yourself). A class can extend another class an inherit all of
 * its (non-private) defined fields and methods.
 */
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(fn, ln, date) {
        if (date === void 0) { date = new Date(); }
        // The 'super' keyword is used to reference the parent class
        // It's sort of like 'this' but for the parent
        // super() <--- super constructor
        // super.firstName <--- super class's firstName field
        _super.call(this, fn, ln);
        this.birthdate = date;
    }
    Child.prototype.sayHello = function () {
        var yearsOld = new Date().getFullYear() - this.birthdate.getFullYear();
        var name = this.firstName.replace('r', 'w');
        console.log("Hi mister, I'm " + name + " and I'm " + yearsOld + ".");
    };
    return Child;
})(Parent);
var myChild = new Child('Billy', 'Bob', new Date());
myChild.firstName; // valid, as defined on parent class
myChild.birthdate; // valid, as this is defined on child
myChild.sayHello(); // Hello mister ...
var myParent = new Parent('Abby', 'Addams');
myParent.firstName; // valid, as defined on Parent
// myParent.birthdate //invalid, not defined on Parent
myParent.sayHello(); // Hello, my name is ...
var secondChild = new Child('Freddy', 'Kruger');
// secondChild.birthdate;
secondChild.sayHello(); // ????
