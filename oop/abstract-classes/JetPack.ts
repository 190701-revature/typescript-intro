import Transportation from './Transportation';

export default class JetPack extends Transportation {

    maxSafeElevation: number;
    constructor(name: string, fuelSource: string, 
                cost: number, maxSafeElevation: number) {
        super(name, 1, fuelSource, cost);
        this.maxSafeElevation = maxSafeElevation;
    }

    transport() {
        console.log('Weeee!');
    }
}