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

type APIResponse = {
    success: true
    data: string
} | {
    success: false
    error: string
}

function handleResponse(response: APIResponse) {
    if ("data" in response) {
        console.log(`Data received: ${response.data}`)
    } else {
        console.log(`Error occurred: ${response.error}`)
    }
}

const success: APIResponse = {
    success: true,
    data: "Data Successfully!"
}
const error: APIResponse = {
    success: false,
    error: "Data Not Found!"
}

console.log(`Task # 9 Output \n`)
handleResponse(success)
handleResponse(error)
console.log(`\n`)

// ********************Task : 10*********************

abstract class Animal {
    protected species: string

    constructor(species: string) {
        this.species = species
    }

    abstract makeSound(): string
    getSpecies(): string {
        return this.species
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "Woof!"
    }
}
class Cat extends Animal {
    makeSound(): string {
        return "Meow!"
    }
}

console.log(`Task # 10 Output \n`)
const dog = new Dog("Percian Dog")
const cat = new Cat("Percian Cat")

console.log(dog.getSpecies())
console.log(dog.makeSound())
console.log(cat.getSpecies())
console.log(cat.makeSound())
console.log(`\n`)

// ********************Task : 11*********************

let findIndex = <diffTypes>(arr: diffTypes[], value: diffTypes): number => {
    return arr.indexOf(value)
}

console.log(`Task # 11 Output \n`)
console.log(`Numbers Array index is ${findIndex<number>([5, 4, 6, 3], 30)}`)
console.log(`String Array index is ${findIndex<string>(["apple", "banana", "cherry"], "banana")}`)
console.log(`\n`)

// ********************Task : 12*********************

interface car {
    drive: () => string
}
interface Bike {
    ride: () => string
}

function useVehicle(vehicle: car | Bike): void {
    if ("drive" in vehicle) {
        console.log(vehicle.drive())
    } else {
        console.log(vehicle.ride())
    }
}

const myCar: car = {
    drive: () => "Driving a car!",
}
const myBike: Bike = {
    ride: () => "Riding a bike!",
}

console.log(`Task # 12 Output \n`)
useVehicle(myCar)
useVehicle(myBike)
console.log(`\n`)

// ********************Task : 13*********************

interface Person {
    name: string
    age: number
}
interface Employe {
    jobTitle: string
}
type FullTimeEmployee = Person & Employe

const describeEmployee = (emp: FullTimeEmployee) => {
    return `Name: ${emp.name}\nAge: ${emp.age}\nJobTitle: ${emp.jobTitle}`
}

const FullTimeEmployee: FullTimeEmployee = {
    name: "M Moeed",
    age: 17,
    jobTitle: "Frontend Developer"
}

console.log(`Task # 13 Output \n`)
console.log(describeEmployee(FullTimeEmployee))
console.log(`\n`)

// ********************Task : 14*********************

interface DogPet {
    bark: () => string
}
interface CatPet {
    meow: () => string
}
type Pet = DogPet | CatPet

const makeSound = (pet: Pet): void => {
    if ("bark" in pet) {
        console.log(pet.bark())
    } else {
        console.log(pet.meow())
    }
}

const dogPet: DogPet = {
    bark: () => "Woof!"
}
const catPet: CatPet = {
    meow: () => "Meow!"
}

console.log(`Task # 14 Output \n`)
makeSound(dogPet)
makeSound(catPet)
console.log(`\n`)

// ********************Task : 15*********************

interface GeometricShape {
    calculateArea: () => number
    getType: () => string
}

class CircleShape implements GeometricShape {
    private radius: number

    constructor(radius: number) {
        this.radius = radius
    }

    calculateArea = (): number => {
        return 3.1416 * this.radius **2  
    }

    getType = (): string => {
        return "Circle"
    }
}

console.log(`Task # 15 Output \n`)
let GeometricCircle = new CircleShape(5)
console.log(`Area: ${GeometricCircle.calculateArea()}`)
console.log(GeometricCircle.getType())
console.log(`\n`)