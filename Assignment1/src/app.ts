// ********************Task : 01*********************

interface User {
    id: number
    name: string
    email: string
    isActive: boolean
}
function createUser(user: User): User {
    return user
}

const newUser: User = {
    id: 254118,
    name: "Muhammad Moeed",
    email: "moeed123@gmail.com",
    isActive: true,
}

console.log(`Task #1  Output \n`)
const checkUser = createUser(newUser)
console.log(checkUser)
console.log(`\n`)

// ********************Task : 02*********************

type Input = number | string

const processInput = (input: Input): string => {
    if (typeof input === 'number') {
        return `Number: ${input}`
    } else {
        return `String: ${input}`
    }
}

console.log(`Task #2  Output \n`)
console.log(processInput(42))
console.log(processInput("Hello"))
console.log(`\n`)

// ********************Task : 03*********************

class Vehicle {
    make: string
    model: string
    year: number

    constructor(make: string, model: string, year: number) {
        this.make = make
        this.model = model
        this.year = year
    }
    getInfo(): string {
        return `${this.year} ${this.make} ${this.model}`
    }
}

class Car extends Vehicle {
    doors: number

    constructor(make: string, model: string, year: number, doors: number) {
        super(make, model, year)
        this.doors = doors
    }
    getInfo(): string {
        return `${super.getInfo()} ${this.doors} `
    }
}
class MotorCycle extends Vehicle {
    hasSidecar: boolean

    constructor(make: string, model: string, year: number, hasSidecar: boolean) {
        super(make, model, year)
        this.hasSidecar = hasSidecar
    }
    getInfo(): string {
        return `${super.getInfo()} ${this.hasSidecar} `
    }
}

console.log(`Task #3  Output \n`)
const car = new Car("BMW", "new", 2024, 4)
console.log(car.getInfo())

const motorcycle = new MotorCycle("Alto", "660cc", 2019, false)
console.log(motorcycle.getInfo())
console.log(`\n`)

// ********************Task : 04*********************

class bankAccount {
    private isbalance: number = 0
    readonly isAccountNumber: string

    constructor(accountNumber: string, Balance: number) {
        this.isAccountNumber = accountNumber
        this.isbalance = Balance
    }
    get balance(): number {
        return this.isbalance
    }
    get accountNumber(): string {
        return this.isAccountNumber
    }
    deposit(amount: number): void {
        this.isbalance += amount
        console.log(`Your deposit Amount is: ${amount}. & Total Amount now is: ${this.isbalance}`)
    }
    withdraw(amount: number): void {
        if (amount > this.isbalance) {
            throw new Error(`Your withdraw amount is greator than, your balance is ${this.isbalance}`)
        }
        this.isbalance -= amount
        console.log(`Withdrawn: ${amount}. Remaining balance: ${this.isbalance}`)
    }
}

console.log(`Task #4  Output \n`)
let Account = new bankAccount('6234204', 1000)
console.log(`Account Number: ${Account.accountNumber}`)
console.log(`Initial Balance: ${Account.balance}`)
// console.log(Account.isbalance) # Error 

console.log(`Your balance is ${Account.balance}`)
Account.deposit(800)
Account.withdraw(500)
console.log('Thanks You M Moeed!')
console.log(`\n`)

// ********************Task : 05*********************

abstract class Shape {
    protected color: string
    constructor(color: string) {
        this.color = color
    }
    abstract calculateArea(): number
    getColor(): string {
        return this.color
    }
}

class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color)
    }
    calculateArea(): number {
        return 3.14159 ** this.radius
    }
}

class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number) {
        super(color)
    }
    calculateArea(): number {
        return this.width * this.height
    }
}

console.log(`Task # 5 Output \n`)
const myCircle = new Circle("Red", 7)
console.log(`Circle Color: ${myCircle.getColor()}`)
console.log(`Circle Area: ${myCircle.calculateArea()}`)

const myRectangle = new Rectangle("Blue", 8, 8)
console.log(`Rectangle Color: ${myRectangle.getColor()}`)
console.log(`Rectangle Area: ${myRectangle.calculateArea()}`)
console.log(`\n`)


// ********************Task : 06*********************

interface Product {
    id: number
    name: string
    price: number
    category: string
}

function createProduct(product: Product): Product {
    return product
}

const newProduct: Product = {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics"
}

console.log(`Task # 6 Output \n`)
console.log(createProduct(newProduct))
console.log(`\n`)

// ********************Task : 07*********************

class Employee {
    name: string
    salary: number

    constructor(name: string, salary: number) {
        this.name = name
        this.salary = salary
    }
    getDetails() {
        return `Employee: ${this.name}, Salary: $${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number, public programmingLanguage: string) {
        super(name, salary)
        this.programmingLanguage = programmingLanguage
    }
    getDetails() {
        return `Developer: ${this.name}, Salary: ${this.salary}, Programming Language: ${this.programmingLanguage}`
    }
}

class Designer extends Employee {
    constructor(name: string, salary: number, public toolUsed: string) {
        super(name, salary)
        this.toolUsed = toolUsed
    }
    getDetails() {
        return `Designer: ${this.name}, Salary: ${this.salary}, Tool Used: ${this.toolUsed}`
    }
}

console.log(`Task # 7 Output \n`)
const developer = new Developer("Ahmed", 200000, "Python")
const designer = new Designer("M Moeed", 150000, "AnaConda")
console.log(developer.getDetails())
console.log(designer.getDetails())
console.log(`\n`)

// ********************Task : 08*********************

class Student {
    public name: string
    private grades: number[] = []
    protected school: string
    readonly studentID: number

    constructor(name: string, school: string, studentID: number) {
        this.name = name
        this.school = school
        this.studentID = studentID
    }

    addGrade(grade: number): void {
        this.grades.push(grade)
    }

    getAverageGrade(): number {
        if (this.grades.length === 0) return 0
        const sum = this.grades.reduce((acc, grade) => acc + grade)
        return sum / this.grades.length
    }

    getStudent() {
        return `Name : ${this.name} Grades: ${this.grades} School: ${this.school} StudentId: ${this.studentID}`
    }
}

console.log(`Task # 8 Output \n`)
const student1 = new Student("M Moeed", "SM Public School", 254118)
console.log(`Student Name: ${student1.name} \nStudent ID: ${student1.studentID}`)
student1.addGrade(40)
student1.addGrade(95)
console.log(`Average: ${student1.getAverageGrade()}`)
console.log(`\n`)

// console.log(student1.grades) # Error
// console.log(student1.school) # Error

// ********************Task : 09*********************
type Response = {
    success: true
    data: string
} | {
    success: false
    error: string
}

function handleResponse(response: Response) {
    if ("data" in response) {
        console.log(`Data received: ${response.data}`)
    } else {
        console.log(`Error occurred: ${response.error}`)
    }
}

const successResponse: Response = {
    success: true,
    data: "Agaya Apun hurrah!"
}
const errorResponse: Response = {
    success: false,
    error: "Nhi Aya"
}

console.log(`Task # 9 Output \n`)
handleResponse(successResponse)
handleResponse(errorResponse)
console.log(`\n`)