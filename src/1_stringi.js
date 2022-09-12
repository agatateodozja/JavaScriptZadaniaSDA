// 1. Utwórz trzy zmienne typu tekstowego a następnie połącz je w jeden ciąg tekstowy i
// wyświetl.
// Do następnych zadań utwórz zmienną o wartości :
// “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis odio,
// id fringilla eros. Sed dapibus venenatis pharetra”

// let x = "Hey";
// let y = "kup";
// let z = "se";

// console.log(x + " " + y + " " + z);

//2. Sprawdź długość podanego tekstu.

// let text = prompt("wpisz tekst");
// console.log(text.length);

//3. Wyświetl 10 liter poczynając od 5.

// let text = "lakowsjdmdmdjdjdjd";

// console.log(text.slice(5, 16));

//4. Wyświetl 6 liter od końca wykorzystując dwie rózne metody

// let text = "to bardzo wazna wiadomosc";
// console.log(text.substr(-6));

// let text = "to bardzo wazna wiadomosc";
// let text1 = text.slice(-6);
// console.log(text1);

// let text = "to bardzo wazna wiadomosc";
// //console.log(text.length - 6);
// let findText = text.substring(text.length - 6);
// console.log(findText);

//5. Wyświetl 5 ostatnich liter wykorzystując substring oraz length.

// let text = prompt("write text here");
// console.log(text.substr(-5));

//6. Zamień wszystkie litery na wielkie oraz na małe.

// let text = prompt("write a text to change to upper case");
// console.log(text.toUpperCase());

// console.log(text.toLocaleLowerCase());

//7. Utwórz zmienną, której wartość będzie równa 5, 15, 20 i 25 znaku z tekstu.

// let text = prompt("this is your chance to shine");
// let text1 = text.slice(0, 5);
// let text2 = text.slice(0, 15);
// let text3 = text.slice(0, 20);
// let text4 = text.slice(0, 25);
// let text5 = text1 + " " + text2 + " " + text3 + " " + text4;
// console.log(text5);

// let text = prompt("this is your chance to shine");
// let zmienna = text[5] + text[15] + text[20] + text[25];
// console.log(zmienna);

//8. Zamień wszystkie wielkie litery na znak X

// let text = "This is Your chance To shine";
// text = text.replace("T", "X");
// text = text.replace("Y", "X");
// console.log(text);

//9. Sprawdź czy w tekście występuje połączenie liter “ae”, wykorzystaj dwie metody

//let text = "Aeiou ae iouuuusnhan jbnsfdobfdikb";
//console.log(text.includes("ae"));

//console.log(text.indexOf("ae"));

//10. Wyświetl słowo “eros” z tekstu. Do wyznaczenia indeksu użyj poznanej metody, a do
//wyświetlenia skorzystaj z substring.

// let text = "Aeiou ae eros iouuuusnhan jbnsfdobfdikb";
// console.log(text.substr(text.indexOf("eros"), 4));

//11. Pobierz tekst od użytkownika, a następnie wyświetl go wielkimi literami

// let index = prompt("write text here please");
// console.log(index.toLocaleUpperCase());

//12. Pobierz tekst od użytkownika, a następnie wyświetl “Litera” tyle razy
//ile liter ma dany tekst

// let letter = "Letter";
// let text = prompt("let me know what do you think");
// console.log(letter.repeat(text.length));

//13. Pobierz tekst od użytkownika i wyświetl go od końca

// let text = "to jest tekst do odwrocenia";
// let reverseText = text.split("").reverse().join("");

// alert(reverseText);

//14. Pobierz tekst od użytkownika a następnie wyświetl część tekstu, która występuje po
//pierwszej literze “a”

//const text = "Dzisiaj sobota";

//let idx = text.indexOf("a");
//com: zwroci pierwsze a od lewej do prawej;

//console.log(text.substring(idx + 1));

//15. Pobierz tekst od użytkownika, a następnie wyświetl jego dowolny podciąg
// let text = prompt("lol");
// console.log(text.substr(7, 12));

//16. Pobierz tekst od użytkownika, a następnie policz ile się w nim znajduje samogłosek

// let text = "aallsdikdifdrnbfd";
// console.log(text.includes("a", "e"));

//17. Pobierz tekst od użytkownika, a następnie zamień wszystkie litery “a” “e” “o” na “x”
// let text = prompt("text");
// text = text.replace("a", "x");
// text = text.replace("e", "x");
// text = text.replace("o", "x");

// console.log(text);

//18. Napisz program, który pobiera od użytkownika 5 słów, a następnie wyświetla ja jako
//jeden ciąg tekstu

// let text1 = prompt("text");
// let text2 = prompt("text");
// let text3 = prompt("text");
// let text4 = prompt("text");
// let text5 = prompt("text");

// console.log(text1 + " " + text2 + " " + text3 + " " + text4 + " " + text5);

//19. Napisz program, który wyświetli 10 razy to samo słowo, które poda mu użytkownik

// let word = prompt("one please");
// console.log(word.repeat(5));

//  20. Napisz program, który pyta użytkownika o słowo tak długo aż użytkownik nie poda
//łowa “STOP”. Dopóki to słowo nie zostanie wpisane to program będzie wyświetlał
//wszystkie te słowa, które użytkownik do tej pory wprowadził.

// let answer = "STOP";
// let empty = "";
// while (true) {
//   let ask = prompt("write a word");
//   if (ask === answer) {
//     console.log("you guested it!");
//     break;
//   } else {
//     if (ask !== answer);
//     empty = empty + " " + ask;
//     console.log(empty);
//   }
// }

//21

// let text = prompt("Write your text please");
// console.log(text);

// let firstValue = "Java";
// if (text.includes("Java")) {
//   console.log("Znalazlem Java");
// }

// if (text.startsWith(firstValue)) {
//   console.log("Zaczyna sie od Java");
// }

// if (text.endsWith(firstValue)) {
//   console.log("Konczy sie na Java");
// }

// if (text === firstValue) {
//   console.log("Rowna sie Java");
// }

// console.log(text.indexOf(firstValue));

// 22. Napisz program, który odczytuje wprowadzony przez użytkownika tekst, a nastepnie
// dla tego tekstu zamienia wszystkie wystąpienia przecinków na tekst “-MAKARENA” i
// wyświetla w konsoli.
// Przykładowo dla tekstu "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
// do eiusmod tempor incididunt ut labore et dolore magna aliqua.", program powinien
// wypisać w konsoli "Lorem ipsum dolor sit amet-MAKARENA consectetur adipiscing
// elit-MAKARENA sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

// let text =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// console.log(text.replace(",", "“-MAKARENA"));

// 23. Napisz program, który odczytuje wprowadzony przez użytkownika tekst, a nastepnie
// dzieli go na poszczególne słowa. Następnie zlicza ilość wystąpień słów niezależnie
// od wielkości liter i wypisuje je w konsoli w kolejności alfabetycznej.
// Przykładowo dla tekstu "Ala lubi koty, ale nie jest przez Koty lubiana.", program
// powinien wypisać w konsoli:
// ● ala - 1
// ● ale - 1
// ● jest - 1
// ● koty - 2
// ● lubi - 1
// ● lubiana - 1
// ● nie - 1
// ● przez - 1
// Załóż, że w tekscie moga pojawić się dowolne znaki interpunkcyjne.

// SOLUTION

// let arr = "Ala lubi koty, ale nie jest przez Koty lubiana.";
// let textLower = arr.toLocaleLowerCase();
// let replace = textLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
// let split = replace.split(" ");

// let count = {};

// split.forEach((element) => {
//   count[element] = (count[element] || 0) + 1;
// });

// console.log(count);

//////////////////////////////////////////
//dzielenie na slowa

// let text = "Ja jestem Szymon, Szymon, Szymon";
// text = text.replaceAll(",", "");
// let splittedString = text.split(" ");
// let result = [];

// for (let i = 0; i < splittedString.length; i++) {
//   let czyPoliczono = false;

//   for (let j = 0; j < result.length; j++) {
//     if (result[j].slowo === splittedString[i]) {
//       result[j].ile++;
//       czyPoliczono = true;
//       break;
//     }
//   }

//   if (czyPoliczono === false) {
//     result.push({
//       slowo: splittedString[i],
//       ile: 1
//     });
//   }
// }

// console.log(result);

