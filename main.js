
const Person = function (firstName, birthYear) {
  // console.log(this) // {}
  this.firstName = firstName
  this.birthYear = birthYear



  // Never use this
  // this.calcAge = function () {
  //   console.log(2022 - birthYear)
  // }
}



Person.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
  return 2037 - this.birthYear
}




const hamzah = new Person("Hamzah", 2000)
const areeb = new Person("Areeb", 2000)
const arham = new Person("Arham", 2000)

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return object


// console.log(hamzah)
// console.log(hamzah.hasOwnProperty("calcAge"))




// class expression
// const PersonCl = class {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName
//     this.birthYear = birthYear
//   }
// }
// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }

  clacAge() {
    console.log(2037 - this.birthYear);
  }
}


const ali = new PersonCl("Ali", 2000)
const hamzah2 = new PersonCl("Hamzah", 2000)

console.log(ali)

