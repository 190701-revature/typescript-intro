/* Pillars of Object Oriented Programming

1. abtraction:
    a. What is it?
        The idea of writing code that is abstract. Focus on "what", not "how".
        By writing abstract, we can plan how systems should interact at a purely
        conceptual basis without being bogged down in the details of how the 
        implementation should actually be accomplished.

    b. How it is implemented?
        Use interfaces and abstract classes to define abstract methods.

2. encapsulation
    a. What is it?
        Encapsulation is the idea of a class encapsulating its own state, such that
        it has the power to manage its state.  (State is the summation of the values
        of its fields).

    b. How it is implemented?
        We make fields private and provide access to them using methods.
        Traditionally, these methos are called 'getters and setters' or
        'accessor and mutators'.


3. Inheritance
    a. What is it?
        Inheritance is the idea that we can avoid repeatedly defining similar
        code and classes, by extending existing code, making it reusable.
    b. How is it implemented?
        By using the 'extends' keyword to have a class extend another, thus
        granting access to its defined (non-private) fields and methods.

4. Polymorphism
    a. What is it?
        Is the adaptability of code to be treated in an abstract form but to
        utilize the detailed and refined methods and fields that implemantations
        may define, even when we don't know what specific types they are. 
        Polymorphism allows us to write flexible code with behavior that 
        changes based on what types it is given.

    b. How do we implement it?
        Overriding - The ability for a subclass or implementation of an interface
        to override a defined method from an extended or implemented parent. By
        doing this, the child's behavior will be substituted over the parent's.
        
        Polymophic references - Usage of type references of parent or interface
        types in variable and field declaration.

        "Overloading" - (In other languages) is creating multiple methods with
        the same name, but different implementatings, generally varying by
        arguments. Thus, behavior differs based on what you are given.

        JavaScript doesn't have language support for overloading, but we can still
        provide multiple implementations through logic. TypeScript has support for
        multiple method signatures to define what various 'overloads' could look like,
        however, you must still provide a single implementation.
 * 
 */