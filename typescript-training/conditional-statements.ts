// conditional statement : Statements along with conditions
// statement  : line of code

//so there are two different types of conditional statements we have in typescript

//1. if-else Statement : When we don't know the result of the condition before itself
//2. switch case statement : When we want to choose one option among multiple options available.

//1. if-else Statement

// syntax :

// if(condition 1) {
// code to be executed if condition 1 is true
// } else if (condition 2){
// code to be executed if condition 2 is true
// } else if (condition 3) {
// code to be executed if condition 2 is true
// } else {
//  code to be executed if all condition are false.
//}

// 1-1 : Nested if-else conditional statement :

// if (condition) {
//  code to be executed if condition 1 is true
// if(condition) {
// code to be executed
// } else {
// code to be executed
//}
// } else if (condition 2){
// code to be executed if condition 2 is true
// } else if (condition 3) {
// code to be executed if condition 2 is true
// } else {
//  code to be executed if all condition are false.
//}

// Example of if-else conditional statement

let percentage: number = 95;

if (percentage >= 90) {
  console.log("Grade A");
} else if (percentage >= 80) {
  console.log("Grade B");
} else if (percentage >= 70) {
  console.log("Grade C");
} else if (percentage >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// Example of nested if-else conditional statement

if (percentage >= 90) {
  console.log("Grade A");
  if (percentage >= 95) {
    console.log("hey buddy , You will get gold medal !!!");
  } else {
    console.log("hey buddy , You will get silver medal !!!");
  }
} else if (percentage >= 80) {
  console.log("Grade B");
} else if (percentage >= 70) {
  console.log("Grade C");
} else if (percentage >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// Example of nested if-else conditional statement
if (percentage >= 90) {
  console.log("Grade A");
  if (percentage >= 95) {
    console.log("hey buddy , You will get gold medal !!!");
  } else {
    console.log("hey buddy , You will get silver medal !!!");
  }
}

// What is switch statemrnt?
// Ans : Use the switch statement to select one of many code blocks to be executed.
// switch(expression){
// case x :
// break;
// case : y
// code block
// break;
// default :
// break;
//}

// Example of switch-case conditional statement
let env: string = "qa";

switch (env) {
  case "dev":
    console.log("Launch the application with dev.amazon.com");
    break;
  case "qa":
    console.log("Launch the application with qa.amazon.com");
    break;
  case "prod":
    console.log("Launch the application with prod.amazon.com");
    break;
  default:
    console.log("Please provide the correct environment name");
}
