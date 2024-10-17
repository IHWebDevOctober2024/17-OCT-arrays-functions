const students = ["Dani", "Diego", "Kara", "Nigel", "Piet"];

students.forEach((student) => {
  console.log(student.toUpperCase());
});

console.log(students);

const string = "hellooooo";

const stringArray = string.split("");

console.log(stringArray);

const reversedArray = stringArray.reverse();

console.log(reversedArray);

console.log(reversedArray.toString().replaceAll(",", ""));

const reversedString = reversedArray.join("");
console.log(reversedString);