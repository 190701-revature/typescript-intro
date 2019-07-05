export default abstract class Transportation {
    name: string;
    occupancy: number;
    fuelSource: string;
    cost: number;

    constructor(name: string, occupancy: number, fuelSource: string,
               cost: number) {
        this.name = name;
        this.occupancy = occupancy;
        this.fuelSource = fuelSource;
        this.cost = cost;
    }

    getOccupancy(): number {
        return this.occupancy;
    }

    // Note: In an interface all methods are assumed to be abstract.
    // In an abstract class, abstract methods must be declared with the
    // keyword abstract.
    abstract transport(): void;
}