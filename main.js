const Person = function (firstName, birthYear) {
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


console.log(hamzah.__proto__)

// console.log(areeb)

  // 1. New {} is created
  // 2. function is called, this = {}
  // 3. {} linked to prototype
  // 4. function automatically return object