const price = 15;

// if condition 

if(price === 10) {
  console.log("give me one");
}
else if(price === 5) {
  console.log("give me 2");
}
else if (price === 2) {
  console.log("give me five")
}
else {
  console.log("I will drink water");
};

// switch condition

switch(price) {

  case 10 : 
    console.log("give me one");
    break;

  case 5 :
    console.log("give me 2");
    break;

  case 2 : 
    console.log("give me five");
    break;

  default :
    console.log("I will drink water");
}