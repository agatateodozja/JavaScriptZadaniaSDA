//PĘTLE: for ; while; do while; **forEach funkcja bardziej niz petla

//let arr = [1, 2, 3, 4, 5]
//for (let x in arr) {console.log(arr[x])}; - pokazuje indexy
// tablica typ referencyjny 
// sprawdzanie dlugosci .length
// przekazanie zmiennej referencyjnej do funkcji - wskazuje miejsce w pamieci, wew. funkcji modyfikacja bedzie widoczne na zew. funkcji.
//Odwrotnie jest z typem wartosciowym.
//nazwa tablicy + [] - odwolanie do elementu za pomoca indexu

//Odwolujemy sie do liczb w tablicy:
// let arr = [1, 2, 35, 4, 3];
// for (let x of arr) {
//   console.log(x);
// }


//6,7,8;

//zadanie 8 Napisz program, który wyznaczy NWD dwóch liczb

/*let number1 = parseInt(prompt("podaj pierwsza liczbe calkowita"));
let number2 = parseInt(prompt("podaj druga liczbe calkowita"));
let nwd = 1;
let smallerNumber = 0;

if (number1 < number2) {
  smallerNumber = number1;
} else {
  smallerNumber = number2;
}

for (let i = 1; i <= smallerNumber; i++) {
  if (number1 % i === 0 && number2 % i === 0) {
    nwd = i;
  }
}

console.log(nwd);*/

//ZADANIE 7. Napisz program, który obliczy silnie dla podanej liczby.

/*let number = parseInt(prompt("podaj liczbe"));
let factorial = 1;

if (number === 0) {
  console.log (1);
}
else {
for (let i = 1; i <= number; i++) {
  factorial = factorial * i;
}
console.log(factorial);
} */

//ZADANIE 6.  Napisz program, który wyznaczy sumę liczb od 0 do wskazanej przez użytkownika
//liczby.

/*let number = parseInt(prompt("podaj liczbe"));
let sum = 0;

for (let i = 0; i <= number; i++) {
  sum = sum + i; 
}

console.log(sum);

KONIEC ZADANIA*/

//1. Napisz pętle, która wyświetla wartości od 1 do 100

// for (let i = 1; i < 101; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i++ < 100) {
//   console.log(i);
// }

//2. Napisz program, który wyświetla liczby parzyste od 1 do 100

// for (let i = 1; i < 101; i++)
//   if (i % 2 === 0) {
//     console.log(i);
//   }

//3. Napisz program, który wyświetla liczby od 100 do 1

// let i = 101;
// while (i-- < 102 && i > 0) {
//   console.log(i);
// }

//4. Napisz program, który wyświetla wielokrotności liczby 3 od 1 do 100

// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

//6. Napisz program, który wyznaczy sumę liczb od 0 do wskazanej przez użytkownika
//liczby.

// let number = parseInt(prompt("write a number"));
// let result = 0;

// for (let i = 1; i <= number; i++) {
//   result = result + i;
// }
// console.log(result);

// 9. Napisz program, który pobiera od użytkownika dwie liczby całkowite A - a oraz B - b,
// gdzie A < B, a następnie oblicza sumę ciągu liczb od A do B (A, A + 1, A + 2, . . . , B)
// i wypisuje ją w konsoli. Gdy warunek A < B nie został spełniony, program kończy
// pracę wypisuąc w konsoli "Robota skończona".
// Przykładowo dla A = 4 i B = 11 program powinien wypisać w konsoli liczbę 60.

// let a = parseInt(prompt("write a number"));
// let b = parseInt(prompt("write a second number"));

// for (let i = 0; i <= b; i++) {
//   if (a < b) {
//     a = a + i;
//   }
// }
// console.log(a);
// console.log("job is done");

// // 10. Napisz program, który pobiera od użytkownika liczbę całkowita dodatnią N - n (int), a
// // następnie wyświetla w konsoli wszystkie potęgi liczby 2 nie większe, niż podana
// // liczba (każda liczba w kolejnej linii).
// // Przykładowo dla liczby 71 program powinien wypisać w konsoli liczby: 1 2 4 8 16 32
// // 64, każda w nowej linijce.

//n = parseInt(prompt("please write your number"));

// let n=parseInt(prompt("please write your number"));
// for (let i = 0; Math.pow(2,i) < n; i++) {
//    console.log(Math.pow(2,i));
//   }

// 19. Napisz program “Matriks”.
// a. użytkownik poda liczbę, która musi być z zakresu 150 - 1000
// b. następnie program zacznie wyświetlać losowo liczby 0 lub 1
// c. po zakończeniu wyświetlania zapyta o kolor pigułki
// i. czerwona - 6 razy wyświetl “you died”
// ii. niebieska - wyświetl 8 razy “bzzz”

// let matrix = parseInt(prompt("write number 150-1000"));
// let random = Math.floor(Math.random()*1+1);

// if (matrix > 150 && matrix < 1000){
// console.log(random);
// }

// let pill = prompt("red or blue pill?")

// if (pill === "red") {
//   for (let i = 1; i<= 6; i++){
//     console.log("you died");
//   }
// } else if (pill === "blue"){
//   for (let i = 1; i<= 8; i++){
//     console.log("bzzzz");
//   }
// } else {
//   console.log ("matrix not complited")
// }



// 21. Napisz program ciepło - zimno
// a. program wylosuje liczbę z zakresu 0 - 100
// b. następnie zapyta użytkownika o jakiej liczbie myśli
// c. następnie wyświetli komunikat zgodnie z tabelką
// odległość podanej liczby od wylosowanej komunikat
// 0 - 10 gorąco
// 11 - 30 ciepło
// 31- 60 zimno
// 60 - 100 lodowato

// let random = Math.floor(Math.random()*101);
// let number = parseInt(prompt("about what number are you thinking?"));
// let dif = random - number;
// console.log(random);
// if (dif >= -10 && dif <= 10){
//   console.log ("hot");
// } else if (dif <= -11 && dif >= -30 || dif >= 11 && dif <= 30){
//   console.log("warm")
// } else if (dif <= -31 && dif >= -60 || dif >= 31 && dif <= 60 ){
//   console.log ("cold")
// } else if (dif <=-60 && dif >=-100 || dif >= 60 && dif <= 100){
//   console.log ("freezing");
// }

