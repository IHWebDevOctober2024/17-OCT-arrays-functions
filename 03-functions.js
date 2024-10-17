// FUNCTION DECLARATION

function sayHi() {
  console.log("hi");
}

// FUNCTION INVOCATION
sayHi();

// PARAMETERS
function sum(numberOne, numberTwo) {
  // this is a shorthand to create variables that are going to be available on the function
  console.log("Number one:", numberOne);
  console.log("Number two:", numberTwo);

  console.log("The result is: ", numberOne + numberTwo);
}

// ARGUMENTS, the actual value of the previous parameters
sum(20, 300);
sum(30, 100);
sum(60, 100);

console.log(sum.length); // counts the parameters
console.log(sum.toString()); // displays the code for the function

function withReturn() {
  return "Hello world from a function";
}

console.log(withReturn());

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo; // the return is useful to store the result in a variable
  console.log("Hello, I am after the return statement."); // this won't run
}

const firstResult = divide(20, 2);
const secondResult = divide(213, 4);

console.log(firstResult, secondResult);

function printName(name) {
  if (name.length === 0) {
    return "Please provide a valid name!";
  }

  return `Name is ${name}.`;
}

console.log(printName("")); // => Please provide a valid name!
console.log(printName("George")); // => Name is George.

function returnNames(firstName, lastName) {
  const object = {
    firstName: firstName,
    lastName: lastName,
  };

  return object;
}

const user1 = returnNames("Marina", "Cotanda");

console.log(user1.lastName);

