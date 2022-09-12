//Object literal - najprostrzy obiekt 
//programistyczna reprezentacja czegos; za pomoca obiektu mozna opisac byt abstrakcyjny lub realny;
//obiekt opisuje konkretne wystapienie, nie telefon jako taki, ale konkretny mojTelefon;

//const czlowiek = {
  //nazwa wlasciwosci: "wartosc:tablica, tekst(string), liczba, prawda, falsz, kolejny obiekt",
  //nastepna wlasciwosc: "wartosc",
  //wlasciwosc: funkcja anonimowa,
//}

//Metoda - funkcja wew. obiektu
//odwolanie do wlasciwosci przez this.nazwawlasciwosci

//dodawanie wlasciwosci
//nazwaObiektu.nazwaWlasciwosci = "wartosc";

// const sasiadJan = {
//   imie: "Jan",
//   wiek: 56,
//   przedstawSie: function () {
//     console.log(this.imie);
//   }
// };
// const sasiadMariusz = {
//   imie: "Mariusz",
//   wiek: 57,
//   przedstawSie: function () {
//     console.log(this.imie);
//   }
// };


// function showMyPhone(myPhone){
//   console.log(myPhone.rozmiar)
// };

//OBIEKT (typ referencyjny, skladajacy sie z wlasciwosci; nazwa: "wartosc",)
//funkcja wew obiektu 13 linijka to METODA;
//Linijka 14 this powoduje ze sie odwoluje do tego obiektu.

// const mojTelefon = {
//   marka: "Samsung",
//   cena:23344,
//   rozmiar: "DuzyNie",
//   czyNowy: false
//show: function(){
  //console.log(this.cena);
//}
// };

//Odwolanie do wlasciwosci

// showMyPhone(mojTelefon);
// console.log(mojTelefon.marka);

//KLASA
//object constructor

// STARA SKLADNIA JS
// function sasiad (imie,wiek){
//   this.imie = imie;
//   this.wiek = wiek;
//   this.przedstawSie = function (){
//     console.log(this.imie);
//   }
// }

// const jan = new sasiad ("Jan", 56);
// jan.przedstawSie();

// TERAZ UZYWAMY KLASE - dziala lepiej i schludniej!!!

// class Sasias {
//   constructor(imie, wiek){
//     this.imie = imie;
//     this.wiek = wiek;
//   }
//   przedstawSie = function (){
//     console.log(this.imie);
//   }
// }

//typ zlozony, szablon na obiekt

// class Human {
//   constructor(name, surname, age, address){
// this.name = name;
// this.surname = surname;
// this.age = age;
// this.address;

//   }

// showDetails(){
//   console.log(this.name);
// }

// }

// const myHuman = new Human ("JJ", "NN", 12, "AA");
// console.log(myHuman.address);
//myHuman.showDetails();

// 17. Napisz program “Książka telefoniczna”. Program umożliwia wyszukiwanie osób po
// pierwszej literze ich nazwiska. Minimum 5 osób. Jeżeli w książce nie istnieje osoba o
// nazwisku na daną literę to wyświetl odpowiedni komunikat.

// class Person {
//   constructor(name, surname, phoneNumber) {
//     this.name = name;
//     this.surname = surname;
//     this.phoneNumber = phoneNumber;
//   }
// }

// class PhoneBook {
//   constructor(people) {
//     this.people = people;
//   }
  
//   search(firstLetter) {
//     let temp = false;
//     for (let i = 0; i < this.people.length; i++) {
//       if (firstLetter === this.people[i].surname[0]) {
//         temp = true;
//         console.log(this.people[i].phoneNumber);
//       }
//     }
//     if (temp === false) {
//       console.log("Error");
//     }
//   }
// }


// const tab = [
//   new Person("Jan", "Kowalski", "603603603"),
//   new Person("Janusz", "Kot", "603603603"),
//   new Person("Jan", "Dab", "603603603"),
//   new Person("Juliusz", "Kowalski", "603603603"),
//   new Person("Jan", "Pop", "603603603")
// ];

// const book = new PhoneBook(tab);

// let question = prompt("What is the first letter of a surname?");

// book.search(question)

// !!! CHECK CODE !!! 18. Napisz program “Sklep internetowy”. Program powinien umożliwiać wyświetlenie listy
// produktów wraz z ich ceną. Dodanie produktu do koszyka, a następnie zakup
// produktów. Wszystkie akcje wykonujemy za pomocą odpowiednich komunikatów na
// konsoli. Minimum 5 produktów w sklepie.

//MOJ KOD

// class Product{
//   constructor(name,price){
//     this.name=name;
//     this.price=price;
//   }
//   present(){
//     return "name: " + this.name + ",price: " + this.price;
//   }
// }
// class Shop {
//   constructor(products){
//     this.products=products;
//     this.cart=[];
//   }
//   display (){
//     for(let i = 0; i < this.products.length; i++){
//       console.log(this.products[i].present);
//     }
//   }
// shopping(aProduct){
// this.cart.push(aProduct);
// console.log("added to cart " + aProduct.text());
// }
// buy (){
//   console.log ("bought");
//   for (let i =0; this.cart.length; i++){
//     console.log(this.cart[i].text());
//   }
//   this.cart=[];
// }
// }

// const tab = [
//   new Product ("ball", "5 PLN"),
//   new Product ("toy", "51 PLN"),
//   new Product ("go", "35 PLN"),
//   new Product ("bear", "54 PLN"),
//   new Product ("toy2", "55 PLN"),
// ]

// const shop = new Shop(tab);

// shop.display();
// shop.shopping(tab[0]);
// shop.shopping(tab[2]);
// shop.shopping(tab[4]);

// shop.buy();

//KOD Z ZAJEC

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   text() {
//     return "Nazwa: " + this.name + ", Cena: " + this.price;
//   }
// }
// class Shop {
//   constructor(products) {
//     this.products = products;
//     this.cart = [];
//   }
//   display() {
//     for (let i = 0; i < this.products.length; i++) {
//       console.log(this.products[i].text());
//     }
//   }
//   shopping(productToAdd) {
//     this.cart.push(productToAdd);
//     console.log("dodano do koszyka " + productToAdd.text());
//   }
//   buy() {
//     console.log("zakupiono");
//     for (let i = 0; i < this.cart.length; i++) {
//       console.log(this.cart[i].text());
//     }
//     this.cart = [];
//   }
// }
// const tab = [
//   new Product("piłka", "5zł"),
//   new Product("lalka", "15zł"),
//   new Product("zabawka", "10zł"),
//   new Product("pluszak", "50zł"),
//   new Product("CS", "500zł")
// ];
// const shop = new Shop(tab);

// shop.display();
// shop.shopping(tab[2]);
// shop.shopping(tab[0]);
// shop.shopping(tab[4]);

// shop.buy();

