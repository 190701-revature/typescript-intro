// Generic typing is providing type information to classes for their internal
// use.  This often means, what kind of 'thing' should the class utilize.
// Very frequently used for data structure.

// Generics give us the ability to label containing classes for what they should
// contain or use

const myArr: Array<number> = [];

myArr.push(1);
myArr.push(15);

// myArr.push('cat'); // myArr is an array of numbers, strings can't go in!
const myNum: number = myArr[0];
// const myCat: string = myArr[1];

// don't do any of this:

// myArr['cat'] = 20;
// myArr['dog'] = 'fish';
// myArr.dog;