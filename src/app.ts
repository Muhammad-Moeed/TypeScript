// interface newh {
//     id: number,
//     name:string
//     }
//     let myType:newh = { id: 1, name: "Moeed" };
    
//     let staleObject = { id: 2, name: "Ali", age: 25 };
    
//     myType = staleObject;
//     console.log(myType)

//     const enum Colors {
//         Red,
//         Green,
//         Blue
//       }
      
//       let myColor = Colors.Green;
//       console.log(myColor);

//       const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);


// Classes

class StudentInfo {
  private name: string;
  position: number;

  constructor(n: string, p: number) {
    this.name = n;
    this.position = p;
  }

  getName() {
    return this.name;
  }

  setName(userName: string) {
    this.name = userName;
  }
}

let newStd = new StudentInfo("Ali", 2);
newStd.setName('John');
console.log(newStd);


