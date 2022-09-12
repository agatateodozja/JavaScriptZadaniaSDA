/*
  JavaScript udostępnia nam kilka sposobów na przechowywanie danych
*/

//TABLICA

const tab = [];
tab.push(1); // dodanie elementu
tab.pop(); // usunięcie i zwrócenie elementu z końca tablicy
tab.length; // zwraca długość tablicy
tab.indexOf(1); // szuka podanego elementu i zwraca jego index

//SET
// Jest zbiór danych unikalnych - odpowiednik matematycznego zbioru
const testSet = new Set();
testSet.add(1);
testSet.add(1);
testSet.delete(1);
testSet.clear();
testSet.has(1);
testSet.size();
testSet.forEach((el) => console.log(el));

//MAP
// Przechowuje elementy w formacie klucz-wartość. Klucze muszą być unikalne.
const testMap = new Map([
  [1, "testValue"],
  [2, "secondTestValue"]
]);
testMap.set(1, "changedValue");
testMap.set(3, "newValue");
testMap.get(1);
testMap.delete(1);
testMap.clear();
testMap.size();
testMap.forEach((el, key) => console.log(`Element: ${el}, Key: ${key}`));
