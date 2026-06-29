// how to store data in a program ?

// Syntax : declaration variable = data;
// Operators in JavaScript 
// Operators are nothing but a set of special characters used in JavaScript to perform different types of operation

// There are mainly five different types of operators. we are having in JavaScript 

// 1. Airthmetic Operator 
// 2. Assignment Operator 
// 3. Comparison Operator
// 4. Logical Operator 
// 5. Ternary Operator 

// 1. Airthmetic Operator => The special characters used to perform mathematical operation
// + addition 
// - subtraction 
// * multiplication
// / division 
// % modulus / reminder 
// ++ increment (Increase the previous value by 1)
// -- decrement (Decrease the previous value by 1)

let a = 10;
let b= 20;

// console.log(a++);
// console.log(b--);

// a++ => Post - increament (Post execution of this line, increase the value by 1 )
// b-- => Post - decreament(Post execution of this line, decrease the value by 1)

// console.log(a++);
// console.log(a); // next line  after  post increament 
// console.log(b--);
// console.log(b); // next line  after  post decreament

// ++a => Pre - increament (Before execution of this line, increase the value by 1 )
// --b => Pre - decreament(Before execution of this line, decrease the value by 1)

console.log(++a);
console.log(--b);

// 2. Assignment Operator : special characters used to assign values to the variable(=,+=,-=,*=,/=,%=)

let i=10;
console.log("Initial value of I is :" +i);

i+=10; // i = i+10; 10 + 10 =20
console.log("After using += value of i is :" +i);

i-=10; // i = i-10; 20-10 = 10
console.log("After using -= value of i is :" +i);

i*=10; // i = i*10; 10*10 =100
console.log("After using *= value of i is :" +i);

i/=10; // i = i/10; 100/10 =10
console.log("After using /= value of i is :" +i);

i%=10; // i = i%10; 10%10 = 0 
console.log("After using %= value of i is :" +i);

// 3. Comparison Operators : special characters used to compare to values. (==,===,!=,>,<,>=,<=);
// == represents loose equality.(Loose equality compare only data);
// === represents strict equality.(Strict equality compares data along with its data type)

let x=10;
let y="10";
let z=10;


console.log(x==y); // true
console.log(x==z); // true

console.log(x===y); // false
console.log(x===z); // true

console.log(x!=y); // false
console.log(x!=z); // false

console.log(x>y); // false
console.log(x>z); // false

console.log(x<y); // false
console.log(x<z); // true

console.log(x>=y); // true
console.log(x>=z); // true

// 4. Logical Operators = Special characters used to build the logic by combining multiple conditions together (&& (and), || (or), ! (not))

// && (and) => we will get a result as true only if all the conditions are true.
// || (or) => we will get a result as true if any one of the condition is true.
// ! (not) => wr will get a result as true if the condition is false. 

let p= 10;
let q = 20;
let r= 30;

console.log(p<q && q>r);  // true && false = false.
console.log(p<q || q>r);  // true || false = true.
console.log(!(p<q)); //  true  = false 

// 5. Ternory Operator : Special character used to write a condition in a single line or shorthand of an if-else conditional statement(?)

// Syntax : let result = condition ? value-if-true  : value-if-false

let age = 27;

let result = (age>=18) ? "Eligible" : "Not Eligible";
console.log(result);












