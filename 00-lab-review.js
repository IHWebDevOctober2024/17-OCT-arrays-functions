const stringToCheck = "A man, a plan, a canal, Panama!";
let string = "";
let reversedString = "";

for (let i = 0; i < stringToCheck.length; i++) {
  if (
    stringToCheck[i] !== "," &&
    stringToCheck[i] !== "!" &&
    stringToCheck[i] !== " "
  ) {
    string += stringToCheck[i].toLowerCase();
  }
}

for (let i = stringToCheck.length - 1; i >= 0; i--) {
  if (
    stringToCheck[i] !== "," &&
    stringToCheck[i] !== "!" &&
    stringToCheck[i] !== " "
  ) {
    reversedString += stringToCheck[i].toLowerCase();
  }
}

console.log("THIS IS THE FINAL STRING: ", string);
console.log("THIS IS THE FINAL REVERSED: ", reversedString);

console.log("ARE THEY THE SAME?", string === reversedString);

const testString = "amor roma";

const array = testString.split(" ");

console.log(array);

array.forEach(function (element, index, arr) {
  console.log(element);
  console.log(index);
  console.log(arr);
});

