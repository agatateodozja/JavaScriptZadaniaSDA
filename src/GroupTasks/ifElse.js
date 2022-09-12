/*
Napisz kalkulator!
Do pobrania danych od użytkownika wykorzystaj funkcję prompt()
Do zamiany z tekstu na liczbę wykorzystać funkcje pareseInt() lub parseFloat()
Kalkulator musi obsługiwać następujące działania:
- dodawanie
- odejmowanie
- mnożenie
- dzielenie
- potęgowanie
*/

let sign = prompt("jakie dzialanie chcesz wykonac");
let num1 = parseFloat(prompt("podaj pierwsza liczbe"));
let num2 = parseFloat(prompt("podaj pierwsza druga"));
//dodawanie odejmowanie mnozenie dzielenie
if (sign === "dodawanie") {
  console.log(num1 + num2);
} else if (sign === "odejmowanie") {
  console.log(num1 - num2);
} else if (sign === "mnozenie") {
  console.log("dzielenie");
  if (num2 !== 0) {
    console.log(num1 / num2);
  } else {
    console.log("Nope");
  }
} else {
  console.log("nie ma takiego dzialania");
}

let a = Math.floor(Math.random() * 6 + 1);

if (a % 2 === 0) {
  console.log("parzysta");
} else {
  console.log("liczba nie parzysta");
}
if (a === 6) {
  console.log("Wygrales");
}
