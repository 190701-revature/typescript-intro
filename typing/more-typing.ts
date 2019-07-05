/**
 * Static typing in TypeScript is Optional(!)
 * It is not mandatory.
 * It will, at times, infer typing, although this can be configured.
 */

// We can use the type 'any' to declare that it could be of any type
// this means that this will have no static type checking
let untyped: any = 15;

untyped = 'string';

// We can provide multiple possible types by separating them with
// a pipe
let multityped : number | string = untyped;

// I can't assign multityped to myNewString because multityped may be either
// a string or a number, and myNewString must be a string
// let myNewString: string = multityped;

// casting - explicitly conveying the type information to the compiler
// I'm telling the compiler to trust me that multityped is, in fact, a string
// by using the <string> syntax. It is now my responsibility to ensure that.
let myNewString: string = <string> multityped;