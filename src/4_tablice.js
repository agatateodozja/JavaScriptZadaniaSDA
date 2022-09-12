//TABLICE: 6,8,12, 21, 14

//ZADANIE 21
//Sprawdź czy podane przez użytkownika słowo jest palindromem

// let text = prompt("text");
// let reversedText = "";

// for (let i = text.length - 1; i >= 0; i--) {
//   reversedText = reversedText + text[i];
// }

// console.log(text);
// console.log(reversedText);
// console.log(text === reversedText);

//ZADANIE 12 - podpowiedz

//Pobierz od użytkownika 10 słów, a następnie wyświetl losowe 10 liter z tych podanych

/*let words = "";
for (let i = 0; i < 10; i++) {
  let word = prompt("please provide word");
  words = words + word;
}

let randomCharacter = "";
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * words.length);
  randomCharacter = randomCharacter + words[randomNumber];
}

console.log(randomCharacter);*/

//console.log(Math.random());
//console.log(Math.random() * 5);
//random - losowanie liczb w JS

//console.log(Math.random());
//console.log(Math.floor(Math.random() * 6)); zaokragla w dol floor

//ZADANIE 8 Napisz program, który znajdzie drugi największy element w tablicy 10 liczb podanych przez użytkownika

/*const tab = [];

//pobieranie od uzytkownika
for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt("podaj liczbe"));
  tab.push(number);
}

//wyznacznie najwiekszego elementu

let max = -9999999999999999999999;

for (let el of tab) {
  if (el > max) {
    max = el;
  }
}

//ustawienie elementu na -1

for (let idx in tab) {
  if (tab[idx] === max) {
    tab[max] = -1;
  }
}

//szukanie najwyszczego elementu
max = -9999999999999999999999;

for (let el of tab) {
  if (el > max) {
    max = el;
  }
}

console.log(max);*/

//1. Pobierz od użytkownika 10 liczb, a następnie zapisz je w tablicy.

// const randomNumber = [];

// for (let i = 0; i < 10; i++){
//   let input = parseInt(prompt("write a number"));
//   randomNumber.push(input);
// }

// console.log (randomNumber);

//2. Pobierz od użytkownika 10 liczb i wyświetl je w odwrotnej kolejności
// const randomNumber = [];
// for (let i = 0; i < 10; i++){
//   let input = parseInt(prompt("write a number"));
//   randomNumber.push(input);
// }

// console.log (randomNumber.reverse());

//3. Pobierz od użytkownika 10 liczb i wyświetl największa. Czy można to rozwiązać bez
//tablic?

// const tab = [];

// for (let i = 0; i <10 ;i++){
//   let input = parseInt(prompt("number"));
//   tab.push(input);
// }

// let max = -9999999999999
// for (let el of tab) {
// if(el>max) {
//   max = el;
// }
// }
// console.log(max);

//4. Pobierz od użytkownika 10 liczb zapisz do tablicy i zsumuj.

// const tab = [];
// for (let i = 0; i <10 ;i++){
// let input = parseInt(prompt("number"));
// tab.push(input);
// }

// let value = 0;
// for (let i = 0; i < tab.length; i++){
// value = value + tab[i];}

// console.log(value);

// 5. Napisz program, który pobierze 10 liczb od użytkownika, zapisze w tablicy i sprawdzi
// czy użytkownik podał jakieś duplikaty

//const tab = [1, 2, 3, 5, 4, 5, 4, 5, 3, 5]
// for (let i = 0; i < 10; i++ ){
//   let input=parseInt(prompt("number"));
//   tab.push(input);
// }

// const unique = Array.from(new Set(tab));

// if (tab.length === unique.lenght) {
//   console.log ("no duplicates");
// } else { console.log ("duplicates")}

//2022-08-06 6:01:29

// const tab = [1, 2, 3, 5, 4, 5, 4, 5, 3, 5]
// let duplicates = false;


// for (let i = 0; i<tab.length; i++){
//   for(let j = i + 1; j < tab.length; j++){
//     if(tab[j] === tab[i]){
//       duplicates = true;
//       break
//     }
//   }
//   if (duplicates ===true){
//     console.log("sa duplikaty");
//   }
// }

//6. Napisz program, który pobierze 10 liczb od użytkownika, a następnie wyświetli ile
//razy dana liczba wystąpiła

// const arr = [2, 2, 4, 7, 8, 9, 9, 9, 4, 7, 1, 4, 7, 3, 5]
// const counts = {};
// arr.forEach((x) => {
//   counts[x] = (counts[x] || 0) + 1;
// });
// console.log(counts)

// const arr = [2, 2, 4, 7, 8, 9, 9, 9, 4, 7, 1, 4, 7, 3, 5];
// const tmp = [];

// for (let i = 0; i < arr.length; i++) {
//   let cnt = 0;
//   let el = arr[i];

//   if (tmp.includes(el) === true) {
//     continue;
//   }

//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] === el) {
//       cnt++;
//     }
//   }

//   tmp.push(el);
//   console.log("Element: " + el + " wystepuje " + cnt + " razy");
// }

//7. Napisz program, który pobierze 10 liczb od użytkownika, a następnie podzieli tablice
//na dwie osobne. We jednej będa liczby parzyste a w drugiej nieparzyste

// const even = []
// const odd = []

// for (let i = 0; i < 10; i++){
//   let number = parseInt(prompt("please write a number"));
//   if (number%2 === 0){
//   even.push(number)}
//   else {odd.push(number)}
// }

// console.log(even);
// console.log(odd);

//8. Napisz program, który znajdzie drugi największy element w tablicy 10 liczb podanych
//przez użytkownika

// const tab = [10, 4, 2, 5, 2, 5];
// let max = -9999999999;

// for (let el of tab){
// if (el > max) {
//   max = el;
// }  
// }
// for(let idx in tab){
//   if (tab[idx] === max) {
//     tab[idx] = -1;
//   }
// }
// max = -9999999999;
// for (let el of tab){
//   if (el > max) {
//     max = el;
//   }  
//   }

//   console.log(max)

//9. Napisz program sortujący tablice (Bubble sort)

//algorytm porownuje i zamienia 2 elemetny, przesuwa wieksza na prawa strone

// const tab = [6, 4, 3, 2, 9, 0];

// for (let i = 0; i<tab.length; i ++) {
//   for(let j = 0; j<tab.length-1; j++){
//     if(tab[j]>tab[j+1]){
//       let tmp = tab[j];
//       tab[j] = tab[j+1];
//       tab[j+1] = tmp;
//     }
//   }
// }

// console.log(tab);

//Odwrotnie:

// const tab = [6, 4, 3, 2, 9, 0];

// for (let i = 0; i<tab.length; i ++) {
//   for(let j = 0; j<tab.length-1; j++){
//     if(tab[j]<tab[j+1]){
//       let tmp = tab[j];
//       tab[j] = tab[j+1];
//       tab[j+1] = tmp;
//     }
//   }
// }

// console.log(tab);

//Napisz program, który z podanej przez użytkownika tablicy 10 liczb zwróci indeks
//liczby o która użytkownik poprosi. Jeżeli liczba nie bedzie w tablicy to zwróć tekst
//“Nie została znaleziona”

// const tab = [6, 4, 3, 2, 9, 0];

// //for (let i = 0; i < 10; i++) {
//   //let number = parseInt(prompt("number"))
// //tab.push(number);
// //}

// console.log(tab)

// let choose = parseInt(prompt("number"))

// for (let i =0; i <10 ; i++){
//   if (choose === tab[i]) {
//     i = choose;
//     console.log(tab.indexOf(i))
//     break;
//   }
// }

// 23. Napisz program, który pobierze od użytkownika 10 liczb, ale zapisze tylko te, które
// są podzielne bez reszty przez 5 a następnie wyświetli je w kolejności malejącej. Jeśli
// użytkownik nie wprowadzi żadnej liczby, która dzieli się bez reszty przez 5 to
// program wyświetli “Szkoda”

// const tab = [];

// for ( let i = 0; i < 10; i++){
//   let number = parseInt(prompt("write a number"));
//   if (number%5 === 0) {
//     tab.push(number);
//   } 
// }

// console.log(tab)

// if (tab.length === 0) {
//   console.log("empty, too bad");
// } else if (tab.length > 0) {
//   for (let i = 0; i < tab.length; i++){
//     for ( let j = 0; j <tab.length -1; j++){
//       if (tab[j]<tab[j+1]){
//         let tmp = tab[j];
//        tab[j] = tab[j+1];
//         tab[j+1] = tmp;
//       }
//     }
//   }
// }

// console.log(tab)

//Shows value under the index
// const tab = [6, 4, 3, 2, 9, 0];
// for (let i = 0; i < tab.length; i++){
//   console.log(tab[i])}