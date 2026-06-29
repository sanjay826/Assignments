// Bank Transactions Assignment

let transactions: number[][] = [
    [1, 50000],
    [2, -2000],
    [3, 3000],
    [4, -15000],
    [5, -200],
    [6, -300],
    [7, 4000],
    [8, -3000],
];

let creditCount: number = 0;
let debitCount: number = 0;
let totalCredited: number = 0;
let totalDebited: number = 0;
let accountBalance: number = 0;
let suspiciousCount: number = 0;

let transactionLimit: number = 10000;

console.log("****** Bank Transaction Report ********");

for (let i = 0; i < transactions.length; i++) {
    let transactionId: number = transactions[i][0];
    let amount: number = transactions[i][1];

    if (amount > 0) {
        // Credit transaction
        creditCount++;
        totalCredited = totalCredited + amount;
    } else if (amount < 0) {
        // Debit transaction
        debitCount++;
        totalDebited -= amount;
    }

    accountBalance = accountBalance + amount;

    // Suspicious if amount exceeds +10000 or -10000
    if (amount > transactionLimit || amount < -transactionLimit) {
        suspiciousCount++;
        console.log(
            "Suspicious credit/ debit Transaction with Amount " + amount +
            " (Transaction Id: " + transactionId + ")"
        );
    }
}

console.log("Total Credit Transactions: " + creditCount);
console.log("Total Debit Transactions: " + debitCount);
console.log("Total Amount Credited: " + totalCredited);
console.log("Total Amount Debited: " + totalDebited);

console.log("Total Amount Remaining in Bank Account: " + accountBalance);
console.log("Total Suspicious Transactions: " + suspiciousCount);
