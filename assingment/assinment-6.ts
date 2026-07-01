/**
 * @Assignment-5
 * Given a number n, determine whether it is a prime number or not. A prime number is a 
 * number greater than 1 that has no positive divisors other than 1 and itself.
 * 
 */

/* 
* Examples :
* Input: n = 1
* Output: true
* Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number. 
*/

let n: number = 1;
let isPrime: boolean = true;

if (n <= 1) {
    isPrime = false;
}

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}

 
if (isPrime) {
    console.log(`${n} is a prime number.`);
} else {
    console.log(`${n} is not a prime number.`);
}
