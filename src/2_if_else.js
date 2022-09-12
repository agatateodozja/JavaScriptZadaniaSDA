// 1. Napisz program, który na podstawie zmiennych: wzrost - height oraz waga - weight,
// sprawdza czy dana osoba może jechać kolejką górską.
// W przypadku kiedy osoba jest wyższa niż 150cm oraz nie przekracza wagi 180kg,
// program wypisze w konsoli "Zapnij pasy!", w przeciwnym wypadku wypisze w konsoli
// "Przykro mi, nie możesz jechać!".

// let height = parseInt(prompt("Write here your height"));
// let weight = parseInt(prompt("Write here your weight"));

// if (height > 150 && weight < 180) {
//   console.log("Fasten your seatbelt");
// } else {
//   console.log("Sorry, you can't ride.");
// }

// 2. Napisz program, który na podstawie zmiennej: przychód - income (double), obliczał
// będzie kwotę należnego podatku dochodowego od osób fizycznych i wypisywał ją w
// konsoli.
// Podatek obliczany jest według następujących reguł:
// ● do 85.528,00 podatek wynosi 18% podstawy minus 556,02 PLN,
// ● od 85.528,00 podatek wynosi 14.839,02 zł + 32% nadwyżki ponad 85.528,00.

// let double = parseFloat(prompt("write your income to check your tax"));
// if (double <= 85528) {
//   console.log(double * 0.18 - 556.02 + "PLN");
// } else if (double > 85528) {
//   console.log(14839.02 + (double - 85528) * 0.32 + "PLN");
// } else {
//   console.log("error");
// }

// 3. Napisz program, który na podstawie zmiennych: kwota - amount (double) oraz ilośc
// rat - numberOfInstallments (int), obliczał będzie miesięczną kwote raty pożyczki i
// wypisywał ją w konsoli. Parametry posiadają ograniczenia:
// ● kwota pożyczki musi mieścić się w przedziale od 100,00zł do 10.000,00zł,
// ● liczba rat musi mieścić się w przedziale od 6 do 48.
// W przypadku wykroczenia kwoty pożyczki poza akceptowalny przedział, kwota
// pożyczki powinna być ustawiona na 5.000,00zł. W przypadku wykroczenia ilości rat
// poza akceptowalny przedział, ilośc rat powinna być ustawiona na 36.
// Obliczona miesięczna rata powinna zawierać również odsetki. Dla uproszczenia
// obliczeń, przyjmij, że do kwoty pożyczki doliczasz X procent w zależności od ilości
// rat:
// ● 6-12 rat - 2,5%,
// ● 13-24 rat - 5,0%,
// ● 25-48 rat - 10,0%,
// a następnie obliczasz kwotę raty na podstawie ilości rat.

// let double = parseFloat(prompt("write amount of your loan"));
// let int = parseFloat(prompt("write number of installments"));

// if (double >= 100 && double <= 10000) {
//   if (int >= 6 && int <= 12) {
//     console.log((double + double * 0.025) / int);
//   } else if (int >= 13 && int <= 24) {
//     console.log((double + double * 0.025) / int);
//   } else if (int >= 25 && int <= 48) {
//     console.log((double + double * 0.1) / int);
//   } else {
//     console.log((double + double * 0.05) / 36);
//   }
// } else if (double < 100 || double > 10000) {
//   if (int >= 6 && int <= 12) {
//     console.log((5000 + 5000 * 0.025) / int);
//   } else if (int >= 13 && int <= 24) {
//     console.log((5000 + 5000 * 0.05) / int);
//   } else if (int >= 25 && int <= 48) {
//     console.log((5000 + 5000 * 0.1) / int);
//   } else {
//     console.log((5000 + 5000 * 0.05) / 36);
//   }
// } else {
//   console.log("error");
// }

// 4. Napisz prosty kalkulator pobierający informacje jakie działanie chce wykonać
// użytkownik i pobierający dwie liczby i wykonujący działanie. Przynajmniej 4 działania.

// let action = prompt("write action you want to take: *, /, +, -");
// let firstNumber = parseFloat(prompt("write first numer"));
// let secondNumber = parseFloat(prompt("write second number"));

// if (action === "*") {
//   console.log(firstNumber * secondNumber);
// } else if (action === "/") {
//   console.log(firstNumber / secondNumber);
// } else if (action === "+") {
//   console.log(firstNumber + secondNumber);
// } else if (action === "-") {
//   console.log(firstNumber - secondNumber);
// } else {
//   console.log("please try again");
// }

// 5. Poniższy kod symuluje rzut kostką do gry
// a. <KOD DO LOSOWANIA>
// ● wyświetl informację, czy wynik jest parzysty, czy nieparzysty
// ● jeśli wyrzucono wartość 6 wypisz dodatkowo napis WYGRAŁEŚ

// let random = Math.floor(Math.random() * 6 + 1);
// if (random % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// if (random === 6) {
//   console.log("you won");
// }

// 6. Napisz program, który pobierze od użytkownika informacje o jego wieku a następnie
// wyświetli w zależności od wieku komunikat
// a. jeśli wiek mniejszy od 25: wyświetl “Siemka ziom”
// b. jeśli wiek większy od 25 i mniejszy od 50: wyświetl “Dzień dobry”
// c. w przeciwnym przypadku wyświetl: “Uszanowanko

// let age = parseInt(prompt("please share with us your age"));
// if (age < 25) {
//   console.log("What's up");
// } else if (age >= 25 && age < 50) {
//   console.log("Good Morning");
// } else {
//   console.log("Hello");
// }

//ZADANIE 7
// let question = prompt("Do you like dogs?");
// let lowerCaseQuestion = question.toLocaleLowerCase();

// if (lowerCaseQuestion === "yes") {
//   console.log("You got a 5% discount");
//   let secondQuestion = prompt("Ok, I think we are done for today.");

//   if (secondQuestion === "yes") {
//     console.log("Ok, cool. Bye");
//   } else {
//     console.log("Let me tell you a joke.");
//     console.log("Joke");
//   }
// } else {
//   let answer = prompt("Do you prefere cats?");
//   if (answer === "yes") {
//     let thirdQuestion = prompt("Ok, I think we are done for today?");
//     if (thirdQuestion === "yes") {
//       console.log("Ok, cool. Bye");
//     } else {
//       console.log("Let me tell you a joke.");
//       console.log("Joke");
//     }
//   }
// }

// 9. Korzystając z <KOD DO LOSOWANIA> wylosuj 3 liczby a następnie wyświetl, która
// z nich jest największa.

// let random1 = Math.floor(Math.random() * 100 + 1);
// let random2 = Math.floor(Math.random() * 100 + 1);
// let random3 = Math.floor(Math.random() * 100 + 1);

// console.log(random1);
// console.log(random2);
// console.log(random3);

// if (random1 > random2 && random1 > random3) {
//   console.log(random1);
// } else if (random2 > random1 && random2 > random3) {
//   console.log(random2);
// } else {
//   console.log(random3);
// }
