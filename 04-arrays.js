// collection of data
// list of values

const team = ["Marina", "Mica", "Oriol", "Hel·lena", "Lucas"];

console.log(team[0]);

const numbers = [1, 32, 53, 43, 65, 432];

const booleans = [true, false, false, true];

const objects = [
  { userName: "Oriol", role: "Data teacher" },
  { userName: "Mica", role: "UX/UI teacher" },
];

console.log(objects[0].role);

const arrays = [
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 1],
];

console.log(arrays[0]);

console.log(arrays[1][0]);

const matrix = [
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
];

function shoot(row, column) {
  if (matrix[row][column] === 1) {
    console.log("HIT!");
  } else {
    console.log("WATER");
  }
}

// Turn 1
shoot(13, 5);
shoot(2, 3);
shoot(15, 5);
shoot(0, 5);

const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log(typeof students);

const students2 = {
  0: "Alice",
  1: "Bob",
  2: "Charlie",
  3: "David",
  4: "Eve",
};

console.log(students2[0]);

// the array has always the same place in memory, we are not modifying the value of the variable, just changing the "clothes" of the array. The "DNA" is the same

// add a new element inside the array (at the end)
students.push("Arnaldo");

// students = ["dsdsadsadsa"] // NOT POSSIBLE
console.log(students);

// deletes the last element
students.pop();
console.log(students);

console.warn("THIS IS A WARN");

// add an element at the start
students.unshift("Mikel");

console.log(students);

students.shift();
console.log(students);

students.splice(1, 1);

console.log(students);

// interview question: What's a callback function?
// a function that is passed as an argument to another function

// with array methods we are going to use callback functions A LOT
students.forEach(function () {
  console.log("HOLI");
});

function sayHi(_, dittoIndex) {
  console.log("hello " + dittoIndex);
}

students.forEach(sayHi);

students.forEach((element) => {
  // ARROW FUNCTION
  console.log(element);
});

const myFunction = () => {
  // we can store an arrow function inside a variable
  console.log("this is my function");
};

myFunction();
