var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Transportation_1 = require('./Transportation');
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(name, occupancy, fuelSource, cost, doorCount, color) {
        _super.call(this, name, occupancy, fuelSource, cost);
        this.doorCount = doorCount;
        this.color = color;
    }
    Car.prototype.transport = function () {
        console.log('vroom vroom!');
    };
    return Car;
})(Transportation_1["default"]);
exports["default"] = Car;
