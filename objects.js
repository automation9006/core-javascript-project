// objects can be arrays with properties

var ourDog = {
    "name" : "Lexi",
    "legs" : "4",
    "it drinks" : "water",
    "friends" : [],
    10: "Sachin"
}

// dot annotation
var dogName = ourDog.name;

// bracket annotation
var itDrinks = ourDog ["it drinks"];

// with variables
var itDrinks = ourDog ["it drinks"];

// delete property
delete ourDog.name;
