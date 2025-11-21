class Car {
  constructor(
    public make: string,
    public model: string,
    private year: number
  ) {}

  getInfo() {
    return `${this.make} ${this.model} was made in ${this.year}`;
  }
}

let myCar = new Car("BMW", "X5", 2025);
console.log(myCar.getInfo());

let yourCar = new Car("Toyato", "V8", 2020);
console.log(yourCar.getInfo());

console.log(yourCar.make);
