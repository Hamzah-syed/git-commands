
// const Person = function (firstName, birthYear) {
// console.log(this) // {}
// this.firstName = firstName
// this.birthYear = birthYear



// Never use this
// this.calcAge = function () {
//   console.log(2022 - birthYear)
// }
// }



// Person.prototype.calcAge = function () {
//   // console.log(2037 - this.birthYear);
//   return 2037 - this.birthYear
// }




// const hamzah = new Person("Hamzah", 2000)
// const areeb = new Person("Areeb", 2000)
// const arham = new Person("Arham", 2000)

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return object


// console.log(hamzah)
// console.log(hamzah.hasOwnProperty("calcAge"))




// class expression
// const User = class {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName
//     this.birthYear = birthYear
//   }
// }
// class declaration

class UserCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
}


class AdminCl extends UserCl {
  constructor(firstName, birthYear, salary) {
    super(firstName, birthYear)
    this.salary = salary
  }
}
class AuthorCl extends AdminCl {
  constructor(firstName, birthYear, salary) {
    super(firstName, birthYear, salary)
    this.books = []
  }
}






console.log(hamzah)




// class User {
//   constructor(firstName, birthYear) {
//     if (new.target.name === "User") {
//       throw new Error("Abstracted class")
//     }

//     this.firstName = firstName
//     this.birthYear = birthYear

//   }

//   clacAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// class AdminCl extends User {
//   constructor(firstName, birthYear) {
//     super(firstName, birthYear)
//     this.salary = 10000
//   }
// }

// // const ali = new User("Ali", 2000)
// const hamzah2 = new AdminCl("Hamzah", 2000)
// // console.log(ali)
// console.log(hamzah2)

