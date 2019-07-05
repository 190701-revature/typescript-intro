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

/*
    Document Comments (DocComments)
    DocComments are comments that are started with /**
    These comment blocks represent documentation in code.
    The IDE and other tools will read these, process them,
    and provide them to developers when they try to access things
    defined with them. In addition, we can use doc comments to produce
    documentation from the code.
*/

/**
 * ElevatorInterface represents some object that is a kind of elevator
 * and can be interacted with by pressing a button to go to a specific
 * floor.
 */
interface ElevatorInterface {

    /**
     * goToFloor should be called to designate that the user wants to travel
     * to another floor. 
     * @param floor - the floor chosen to move to.
     * @returns Returns true when the input is considered valid and
     * the elevator intends to go to this floor. False should indicate that 
     * elevator considers the floor invalid.
     */
    goToFloor(floor: number): boolean;
}

// Interfaces cannot be instantiated
// let e: ElevatorInterface = new ElevatorInterface();

// What we need to use an interface is an implementing class

class Elevator implements ElevatorInterface {
    // In order to implement ElevatorInterface correctly, I must properly
    // implement all of the interfaces 'abstract methods'
    // Abstract method is a method with no implementation
    floor: number;
    bottomFloor: number;
    topFloor: number;

    constructor(initialFloor: number = 1, 
                bottomFloor: number = 1, 
                topFloor: number = 2) {
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
    private invalidFloor(floor: number): boolean {
        // Invalid if floor number is not a whole number
        if (floor % 1 !== 0) 
            return true;

        if (floor > this.topFloor || floor < this.bottomFloor) 
            return true;

        return false;
    }

    goToFloor(floor: number): boolean {
    
        if(this.invalidFloor(floor)) {
            console.log('Invalid floor!');
            return false;
        }
    
        // If they're going up
        if (floor > this.floor) {
            console.log('Going up!');
        } else if (floor === this.floor) {
            console.log('We\'re already there!');
        } else {
            console.log('Going down!');
        }

        this.floor = floor;
        return true;
    }
}

// 1. Creating a constant reference variable called myElevator
// 2. Typing to a ElevatorInterface
// 3. Creating instance of the Elevator class (which is a kind of ElevatorInterface)
const myElevator: ElevatorInterface = new Elevator(1, 1, 10);
myElevator.goToFloor
myElevator.goToFloor(3);
myElevator.goToFloor(2);
myElevator.goToFloor(2);
myElevator.goToFloor(2.5);
myElevator.goToFloor(25);
