if (false) {
  // we have to add something that returns a boolean
  console.log("This is going to run");
}

const isAdmin = false;

if (isAdmin) {
  console.log("you can modify the database");
} else {
  console.log("you can NOT modify the database");
}

const age = 65;

if (age < 18) {
  console.log("You cannot access to Razzmatazz");
} else if (age >= 18 && age < 65) {
  console.log("Please proceed to the show");
} else if (age >= 65) {
  console.log("You have a senior Techno discount");
} else {
  console.log("this is not a number");
}

const dayOfTheWeek = "Tudsadsadsaesday";

/* if (dayOfTheWeek === "Monday") {
    console.log("Start of the work week");
} else if (dayOfTheWeek === "Tuesday") {
    console.log("Second day of the work week");
} else if (dayOfTheWeek === "Wednesday") {
    console.log("Midweek day");
} else if (dayOfTheWeek === "Thursday") {
    console.log("Almost the weekend");
} else if (dayOfTheWeek === "Friday") {
    console.log("Last work day of the week");
} else if (dayOfTheWeek === "Saturday") {
    console.log("Weekend is here");
} else if (dayOfTheWeek === "Sunday") {
    console.log("Rest day before the new week");
} else {
    console.log("Invalid day of the week");
} */

switch (dayOfTheWeek.toLowerCase()) {
  case "monday":
    console.log("Start of the work week");
    break;
  // multiple cases to avoid repeating code (DRY)
  case "tuesday":
  case "wednesday":
    console.log("Today we work on the lab");
    break;
  default: // this is not mandatory
    console.log("Sorry, this is not a day of the week");
}
