// argumenty funkcji - a i b: function test(a,b){};
// wywolanie funkcji: test(1,3);
//wszystkie argumenty sa opcjonalnie, funkcja sie wywola, a argumenty beda undefined

//funkcje anonimowa przypisana do zmiennej: 
//const test = function (a, b){}

//funkcja strzalkowa:
//const test = (a, b)=> {};


// //Napisz program z wykorzystaniem metod, który na podstawie wyboru
// //użytkownika, pobiera dane potrzebne do wykonania obliczeń i wykonuje
// //je. Obliczenia to pole kwadratu, prostokąta i koła.

// function square() {
//   let a = parseInt(prompt("Podaj bok"));
//   return a * a;
// }

// function rectangle() {
//   let a = parseInt(prompt("Podaj bok A"));
//   let b = parseInt(prompt("Podaj bok B"));
//   return a * b;
// }

// function circle() {
//   let r = parseInt(prompt("Podaj promien"));
//   return Math.PI * r * r;
// }

// let choice = prompt("1. Kwadrat, 2. Prostokąt, 3.Koło");
// switch (choice) {
//   case "1":
//     console.log(square());
//     break;
//   case "2":
//     console.log(rectangle());
//     break;
//   case "3":
//     console.log(circle());
//     break;
//   default:
//     console.log("Nie rozumiem!");
//     break;
// }

//Napisz ciąg Fibonacciego rekurencyjnie

// function fib(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(10));

//Napisz funkcję, które zweryfikują czy podana litera jest samogłoską
//czy spółgłoską. Wykorzystaj metody do policzenia ile
//samogłosek i ile spółgłosek jest w podanym przez użytkownika tekście.

// function vowel(letter) {
//   const vowels = ["a", "e", "i", "o", "u", "y"];
//   return vowels.includes(letter);
// }

// function consonant(letter) {
//   if (vowels(letter) === false) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function summery(text) {
//   const tab = [];
//   let sumOfVowels = 0;
//   let sumOfconsonant = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (vowel(text[i]) === true) {
//       sumOfVowels = sumOfVowels + 1;
//     } else if (consonant(text[i] === true)) {
//       sumOfconsonant = sumOfconsonant + 1;
//     }
//   }
//   tab.push(sumOfVowels);
//   tab.push(sumOfconsonant);
//   return tab;
// }

// let text = prompt("Podaj tekst");
// const res = sum(text);
// console.log("Samogloski: " + res[0]);
// console.log("Spolgloski: " + res[1]);

//Napisz funkcję, która będzie zwiększać wszystkie elementy w
//podanej tablicy o 10.

// function addToTab(myTab) {
//   for (let i = 0; i < myTab.length; i++) {
//     myTab[i] = myTab[i] + 10;
//   }
// }

// const tab = [1, 2, 3, 4, 5, 6];

// addToTab(tab);

// console.log(tab);

// ---------------
// 2 opcja

// const arr = [1, 2, 4, 5, 6, 8];

// arr.forEach((el, i) => (arr[i] = el + 10));

// console.log(arr);

// //Napisz funkcję, która będzie sumować elementy w
// //tablicy podanej jako argument

// function sumTab(tab) {
//   let sum = 0;

//   for (let i = 0; i < tab.length; i++) {
//     sum = sum + tab[i];
//   }
//   return sum;
// }

// console.log(sumTab([1, 2, 3, 4, 5, 6]));

// function showHelloWorld(){
//   console.log("Hello world!")
// }

// Napisz funkcję, która będzie sprawdzać czy liczba jest parzysta

// function even(arg) {
//   let number = arg % 2 === 0;
//   return number;
// }
// let number = parseInt(prompt("put a number"));
// if (even(number) === false) {
//   console.log("not even");
// } else {
//   console.log("even");
// }

//2.43.56 
//07.08.22

//1. Napisz funkcję, która będzie wyświetlać napis “Hello World”

// function test() {
//   console.log("Hello, world");
// }

// test();

//2. Napisz funkcję, która przyjmować będzie dwie liczby i zwracać ich sumę

// function sumUpbaby (a,b) {
//   console.log(a+b)
// }

// sumUpbaby (1, 4)

//3. Napisz funkcję, która będzie sprawdzać czy liczba jest parzysta

// function even(a){
//    if (a%2 === 0){
//     console.log("true")
//   } else {
//     console.log("false")
//   }
// }

// even(parseInt(prompt("write a number")))

//Funkcja anonimowa - mozna ja wykorzystac jako argument w funkcji
// const fun = function() {
//   console.log("Test1111");
// }

// function myHyperFun(arg){
//   arg();
// }

// myHyperFun(fun);

// myHyperFun(function() {
//   console.log("TEST2")
// });

//Funkcja strzalkowa

//myHyperFun(() => {console.log("TEST2")});

// forEach 
// const tab = [1, 3, 2, 1, 3];

// tab.forEach((element) => {
//  console.log(element) 
// });

//Sort  funkcja strzalkowa
// const tab = [1, 3, 2, 1, 3];
// tab.sort((a,b) => a - b)
// console.log (tab);

//Find

// const tab = [1, 3, 2, 1, 3];
// let x = tab.find((a) => a === 3);

// console.log(x);


//Create a function which translates a given DNA string into RNA.

// function DNAtoRNA(dna){
//   let a = ""
//   for(let i = 0;i< dna.length;i++){
//     if (dna[i]==="T"){
//           a+="U"
//     } else {
//        a+=dna[i]}
//     }
//     return a;
//   }

//   const b = DNAtoRNA("AADDRRTT")
//   console.log(b)


// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatStr (n, s) {
//   return s.repeat(n)
//   }

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// function countSheeps(arrayOfSheep) {
//   let x = 0;
  
//     for(let i = 0; i<arrayOfSheep.length; i++){
//       if (arrayOfSheep[i]===true){
//         x = x + 1
//       } 
//     }
//   return x
//   }


//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// var min = function(list){
//   return Math.min(...list)
// }

// var max = function(list){
//  return Math.max(...list)
//   }


//ANONIMOWE

//Utwórz 3 anonimowe funkcje, każda z nich powinna pisać tylko wiadomość w konsoli ("more than zero" / "equal to zero" / "less than zero").

// let more = function(){
//   console.log("more then zero")
//   }

// let equal = function(){
//   console.log("equal to zero")
// }

// let less = function(){
//   console.log("less then zero")
// }

// //Napisz program wywołujący jedną z tych 3 funkcji, gdy warunek jest spełniony (wartość jakiejś zmiennej jest większa od zera / równa zero / mniejsza od zera).

// let something = 2;

// if (something > 0){
//   more();
// } else if (something === 0){
//   equal();
// } else {
//   less()
// }