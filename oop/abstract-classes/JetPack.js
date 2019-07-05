var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Transportation_1 = require('./Transportation');
var JetPack = (function (_super) {
    __extends(JetPack, _super);
    function JetPack(name, fuelSource, cost, maxSafeElevation) {
        _super.call(this, name, 1, fuelSource, cost);
        this.maxSafeElevation = maxSafeElevation;
    }
    JetPack.prototype.transport = function () {
        console.log('Weeee!');
    };
    return JetPack;
})(Transportation_1["default"]);
exports["default"] = JetPack;
