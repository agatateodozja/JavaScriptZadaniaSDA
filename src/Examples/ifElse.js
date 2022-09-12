const toCheck = 2;

//EXAMPLE 1
if (toCheck === 1) {
  console.log("To jest jeden");
} else {
  console.log("To nie jest jeden");
}

//EXAMPLE 2
if (toCheck === 1) console.log("To jest jeden");
else console.log("To nie jest jeden");

//EXAMPLE 3
toCheck === 1 ? console.log("To jest jeden") : console.log("To nie jest jeden");

//EXAMPLE 4
switch (toCheck) {
  case 1:
    console.log("To jest jeden");
    break;
  default:
    console.log("To nie jest jeden");
    break;
}
