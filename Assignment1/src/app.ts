        // ********************Task : 01*********************

interface User {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}
function createUser(user: User): User {
    return user;
}

const newUser: User = {
    id: 254118,
    name: "Muhammad Moeed",
    email: "moeed123@gmail.com",
    isActive: true,
};

const checkUser = createUser(newUser);
console.log(checkUser);

        // ********************Task : 02*********************

type Input = number | string

const processInput = (input: Input): string => {
    if (typeof input === 'number') {
        return `Number: ${input}`;
    } else {
        return `String: ${input}`;
    }
}

        // ********************Task : 03*********************

class Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle{
    doors : number;

    constructor(make: string, model: string, year: number, doors: number) {
        super(make, model, year);
        this.doors = doors;
    }
    getInfo(): string {
        return `${super.getInfo()} ${this.doors} `; 
      }

}
class MotorCycle extends Vehicle{
    hasSidecar : boolean;

    constructor(make: string, model: string, year: number, hasSidecar: boolean) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }
    getInfo(): string {
        return `${super.getInfo()} ${this.hasSidecar} `;
      }
}

const car = new Car("BMW", "new", 2024, 4);
console.log(car.getInfo());

const motorcycle = new MotorCycle("Alto", "660cc", 2019, false);
console.log(motorcycle.getInfo());

        // ********************Task : 04*********************

class bankAccount{
    private isbalance : number = 0;
    readonly isAccountNumber : string;
    
    constructor(accountNumber: string, Balance :number) {
        this.isAccountNumber = accountNumber;
        this.isbalance = Balance
    }
    get balance(): number {
        return this.isbalance;
    }
    get accountNumber(): string {
        return this.isAccountNumber;
    }
    deposit(amount: number): void {
            this.isbalance += amount;
            console.log(`Your deposit Amount is: ${amount}. & Total Amount now is: ${this.isbalance}`);
    }
    withdraw(amount: number): void {
        if (amount > this.isbalance) {
            throw new Error(`Your withdraw amount is greator than, your balance is ${this.isbalance}`);
        }
        this.isbalance -= amount;
        console.log(`Withdrawn: ${amount}. Remaining balance: ${this.isbalance}`);
    }

}

let Account = new bankAccount('6234204',1000)
console.log(`Account Number: ${Account.accountNumber}`); 
console.log(`Initial Balance: ${Account.balance}`); 
// console.log(Account.isbalance) # Error 

console.log(`Your balance is ${Account.balance}`)
Account.deposit(800)
Account.withdraw(500)
console.log('Thanks You M Moeed!')

        // ********************Task : 05*********************

abstract class Shape{
    protected color: string;
    constructor(color: string) {
        this.color = color;
    }
    abstract calculateArea():number;
    getColor(): string {
        return this.color;
    }  
}

class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color);
    }
    calculateArea(): number {
        return 3.14159 ** this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number) {
        super(color);
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

const myCircle = new Circle("Red", 7);
console.log(`Circle Color: ${myCircle.getColor()}`);
console.log(`Circle Area: ${myCircle.calculateArea()}`);

const myRectangle = new Rectangle("Blue", 8, 8);
console.log(`Rectangle Color: ${myRectangle.getColor()}`);
console.log(`Rectangle Area: ${myRectangle.calculateArea()}`);