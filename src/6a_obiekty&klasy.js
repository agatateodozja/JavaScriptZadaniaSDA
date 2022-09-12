//Hierarchia klas
//Zwierze - nazwa. wielkosc
//Latajace, plywajace, chodzace -> poruszSie
//Ptak, Ryba, Kon, Krowa -> dajGlos
//Utworzyc obiekty

// class Zwierze {
//   constructor(nazwa, wielkosc){
//     this.nazwa = nazwa;
//     this.wiekosc = wielkosc;
//   }
// }

// class Latajace extends Zwierze {
//   constructor(nazwa, wielkosc){
//   super(nazwa, wielkosc);
// }
// poruszSie(){
//   console.log("Fly")
// } 
// }

// class Plywajace extends Zwierze {
//   constructor(nazwa, wielkosc){
//     super(nazwa, wielkosc);
//   }
//   poruszSie(){
//     console.log("Swim")
//   } 
//   }
// class Chodzace extends Zwierze {
//   constructor(nazwa, wielkosc){
//     super(nazwa, wielkosc);
//   }
//   poruszSie(){
//     console.log("Walk")
//   } 
//   }

//   class Ptak extends Latajace {
//     constructor(nazwa,wielkosc, szybkosc) {
//       super(nazwa,wielkosc);
//       this.szybkosc = szybkosc;
//     }
//     dajGlos(){
//       console.log("cip-cip")
//     }
//   }

//   class Krowa extends Chodzace {
//     constructor(nazwa,wielkosc, waga) {
//       super(nazwa,wielkosc);
//       this.waga = waga;
//     }
//     dajGlos(){
//       console.log("muuu")
//     }
//   }

//   const ptak = new Ptak("kruk", "L", "szybki");

//   const krowaLoLa = new Krowa ("Lola", 60, 30);

//   console.log(krowaLoLa)

// 15. Utwórz object constructor Queue, czyli zaimplementuj strukturę danych kolejki.
// - Enqueue - dodaje na koniec kolejki
// - Dequque - usuwa element z początku kolejki i go zwraca

// class Queue {
//   constructor(){
//     this.tab = [];
//   }
//   enqueue(item){
//     this.tab.push(item);
//   }
//   dequeue(item) {
//     return this.tab.shift()
//   }
// }

// const queue = new Queue ();

// queue.enqueue(1);
// queue.enqueue(1);
// queue.enqueue(1);
// queue.enqueue(1);
// console.log(queue.dequeue());
// console.log(queue.dequeue());


// class Queue {
//   constructor() {
//     this.tab = [];
//   }
//   enqueue(item) {
//     this.tab.push(item);
//   }
//   dequeue() {
//     return this.tab.shift();
//   }
// }
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());


// 16. Utwórz object constructor Stack, czyli zaimplementuj strukturę danych stosu.
// - PushOnStack - dodaje na wierzch stosu
// - PopFromStack - usuwa element z początku stosu i go zwraca

//WYKONAC ZADANIE