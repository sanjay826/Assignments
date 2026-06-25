// What is program - Program is all about a set of instructions 

// 1. launch the chrome browser 
// 2. Navigate to the URL : https://www.google.com
// 3. Click on the gmail link 
// 4. Enter the user name as sanjay , password as Sanjay123 in the login page 
// 5. Click on the Sign in button 
// 6. Verify the tittle of the page  is gmail 

// What is instruction : Instruction is a combination of data plus action that we want to
//                       complete by using the data. 


// How to Store the data in the program? 
// Declaration variable = data ; 

// In javaScript, we can declare the variables by using three different keywords. 
// 1. var (We should avoid int the modern JavaScripts)
// 2. let (Used for the variables that can be re-assigned);
// 3. const (Used for constant values that cannot be reassigned)

// These three different variable declaration will differ mainly based on four important parameters
// 1. Initialization
// 2. Reassignment 
// 3. Re-declaration
// 4. Scope

// 1. Initialization => adding the value at the time of declaration 
var a; // it is not manadatory to store the data at begining 
let b; // it is not manadatory to store the data at begining 
const c=10; // it is mandatory to store the data ate the begining 


// 2. Reassignment - Changing the original value 
a=10; // var will allow  reassignment 
b=20; // let will allow reassignment 
//c=30; // const won't allow reassignment 

// 3. Re-declaration : Declaring the same variable again to store different data. 
var a ="Sanjay"; // var will allow re-declaration 
//let b = "Manjay"; // let won't allow re-declaration 
//const c = "Kumar"; // let won't allow re-declaration 

//4. Scope =>  The area of the program where the variable is accessible 
// var  => not block scoped
// let => block scoped 
// const => block scoped 
{
  let x= 20;
  const y=30;
  var z=40;

  // console.log(x);
  // console.log(y);
  // console.log(z);
 

}
  //console.log(x);
  //console.log(y);
  console.log(z);
 






