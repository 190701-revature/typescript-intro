/*
 * Interfaces are an object oriented programming structure that defines
 * what functionality an implementing class, without providing the implementation.
 *
 * Interfaces are meant to define what a class does, without the details of
 * how it does it. Classes can then implement the interface, but must define
 * methods that implemented the interface defined 'method signatures'.
 *
 * A method signature is basically a method declaration. It is the part that
 * comes before the method code block.
 *
 * Interfaces are contracts. They define and promise a given functionality to
 * consumers of your code. Interface methods must be public and are meant to define
 * the way in which other objects can interact with yours.
 *
 * Interfaces support the OOP pillar of 'abstraction'
 */
// Interfaces cannot be instantiated
// let e: ElevatorInterface = new ElevatorInterface();
// What we need to use an interface is an implementing class
var Elevator = (function () {
    function Elevator(initialFloor, bottomFloor, topFloor) {
        if (initialFloor === void 0) { initialFloor = 1; }
        if (bottomFloor === void 0) { bottomFloor = 1; }
        if (topFloor === void 0) { topFloor = 2; }
        this.floor = initialFloor;
        this.bottomFloor = bottomFloor;
        this.topFloor = topFloor;
    }
    /**
     * Invalid floor determines if the input floor is considered invalid.
     * A floor is invalid if either:
     * 1. It is not a whole number.
     * 2. It is outside of the range of bottom and top floor inclusive.
     * @param floor floor to check for validity
     * @returns true if floor is invalid, otherwise false
     */
    Elevator.prototype.invalidFloor = function (floor) {
        // Invalid if floor number is not a whole number
        if (floor % 1 !== 0)
            return true;
        if (floor > this.topFloor || floor < this.bottomFloor)
            return true;
        return false;
    };
    Elevator.prototype.goToFloor = function (floor) {
        if (this.invalidFloor(floor)) {
            console.log('Invalid floor!');
            return false;
        }
        // If they're going up
        if (floor > this.floor) {
            console.log('Going up!');
        }
        else if (floor === this.floor) {
            console.log('We\'re already there!');
        }
        else {
            console.log('Going down!');
        }
        this.floor = floor;
        return true;
    };
    return Elevator;
})();
var myElevator = new Elevator(1, 1, 10);
myElevator.goToFloor(3);
myElevator.goToFloor(2);
myElevator.goToFloor(2);
myElevator.goToFloor(2.5);
myElevator.goToFloor(25);
