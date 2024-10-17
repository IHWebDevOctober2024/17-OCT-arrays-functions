/* for (let index = 0; index < 9; index++) {
  console.log(index);
} */

let points = 0;
/* 
while (points < 100) {
  // it's going to run while the condition is true

  points++;
  console.log("Your points are: ", points);
}
*/

do {
  // the code runs at least one time
  console.log("THIS IS THE DO WHILE");
} while (points > 1);

const myString = "Hey how are you?";

for (let character of myString) {
  // the value of the variable is going to be each character
  // or each element of the array (if it was an array)
  // console.log(character);
}

let i = 0;

while (i < 5) {
  i++;
  if (i === 3) {
    continue; // continues the loop and avoids the code below
    // break; // this breaks the loop, 4 and 5 won't be displayed
  }
  console.log(`The number is: ${i}.`);
}
