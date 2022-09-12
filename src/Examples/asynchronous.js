/*
  Dotychczasowy kod, który pisaliśmy był kodem synchronicznym
*/

let test = 5;
test = test + 5;
console.log(test);

/*
  Problem powstaje w momencie kiedy musimy wykonać zadanie, które wymaga dużo czasu. W takim przypadku
  nasz program, czyli rowniez strona, staną się nieresponsywne
*/

let suma = 0;
for (let i = 0; i < 10000; i++) {
  for (let j = 0; j < 10000; j++) {
    for (let k = 0; k < 10; k++) {
      suma = suma + i;
    }
  }
}
console.log(suma);

/*
  Rozwiązaniem takiego problemu jest asynchroniczność, czyli przeniesienie przetwarzania na "boczny tor".
  W momencie kiedy długie zadanie się wykonuje nasz program/strona pozostaje responsywny.
  Zanim jednak przejdziemy do asynchroniczności przypomnijmy sobie callbacki :)
*/

function addOne(x) {
  return x + 1;
}

function addTwo(x) {
  return x + 2;
}

function addThree(x) {
  return x + 3;
}

let number = 0;
number = addOne(number);
number = addTwo(number);
number = addThree(number);

//A teraz za pomocą callbacków

function addOneCallback(x, callback) {
  x = x + 1;
  callback(x);
}

function addTwoCallback(x, callback) {
  x = x + 2;
  callback(x);
}

function addThreeCallback(x, callback) {
  x = x + 3;
  callback(x);
}

// callback hell
addOneCallback(0, (res1) => {
  addTwoCallback(res1, (res2) => {
    addThreeCallback(res2, (res3) => {
      console.log(res3);
    });
  });
});

/*
  Callbacki są pewną formą programowania asynchronicznego. Odpowiednia funkcja zostaje wywołana w momencie
  jak przyjdzie na nią czas. 
  Popularne funkcje, które korzystają z callbacków:
*/

setTimeout(() => console.log("Koniec"), 1000);
const intervalId = setInterval(() => console.log("Żyje"), 1000);
clearInterval(intervalId);

/*
  Eventy handlery są specjalnym przypadkiem callbackow. 
*/

document.getElementById("76").onclick = () => console.log("Klik");

/*
  Najpopularniejszym zadaniem jakie trwa długo, a jest wykonywane bardzo często i praktycznie przez każdą aplikację
  internetową, jest komunikacja z serwerem/korzystanie z API
  Podstawowe metody HTTP komunikacji z serwerem:
  - GET
  - POST
  - PUT
  - DELETE

  Jedne z pierwszym implementacji asynchronicznej komunikacji klienta z serwerem opierały się na Eventach.
  Korzystano wtedy z obiektu XMLHttpRequest
*/

const xhr = new XMLHttpRequest();
let log = "";

xhr.addEventListener("loadend", () => {
  log = `Finished with status: ${xhr.status}`;
});
xhr.open("GET", "https://reqres.in/api/users?delay=3");
xhr.send();
log = `${log.textContent}Started XHR request\n`;

/*
  Wraz z ES2015 w JavaScript pojawił się nowy sposób na obsługę asynchroniczności - Promise.

  Promise to obiekt, który reprezentuje pewną asynchroniczną operacje, która może się zakończyć sukcesem lub nie
  Jako argumenty, przyjmuje funkcje (callback), ktore zostaną wywołane w momencie sukcesu lub porażki
*/

const myPromise = new Promise((resolve, reject) => {
  // Długie zadanie
  resolve("Wynik zadania");
});

/*
  Obiekt myPromise zawiera informację w jakim aktualnie znajduje się stanie:
  - Pending
  - Fulfilled
  - Rejected

  Aby dostać się do wyniku działania musimy wykorzystać then()
*/

myPromise.then(
  (res) => console.log("Sukces" + res),
  () => console.log("Porażka")
);

/*
  Jak zawsze podawanie argumentów do funkcji jest opcjonalne. Jeśli więc nie chcemy przejmować się obsługą błędów
  Możemy pominąc drugi argument.
*/

myPromise.then((res) => console.log("Sukces" + res));

/*
  Istotne jest to, że metoda then() zwraca obiekt Promise. Możemy więc na tym obiekcie wywołać kolejny raz
  metode then(). Takie łączenie metod then() nazywa się Promise Chaining
*/

myPromise
  .then((res) => res + "1")
  .then((res1) => res1 + "2")
  .then((res2) => res2 + "3")
  .then((res3) => console.log(res3));

/*
  W powyższym przykładzie zakładamy, że wszystko pójdzie dobrze i nie wystąpi zaden błąd.
  Oczywiście nie jest to dobre podejście.
  W tym celu możemy skorzystać z metody catch(), która "złapie" nam ewentualne wyjątki.
*/

myPromise
  .then((res) => res + "1")
  .then((res1) => res1 + "2")
  .then((res2) => res2 + "3")
  .then((res3) => console.log(res3))
  .catch((err) => console.log(err));

/*
  Jeżeli zależy nam aby kontynuować akcje dopiero gdy kilka asynchronicznych zadań zakończy swoją pracę
  to możemy skorzystać z Promise.all
*/

const myFirstPromise = new Promise((resolve, reject) => {
  // Długie zadanie
  resolve("Wynik zadania");
});

const mySecondPromise = new Promise((resolve, reject) => {
  // Długie zadanie
  resolve("Wynik zadania");
});

Promise.all([myFirstPromise, mySecondPromise]).then((results) => {
  results.forEach((res) => console.log(res));
});

/*
  Jeżeli zależy nam aby wykonał się przynajmniej jeden Promise z kilku to możemy skorzystać z metody Promise.any
*/

Promise.any([myFirstPromise, mySecondPromise]).then((result) => {
  console.log(result);
});

/*
  Promise został bardzo dobrze przyjęty i aktualnie jest podstawowym sposobem na obsługę asynchroniczności
  w JS. 
  Jednakże składnia nadal wymaga przekazywania callbacków. Nie jest to najwygodniejszy kod do czytania.
  Aby ułatwić pracę z Promise w JS w wersji ES2017 zostały dodane dwa słówka async i await.

  Słówkiem kluczowym async oznaczamy funkcje, która ma zostać wykonana asynchronicznie. Taka funkcja zwraca
  zawsze obiekt Promise. 
*/

async function myAsyncFunction() {
  //Akcje
  return "Brawo!";
}

/*
  Wewnątrz funkcji asynchronicznej możemy użyć słówka await, które wymusza na obiekcie Promise wykonanie akcji.
  Po wykonaniu akcji kod będzie wykonywał się dalej.
*/

const myThirdPromise = new Promise((resolve, reject) => {
  // Długie zadanie
  resolve("Wynik zadania");
});

myThirdPromise.then((res) => console.log(res));

async function myPromiseAsyncFunction() {
  const res = await myThirdPromise; // Czekamy na wykonanie Promise'a
  console.log(res); // ten kod wykona się dopiero gdy Promise będzie miał stan resolved
}

/*
  Co z obsługą błędów? Niestety musimy sami o to zadbać korzystając z try/catch
*/

async function myPromiseAsyncFunctionWithTryCatch() {
  try {
    const res = await myThirdPromise; // Czekamy na wykonanie Promise'a
    console.log(res); // ten kod wykona się dopiero gdy Promise będzie miał stan resolved
  } catch (err) {
    console.log(err);
  }
}

/*
  Należy pamiętać, że funkcja async zwraca zawsze Promise. Więc aby się dostać do jej wyniku
  musimy zastosować metode then();
*/

async function myPromiseAsyncFunctionWithReturn() {
  try {
    const res = await myThirdPromise;
    return res;
  } catch (err) {
    console.log(err);
  }
  return "";
}

myPromiseAsyncFunctionWithReturn().then((res) => console.log(res));
