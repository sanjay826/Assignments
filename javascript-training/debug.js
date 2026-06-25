// Debuging : Debugging is the process of identifying and fixing the error in the program

console.log("Executing Line 1");
console.log("Executing Line 2");
console.log("Executing Line 3");
sumOfNumbers(5,10);
console.log("Executing Line 4");
console.log("Executing Line 5");
console.log("Executing Line 6");
console.log("Executing Line 7");
console.log("Executing Line 8");
console.log("Executing Line 9");
console.log("Executing Line 10");


// Debugging the program step by step 
// 1. At the break points(before the line where you want to manually execute the program
// 2. Run the program in debug node 


// Continue(F5) => Continue the execution till the next break point 
// Stop (Shift + F5) => Stop the execution of the program
// Restasrt (CTRL + Shift + F5) => Restart the execution of the program from debugining 

// Step over (F10) => Execute the current line and move to the next line 
// Step Into (F11) => Go Inside the function. check the internal code. 
// Step out(Shift + F11) => Come out of the function and move the next line 

function sumOfNumbers(a,b){
  c =a +b ;
  console.log(c);
}



