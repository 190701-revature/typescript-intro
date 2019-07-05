var Transportation = (function () {
    function Transportation(name, occupancy, fuelSource, cost) {
        // Note: In an interface all methods are assumed to be abstract.
        // In an abstract class, abstract methods must be declared with the
        // keyword abstract.
        this.abstract = transport();
        this.name = name;
        this.occupancy = occupancy;
        this.fuelSource = fuelSource;
        this.cost = cost;
    }
    Transportation.prototype.getOccupancy = function () {
        return this.occupancy;
    };
    return Transportation;
})();
