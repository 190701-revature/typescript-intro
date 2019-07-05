class Example {
    // What is static? Field or method that is related to class and not
    // instances of the class. For a field, this means that there is only 
    // ONE value shared between all instances.
    static staticField: string;

    // Static methods are also associated with the class and not instances
    // of that class. Consequently, methods that are declared static cannot
    // use the 'this' keyword. Static methods are largely used for helper methods
    // that do common tasks that don't require an instance.
    static myStaticMethod() {

    }

    readonly unchangingField: string;
}