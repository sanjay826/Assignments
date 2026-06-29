// Data type in javaScript  are divided into two major categories : 
// 1. Primitive data type : (Immutable data type) (meaning the original value won't change if we just perform some opeartion on top of that)

// 2. Non-Primitive data type : (Mutable data type) (meaning the original value will change if we just perform some operation on top of that)

// Immutable 
let a =10;
a+10;
console.log(a);

// Mutable
let empData = {
  "name" : "Sanjay",
  "empID" : 12345
}
empData.age =35;
console.log(empData);

// ************** Primitive Data type ***************
// 1. number 
// 2. string
// 3. boolean
// 4. undifined 
// 5. null
// 6. symbol

// 1. Number : The data type that can store numbers with decimals or without any decimals, without any quatations

let num1 = 10;
let num2 = 10.5;

console.log(typeof num1);
console.log(typeof num2);

// 2. string : the data type that can store text, characters, word, sentences, etc. it is always enclosed withing single or double quates or backticts. 

let empName = "Sanjay Kumar";
let empRole = "Senior SDET";

console.log(typeof empName);
console.log(typeof empRole);

let empDetail = 'emp name is '+empName+' and emp role is '+empRole;
console.log(empDetail);

let empInfo = `emp name is ${empName} and emp role is ${empRole}`;
console.log(empInfo);


// 3. boolean : boolean data type will be used to store the result of a condition in the form of true or false.
let isRaining = true;
let isSunny = false;

console.log(typeof isRaining);
console.log(typeof isSunny);

// 4. undefined : Undefined represent a variable that has been declared but not assigned any value. 
let age ;
console.log(age);
console.log("What is Type of undefined : ",typeof age);

// 5. null : null represents a variable that has been declared and assigned a null value or empty value. 

let salary = 10000;
console.log(salary);

salary = null;
console.log(salary);
console.log("What is Type of null: ", typeof salary);

/* 
* @Interview Question - What is differnce between undefined and null value ?
* @answer :  Undefined represent a variable that has been declared but not assigned any value. 
* wheres null represents a variable that has been declared and assigned a null value or empty value.
*/

//*******Non Primitive Data Type ********
// Object : Object data type represents a collection of key-value pairs within the curly braces. 

// let empName = "Sanjay";
// let empID = 12345;
// let empRole = "SDET";
// let visStatus = true; 

let empData1 = {
  "empName" : "Sanjay",
  "empID" : 12345,
  "empRole" : "SDET",
  "visStatus" : true,
   "address" :{
            "city" : "Giridih",
            "State" : "Jharkhand",
            "Country" : "India"
              }

}

// Access the data from object 
console.log(empData1.empName);
console.log(empData1.empID);
console.log(empData1.address.Country);

console.log(empData1["empID"]); // obejctName["keysName"] =value 
console.log(empData1["address"]["Country"]); // objectName["keysName"]["keyName"] = value.

let key = "empName";
console.log(empData1[key]);
console.log(empData1.key);


const user = {
    username: "admin",
    password: "admin123"
};

for (let key in user) {
    console.log(key, user[key]);
}
/*
 * Q: When should we use bracket notation instead of dot notation?
 * Answer: Use bracket notation when the property name is dynamic or stored in a variable.
 * This concept is heavily used in:
 *            JSON handling
 *            API response parsing
 *            Dynamic forms
 *            Data-driven testing in Playwright/Cypress
 *            Iterating over object properties
*/


// Array : Array is nothing but a list of value in java script. 
let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

let fruitsAndPrices = ["Apple", 100, "Banana", 50, "Mango", 80, "Grapes", 240, "Orange", 150];
console.log(fruitsAndPrices.length);
console.log(fruitsAndPrices[2])

// function : Function is a date type that represents a block of code or collection of statements 
// written together to complete a specific task.

function loginIntoApplication(BrowserName ,Username, Password){
  console.log(`Launch the ${BrowserName} Browser`);
  console.log("Enter the URL: https://www.icici.com/");
  console.log(`Enter the username as ${Username}} and password as ${Password}`);
  console.log("Click on the login button");
}

function getAccountBalance(){
  console.log("Navigate to the account balance page");
  let accountBalance = 100000;
  return accountBalance;
}

function logoutAndCloseBrowser(){
     console.log("Logout from the application");
     console.log("Close the browser");
}

// set : Set is a data type that represent a collection of unique values of any data type.
// 1. String values 
const set = new Set();

set.add("Sanjay");
set.add("QA Engineer");

console.log(set); // Set(2) {'Sanjay' ,'QA Engineer'}

// 2. Number values
let empIds = new Set();
empIds.add(1234);
empIds.add(1239);
empIds.add(1234);

console.log(empIds.size);
console.log(empIds); // Set(2) { 1234, 1239 }

// 3. Boolean values
const set0 = new Set();

set0.add(true);
set0.add(false);

console.log(set0); // Set(2) { true, false }

// 4. Object values 
const emp1 = { id: 101 };
const emp2 = { id: 102 };

const set1 = new Set();

set1.add(emp1);
set1.add(emp2);

console.log(set1); // Set(2) { { id: 101 }, { id: 102 } }

// Important: Objects are compared by reference, not by content.
// What is a Reference? :A reference is essentially the memory address where an object or array is stored

const set2 = new Set();

set2.add({ id: 101 });
set2.add({ id: 101 });

console.log(set2.size); // 2

// Although both objects look identical, they are two different object references.
// 5. Array values
const set3 = new Set();

set3.add([1, 2, 3]);
set3.add([1, 2, 3]);

console.log(set3.size); // 2
// Again, arrays are compared by reference.

// 6. Function values

function login() {}

const set4 = new Set();

set4.add(login);

console.log(set4.has(login)); // true

// Symbole Value 
const id1 = Symbol("id");
const id2 = Symbol("id");

const set5 = new Set();

set5.add(id1);
set5.add(id2);

console.log(set5.size); // 2

// Every Symbol is unique, even if they have the same description.
// 8. Mixed data types in the same Set
const set6 = new Set();

set6.add("Sanjay");
set6.add(101);
set6.add(true);
set6.add({ role: "QA" });
set6.add([1, 2, 3]);

console.log(set6); //Set(5) {'Sanjay',101,true,{ role: 'QA' },[1, 2, 3]}

/**
 * A JavaScript Set is a collection of unique values where each value can be of any data type, 
 * such as strings, numbers, booleans, objects, arrays, functions, or symbols. A Set automatically 
 * removes duplicate primitive values and determines uniqueness for objects and arrays based on 
 * their references.
 * A Set is commonly used for:
 *                        Removing duplicates from arrays
 *                        Storing unique IDs or values
 *                        Fast existence checks using has()
 *                        Tracking visited elements in algorithms or applications
 * 
 */

// Map : Map is a data type that represents a collection of key-value pairs where the keys can be any data type. 

/**
 * A JavaScript Map stores key-value pairs and allows keys of any data type such as strings, numbers, booleans,
 *  objects, arrays, functions, symbols, and even other maps. Unlike objects, Map does not convert keys 
 *  to strings and preserves the original key type.
 */


let empDetails = new Map();
empDetails.set("empName", "Sanjay");
empDetails.set("empID", 12345);
empDetails.set("empRole", "SDET");
empDetails.set("visStatus", true);


console.log(empDetails.size);
console.log(empDetails);

// Date : Date is a data type that represents a specific point in time, including the date and time infromation
let currentDate = new Date();
console.log(currentDate);

// get current year, month ,date , hours, minutes , second , day 
console.log(currentDate.getFullYear()); // 2026
console.log(currentDate.getMonth());  // 5
console.log(currentDate.getDate()); // 29
console.log(currentDate.getHours()); // 7
console.log(currentDate.getMinutes()); // 56
console.log(currentDate.getSeconds()); // 7
console.log(currentDate.getDay()); // 1


















