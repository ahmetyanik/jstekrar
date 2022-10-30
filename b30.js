const person = {
  p1: "ahmet",
  p2: "mehmet",
  p3: "Veli",
  p4: "hakan",
};

console.log(Object.keys(person));

for (let i = 0; i < Object.keys(person).length; i++) {
  console.log(Object.keys(person)[i], Object.values(person)[i]);
}

let person2 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
};

person2.write = function () {
 return `${this.firstName}  ${this.lastName}  is a  ${this.age} years old driver in ${this.city}`;
};

console.log(person2.write());
