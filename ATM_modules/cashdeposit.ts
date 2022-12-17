import inquirer from "inquirer";

async function cashDeposite(balance: number){
    const amount =await inquirer.prompt([{

        name: "amt",
        type: "number",
        message: "enter your amount"

    }]);
    balance += amount.amt;
    return balance;
}

export default cashDeposite;