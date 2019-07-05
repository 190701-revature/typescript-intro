import Transportation from './Transportation';
import Car from './Car';
import JetPack from './JetPack';

/*
 * Abstract classes are classes that cannot be instantiated.
 They provide a mechanism for defining a structure of classes even
 at an abstract level, where it would be reasonable to instantiate
 things of this type.

 Functionally, this means that abtract classes can define fields and 
 concrete methods, in addition to abstract methods.
 */


const myCar: Car = new Car('Prius', 3, 'AA', 20000, 4, 'Grey');



const myJetPack: JetPack = new JetPack('Phillip', 'jet fuel', 4000, 10);
const myTransportation: Array<Transportation> = [myCar, myJetPack];

const index = Math.floor(Math.random() * 2) 
const transportationForDay: Transportation = myTransportation[index];
transportationForDay.transport();