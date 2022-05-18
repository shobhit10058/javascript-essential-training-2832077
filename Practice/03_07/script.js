/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const rohan = {
  name: "rohan",
  age: 20,
  height: 170,
  weight: 70,
};

const mohan = {
  name: "Mohan",
  age: 25,
  height: 160,
  weight: 90,
};

const room = {
  length: 10,
  breadth: 200,
  lighted: true,
  toggleLight() {
    console.log(this.lighted);
    console.log("toggle light is called");
    this.lighted = this.lighted ? false : true;
    console.log(this.lighted);
  },
  persons: [rohan, mohan],
};

console.log(room);
room.toggleLight();
console.log(room);
