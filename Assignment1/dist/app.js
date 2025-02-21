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
console.log(`Task #1  Output \n`);
const checkUser = createUser(newUser);
console.log(checkUser);
console.log(`\n`);
const processInput = (input) => {
    if (typeof input === 'number') {
        return `Number: ${input}`;
    }
    else {
        return `String: ${input}`;
    }
};
console.log(`Task #2  Output \n`);
console.log(processInput(42));
console.log(processInput("Hello"));
console.log(`\n`);
// ********************Task : 03*********************
class Vehicle {
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
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    getInfo() {
        return `${super.getInfo()} ${this.doors} `;
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }
    getInfo() {
        return `${super.getInfo()} ${this.hasSidecar} `;
    }
}
console.log(`Task #3  Output \n`);
const car = new Car("BMW", "new", 2024, 4);
console.log(car.getInfo());
const motorcycle = new MotorCycle("Alto", "660cc", 2019, false);
console.log(motorcycle.getInfo());
console.log(`\n`);
// ********************Task : 04*********************
class bankAccount {
    constructor(accountNumber, Balance) {
        this.isbalance = 0;
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
console.log(`Task #4  Output \n`);
let Account = new bankAccount('6234204', 1000);
console.log(`Account Number: ${Account.accountNumber}`);
console.log(`Initial Balance: ${Account.balance}`);
// console.log(Account.isbalance) # Error 
console.log(`Your balance is ${Account.balance}`);
Account.deposit(800);
Account.withdraw(500);
console.log('Thanks You M Moeed!');
console.log(`\n`);
// ********************Task : 05*********************
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return 3.14159 ** this.radius;
    }
}
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
console.log(`Task # 5 Output \n`);
const myCircle = new Circle("Red", 7);
console.log(`Circle Color: ${myCircle.getColor()}`);
console.log(`Circle Area: ${myCircle.calculateArea()}`);
const myRectangle = new Rectangle("Blue", 8, 8);
console.log(`Rectangle Color: ${myRectangle.getColor()}`);
console.log(`Rectangle Area: ${myRectangle.calculateArea()}`);
console.log(`\n`);
function createProduct(product) {
    return product;
}
const newProduct = {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics"
};
console.log(`Task # 6 Output \n`);
console.log(createProduct(newProduct));
console.log(`\n`);
// ********************Task : 07*********************
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `Employee: ${this.name}, Salary: $${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
        this.programmingLanguage = programmingLanguage;
    }
    getDetails() {
        return `Developer: ${this.name}, Salary: ${this.salary}, Programming Language: ${this.programmingLanguage}`;
    }
}
class Designer extends Employee {
    constructor(name, salary, toolUsed) {
        super(name, salary);
        this.toolUsed = toolUsed;
        this.toolUsed = toolUsed;
    }
    getDetails() {
        return `Designer: ${this.name}, Salary: ${this.salary}, Tool Used: ${this.toolUsed}`;
    }
}
console.log(`Task # 7 Output \n`);
const developer = new Developer("Ahmed", 200000, "Python");
const designer = new Designer("M Moeed", 150000, "AnaConda");
console.log(developer.getDetails());
console.log(designer.getDetails());
console.log(`\n`);
// ********************Task : 08*********************
class Student {
    constructor(name, school, studentID) {
        this.grades = [];
        this.name = name;
        this.school = school;
        this.studentID = studentID;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getAverageGrade() {
        if (this.grades.length === 0)
            return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade);
        return sum / this.grades.length;
    }
    getStudent() {
        return `Name : ${this.name} Grades: ${this.grades} School: ${this.school} StudentId: ${this.studentID}`;
    }
}
console.log(`Task # 8 Output \n`);
const student1 = new Student("M Moeed", "SM Public School", 254118);
console.log(`Student Name: ${student1.name} \nStudent ID: ${student1.studentID}`);
student1.addGrade(40);
student1.addGrade(95);
console.log(`Average: ${student1.getAverageGrade()}`);
console.log(`\n`);
function handleResponse(response) {
    if ("data" in response) {
        console.log(`Data received: ${response.data}`);
    }
    else {
        console.log(`Error occurred: ${response.error}`);
    }
}
const success = {
    success: true,
    data: "Agaya Apun hurrah!"
};
const error = {
    success: false,
    error: "Nhi Aya"
};
console.log(`Task # 9 Output \n`);
handleResponse(success);
handleResponse(error);
console.log(`\n`);
// ********************Task : 10*********************
class Animal {
    constructor(species) {
        this.species = species;
    }
    getSpecies() {
        return this.species;
    }
}
class Dog extends Animal {
    makeSound() {
        return "Woof!";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }
}
console.log(`Task # 10 Output \n`);
const dog = new Dog("Percian Dog");
const cat = new Cat("Percian Cat");
console.log(dog.getSpecies());
console.log(dog.makeSound());
console.log(cat.getSpecies());
console.log(cat.makeSound());
console.log(`\n`);
//# sourceMappingURL=app.js.map