import inquirer from "inquirer";
async function otherAmount(balance) {
    const otheramt = await inquirer.prompt([{
            name: "otherAmount",
            type: "number",
            message: "please enter your amount"
        }]);
    if (otheramt.otherAmount < balance) {
        balance -= otheramt.otherAmount;
    }
    else {
        console.log("you have insufficient balance");
        otherAmount(balance);
    }
    return balance;
}
async function cashwithdraw(balance) {
    const answer = await inquirer.prompt([{
            name: "amount",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "10000", "otherAmount"],
            message: "please select your amount"
        }]);
    switch (answer.amount) {
        case "500":
            if (balance > Number(answer.amount)) {
                balance -= 500;
                console.log(`your new balance is: ${balance}`);
            }
            else {
                console.log("you have insufficient balance");
            }
            break;
        case "100":
            if (balance > Number(answer.amount)) {
                balance -= 100;
                console.log(`your new balance is: ${balance}`);
            }
            else {
                console.log("you have insufficient balance");
            }
            break;
        case "2000":
            if (balance > Number(answer.amount)) {
                balance -= 2000;
                console.log(`your new balance is: ${balance}`);
            }
            else {
                console.log("you have insufficient balance");
            }
            break;
        case "5000":
            if (balance > Number(answer.amount)) {
                balance -= 5000;
                console.log(`your new balance is: ${balance}`);
            }
            else {
                console.log("you have insufficient balance");
            }
            break;
        case "10000":
            if (balance > Number(answer.amount)) {
                balance -= 10000;
                console.log(`your new balance is: ${balance}`);
            }
            else {
                console.log("you have insufficient balance");
            }
            break;
        case "otherAmount":
            balance = await otherAmount(balance);
            console.log(`your new balance is: ${balance}`);
            break;
    }
    return balance;
}
export default cashwithdraw;
