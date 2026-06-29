let customerName = "John Doe";
let creditScore: number = 750;
let income: number = 50000;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 20; // percentage

if (creditScore >= 750) {
    console.log(`Hi Mr. ${customerName}, loan is automatically approved.`);
}
else if (creditScore >= 650) {
    if (income >= 50000 && isEmployed && debtToIncomeRatio < 40) {
        console.log(`Customer Name: ${customerName}`);
        console.log("You are eligible for a loan.");
    }
    else {
        console.log("Additional checks failed. Loan denied.");
    }
}
else {
    console.log("The loan is denied due to low credit score.");
}