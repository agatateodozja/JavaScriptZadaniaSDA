// Object literal
const person = {
  name: "Jan",
  surname: "Kowalski",
  hello: () => console.log("Hi!")
};

// Object contructor
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.hello = () => console.log("Hi!");
}
const personObj = new Person("Jan", "Kowlaski");

// Klasa
class PersonClass {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  hello() {
    console.log("Hi!");
  }

  set name(value) {
    this.name = value;
  }

  get name() {
    return this.name;
  }
}
const personFromClass = new PersonClass("Jan", "Kowalski");
personFromClass.name = "Janusz";
console.log(personFromClass.name);

// Dziedziczenie
class SantaClaus extends Person {
  constructor(name, surname, beardLength) {
    super(name, surname);
    this.beardLength = beardLength;
  }
}
const santa = new SantaClaus("Jan", "Kowalski", 123);
