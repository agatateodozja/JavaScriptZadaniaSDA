/*
  Fetch API udostępnia nam metody do manipulowania requestem i responsem HTTP.
  Pozwala na asynchroniczną wymianę danych poprzez sieć.

  W najprostszej postaci fetch() wykonuje HTTP GET w celu pobrania danych z podanego URI.
  Fetch() operuje na Promise czyli w celu otrzymania wyniku musimy wykorzystac await lub then().
*/

const users = fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((users) => users);

/*
  Warto zauważyć, że fetch zwraca nam obiekt Response dopiero korzystając z obiektu Response możemy
  uzyskać dane, które są nam potrzebne.
*/

/*
  Fetch() posiada możliwość przekazania opcji, ktore konfigurują w jaki sposób ma zostać wykonane
  zapytanie HTTP.
*/

const usersWithOptions = fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "morpheus",
    job: "leader"
  })
}).then((res) => {
  if (res.ok) {
    console.log("Sukces");
  }
});
