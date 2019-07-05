var Car_1 = require('./Car');
var JetPack_1 = require('./JetPack');
/*
 * Abstract classes are classes that cannot be instantiated.
 They provide a mechanism for defining a structure of classes even
 at an abstract level, where it would be reasonable to instantiate
 things of this type.

 Functionally, this means that abtract classes can define fields and
 concrete methods, in addition to abstract methods.
 */
var myCar = new Car_1["default"]('Prius', 3, 'AA', 20000, 4, 'Grey');
var myJetPack = new JetPack_1["default"]('Phillip', 'jet fuel', 4000, 10);
var myTransportation = [myCar, myJetPack];
var index = Math.floor(Math.random() * 2);
var transportationForDay = myTransportation[index];
transportationForDay.transport();
