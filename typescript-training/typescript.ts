// Typescript is a superset of javaScript. that means whatever the code that we have written, whatever the concept 
 // that we learned till now all are applicable on typescript 

 // TypeScript = JavaScript + DataTypes (type safety);

 // Data type in typescript  are divided into two major categories : 
// 1. Primitive data type : (Immutable data type) (meaning the original value won't change if we just perform some opeartion on top of that)

// 2. Non-Primitive data type : (Mutable data type) (meaning the original value will change if we just perform some operation on top of that)

// Syntax  to store data in Typescript : declaration variable = data; 

// 1. Primitive data type : it can store numbers with decimals or without decimals 
let empId : number = 1234;
let hikePercentage :number = 98.20;

//2. string : the data type that can store text, characters, word, sentences, etc. it is always enclosed withing single or double quates or backticts. 
let empName : string = "Sanjay Kumar";
let empRole : string = "Senior SDET";

//3. boolean : boolean data type will be used to store the result of a condition in the form of true or false.
let isRaining : boolean = false;

//4. undefined : Undefined represent a variable that has been declared but not assigned any value. 
let age : undefined; 
console.log(age); // undefined

// 5. null : null represents a variable that has been declared and assigned a null value or empty value
let salary : null = null;
console.log(salary); // null

// 6. union : Union represents more than one data type that can be stored within the variable 
let empAddress : string | number | boolean;
empAddress = "New delhi";
empAddress = 110044; 
empAddress = true; 

// any : any represents any data type that can be stored within the variable. Indirectly we are removing the type safety
let empData : any;
empData = 12345;
empData = "Bharath";
empData = true;

//*****Non Primitive Data Type ********* */

// Object - Object data type represent a collection of key- value pairs within the curly braces 

interface empInfo {
  "empName" : string,
  "empId" : number,
  "empRole" : string,
  "empSalary" : number,
  "address" : {
    "city" : string,
     "state" : string,
     "country" : string
    }

}

let emp : empInfo = {
  "empName" : "Sanjay",
  "empId" : 1234,
  "empRole" : "Senior SDET",
  "empSalary" : 100000,
  "address" : {
    "city" : "New Delhi",
    "state" : "Delhi",
    "country" : "India"
  }
}

// Array : Array is nothing but a list of value in java script. 
let fruits : string []=["Apple", "Banana", "Mango", "Grapes", "Orange"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

let fruitsAndPrices : (string | number)[]= ["Apple", 100, "Banana", 50, "Mango", 80, "Grapes", 240, "Orange", 150];
console.log(fruitsAndPrices.length);
console.log(fruitsAndPrices[2])

// Tupple : tupple is ordered array that represent a list of value in specific order. 
// Problem Statement : I want to store empoyee name employee phone number , and employee visa status together. 

// Array : 
let empInformation :(string | number | boolean)[] = ["Sanjay Kumar", 9876543210, true]

// Tuple : 
let empDetail : [string , number, boolean] = ["Sanjay Kumar", 9876543210, true];



// function : Function is a date type that represents a block of code or collection of statements 
// written together to complete a specific task.

function loginIntoApplication(BrowserName : string ,Username : string, Password :string) : void{
  console.log(`Launch the ${BrowserName} Browser`);
  console.log("Enter the URL: https://www.icici.com/");
  console.log(`Enter the username as ${Username}} and password as ${Password}`);
  console.log("Click on the login button");
}

function getAccountBalance() : number{
  console.log("Navigate to the account balance page");
  let accountBalance = 100000;
  return accountBalance;
}

// set : Set is a data type that represent a collection of unique values of any data type.
let empIds : Set<number | string> = new Set();

empIds.add(1234);
empIds.add(1239);
empIds.add(1234);
empIds.add("ONE TWO THREE");

console.log(empIds.size);
console.log(empIds); // Set(2) { 1234, 1239 }

// Map : Map is a data type that represents a collection of key-value pairs where the keys can be any data type.
let empDetails : Map<string, string | number | boolean> = new Map();
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



