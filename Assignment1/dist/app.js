"use strict";
// ********************Task : 01*********************
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return user;
}
const newUser = {
    id: 254118,
    name: "Muhammad Moeed",
    email: "moeed123@gmail.com",
    isActive: true,
};
const checkUser = createUser(newUser);
console.log(checkUser);
const processInput = (input) => {
    if (typeof input === 'number') {
        return `Number: ${input}`;
    }
    else {
        return `String: ${input}`;
    }
};
// ********************Task : 03*********************
class Vehicle {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
class Car extends Vehicle {
    doors;
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    getInfo() {
        return `${super.getInfo()} ${this.doors} `;
    }
}
class MotorCycle extends Vehicle {
    hasSidecar;
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }
    getInfo() {
        return `${super.getInfo()} ${this.hasSidecar} `;
    }
}
const car = new Car("BMW", "new", 2024, 4);
console.log(car.getInfo());
const motorcycle = new MotorCycle("Alto", "660cc", 2019, false);
console.log(motorcycle.getInfo());
// ********************Task : 04*********************
class bankAccount {
    isbalance = 0;
    isAccountNumber;
    constructor(accountNumber, Balance) {
        this.isAccountNumber = accountNumber;
        this.isbalance = Balance;
    }
    get balance() {
        return this.isbalance;
    }
    get accountNumber() {
        return this.isAccountNumber;
    }
    deposit(amount) {
        this.isbalance += amount;
        console.log(`Your deposit Amount is: ${amount}. & Total Amount now is: ${this.isbalance}`);
    }
    withdraw(amount) {
        if (amount > this.isbalance) {
            throw new Error(`Your withdraw amount is greator than, your balance is ${this.isbalance}`);
        }
        this.isbalance -= amount;
        console.log(`Withdrawn: ${amount}. Remaining balance: ${this.isbalance}`);
    }
}
let Account = new bankAccount('6234204', 1000);
console.log(`Account Number: ${Account.accountNumber}`);
console.log(`Initial Balance: ${Account.balance}`);
// console.log(Account.isbalance) # Error 
console.log(`Your balance is ${Account.balance}`);
Account.deposit(800);
Account.withdraw(500);
console.log('Thanks You M Moeed!');
// ********************Task : 05*********************
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return 3.14159 ** this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const myCircle = new Circle("Red", 7);
console.log(`Circle Color: ${myCircle.getColor()}`);
console.log(`Circle Area: ${myCircle.calculateArea()}`);
const myRectangle = new Rectangle("Blue", 8, 8);
console.log(`Rectangle Color: ${myRectangle.getColor()}`);
console.log(`Rectangle Area: ${myRectangle.calculateArea()}`);
//# sourceMappingURL=app.js.map