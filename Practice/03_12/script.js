/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class Person {
  constructor(age, name, address, job) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.job = job;
  }
  updateInfo(field, info) {
    this[field] = info;
  }
}

const rohan = new Person(20, "rohan", "my address", "software engineer intern");
console.log(rohan);
rohan.updateInfo("age", 19);
console.log(rohan);
