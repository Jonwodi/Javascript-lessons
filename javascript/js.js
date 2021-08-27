// Variables
// The keyword var is used to define a variable.
var nba = "Lebron James"; // This is a string
var age = 21.5; // This is a number
var isAProfessionalAthlete = true; // This is a boolean
var empty = undefined; // This is a undefined variable.

console.log(nba + "type =" + typeof nba);
console.log(age + "type =" + typeof age);
console.log(isAProfessionalAthlete + "type =" + typeof isAProfessionalAthleteba);
console.log(empty + "type =" + typeof empty);

/* Objects - 
a object contain properties which have value assigned to that property.
A object is very similar to a dict in python, in terms structure and layout.
Also objects can contain another object within it as property. 
For example, in the example below address is a object inside another object called person. */
var person = { // The variable person is a object.
  name: "Tyrone", // name is a property of a object ehich holds a string value.
  age: 22,
  isAMmaFighter: true,
  dob: "30/06/1997",
  address: {
    firstline: '124 Kings road',
    postcode: "se28 2fg",
    country: "England",
  }
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.address)
console.log(Object.values(person));

//Arrays(lists)
var friends = ["Jordan", "James", "Dovy", "Carlo", "Ebou", "Azza", "Matt"]; // a array of strings

console.log(friends);
console.log(friends[1]);
console.log(friends.length); // .length returns the amount of items in an array.

for (var x of friends) { // This is how to loop items in an array.
  console.log(x);
}

friends.forEach(function (x, index) { // This is how to loop items in an array with their index position.
  console.log(index + "-" + x);
});

// Arithmetic Operators 
// There 7 types of arithmetic operators
// + = addition
// - = subtraction
//  / = division
// * = multiplication
// ++ = increment
// -- = decrement
// % = modulus

var addtion = 2 + 3;
var subtraction = 5 - 10;
var division = 9 / 3;
var multiplication = 24 * 24;
var remainder = 10 % 4;

console.log(addtion);
console.log(subtraction);
console.log(division);
console.log(multiplication);
console.log(remainder);

// Functions

function mathsAddition() {
  var numb1 = 10;
  var numb2 = 20;
  var totalNumb = numb1 + numb2;
  return totalNumb;
}

console.log(mathsAddition());
