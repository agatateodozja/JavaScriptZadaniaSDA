/*
Napisz skrypt, który wyświetli słowo 'consequat' z powyższego tekstu. Napisz to w taki sposób aby
zmiana tekstu do wyświetlania wymagała minimalnej modyfikacji skryptu. 
*/

let a =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in venenatis odio, id fringilla eros. Sed dapibus venenatis pharetra";

let b = a.indexOf("amet");
let c = b + 4;

console.log(a.substring(b, c));
