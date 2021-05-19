// Q1 Q2 Q3

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     // Getter
//     get area() {
//       return this.calcArea();
//     }
//     // Method
//     calcArea() {
//       return this.height * this.width;
//     }
//   }
//   console.log(Rectangle.name);
  
//   const square = new Rectangle(4, 5);
  
//   console.log(square.area);

// Q4 Q5 Q6
// function Person() {
//     this.firstName = "unknown";
//     this.middleName = "unknown";
//     this.lastName = "unknown";
//     this.getFullName = function(){
//         return this.firstName + " " + this.middleName + " " + this.lastName;
//     }
// };

// // var person1 = new Person();
// // person1.firstName = "Steve";
// // person1.lastName = "jackob";

// var person1 = new Person();
// person1.firstName = "Steve";
// person1.middleName = "charle";
// person1.lastName = "jackob";


// console.log(person1.getFullName());

// var person2 = new Person();
// person2.firstName = "mark";
// person2.middleName = "Steve";
// person2.lastName = "jackob";

// console.log(person2.getFullName());

// var str = '({"firstName":"Bill","lastName":"Gates"})';

// var obj = eval(str);

// console.log(obj.firstName);

// Q7
// var json = `{
//     "person": {
//         "fname": "Harry Potter and the Goblet of Fire",
//         "author": "J. K. Rowling",
//         "year": 2000,
//         "characters": ["Harry Potter", "Hermione Granger", "Ron Weasley"],
//         "genre": "Fantasy Fiction",
//         "price": {
//             "paperback": "$10.40", "hardcover": "$20.32", "kindle": "$4.11"
//         }
//     }
// }`;

class person {
        constructor(fname, lname,age,skills,address,dateOfBirth,married,profession) {
          this.fname = fname;
          this.lname = lname;
          this.age= age;
          this. skills=skills
          this.address=address;
          this.dateOfBirth = dateOfBirth;
          this.married= married;
          this.profession= profession;
        }
        // Getter
        get print() {
          return this.printfun();
        }
        // Method
        printfun() {
          return  this.fname + " " + this.lname +" " +  this.age + " " + this. skills +  " " +  this.address +" " +  this.dateOfBirth + " " + this.married + " " +  this.profession;
        }
    }
    
    var person1 = new person("nikhil","goud","22","c","24/10/1996","hydrabad","false","sr analyst");
    var person2 = new person("harish","chinna","21","HTML","24/10/1997","Ameertpet","false","jr analyst");

    console.log(person1.print);
    console.log(person2.print);