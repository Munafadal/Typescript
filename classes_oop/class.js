var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getInfo = function () {
        return "".concat(this.make, " ").concat(this.model, " was made in ").concat(this.year);
    };
    return Car;
}());
var myCar = new Car("BMW", "X5", 2025);
console.log(myCar.getInfo());
var yourCar = new Car("Toyato", "V8", 2020);
console.log(yourCar.getInfo());
console.log(yourCar.make);
