import Transportation from './Transportation';


export default class Car extends Transportation {

    doorCount: number;
    color: string;

    constructor(name: string, occupancy: number, fuelSource: string,
                cost: number, doorCount: number, color: string) {
        super(name, occupancy, fuelSource, cost);
        this.doorCount = doorCount;
        this.color = color;
    }
    
    transport() {
        console.log('vroom vroom!');
    }
}