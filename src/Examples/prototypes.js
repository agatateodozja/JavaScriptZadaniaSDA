// Tworzymy obiekt o nazwie person
const person = {
  name: "Jan",
  surname: "Kowalski"
};

// pobieramy prototyp naszego obiektu Object.prototype
Object.getPrototypeOf(person);

/*
  Prototyp to pole, które dostępne jest w każdym obiekcie i wskazuja na inny obiekt "bazowy"
  person -> Object.prototype -> null

  Nie każdy obiekt musi mieć bezpośrednio referencje do prototypu Object.prototype
*/

const testDate = new Date();
Object.getPrototypeOf(testDate); // Date.prototype -> Object.prototype -> null

/*
  Możemy ustawić własny prototype
*/

const personObj = Object.create(person);
// personObj -> person -> Object.prototype

/*
  Funkcje domyślnie mają właściwość prototype.
*/

function createPerson() {
  this.name = "Jan";
  this.surname = "Kowalski";
}

const personConstruct = new createPerson();
personConstruct.prototype; // Object.prototype

/*
  Możemy też nadawać własny prototype
*/

createPerson.prototype = person;
createPerson.prototype.constructor = createPerson;

const myPerson = new createPerson(); // person -> Object.prototype
