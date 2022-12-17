import inquirer from "inquirer";

async function transfer(balance: number){
    const answer =await inquirer.prompt([{
        name: "accountNumber",
        type: "number",
        message: "Enter your Account Number"
    },
    {
        name:"amount",
        type: "number",
        message: "Enter your amount"
    

}]);
if(balance > answer.amount){
    balance -= answer.amount;
}else{
    console.log("you have insufficient balance")
}

balance -= answer.amount;
return balance;

}

export default transfer;