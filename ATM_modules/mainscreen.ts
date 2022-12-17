import inquirer from "inquirer";
import cashwithdraw from "./cashwithdraw.js";
import cashDeposite from "./cashdeposit.js";
import transfer from "./transfer.js";
import utility from "./utilityBills.js";
import chalk from "chalk"

async function otherTransaction(){
    const otrans =await inquirer.prompt([{
        name:"otherTrans",
        type: "list",
        choices: ["yes", "No"],
        message: chalk.yellowBright("Do you want to another transaction")

    }]);
    return otrans.otherTrans;
}

async function mainscreen(balance: number){

    do{
    const options =await inquirer.prompt([{
        name:"menu",
        type:"list",
        message:"please select transacction type",
        choices:['Balance inquiry','Cash withdraw','Cash deposite','Transfer','Utility Bills','Exit']


    }]);
    

    switch(options.menu){
        case "Balance inquiry":
            console.log(chalk.yellow(`your current balance is: ${balance}`));
            break;
        case "Cash withdraw":
            balance = await cashwithdraw(balance);
            console.log(chalk.greenBright(`your transaction is successfull new balance is ${balance}`));
            break;
        case "Cash deposite":
            balance = await cashDeposite(balance);
            console.log(chalk.greenBright(`your transaction is successfull new balance is ${balance}`));
            break;
        case "Transfer":
            balance = await transfer(balance);
            console.log(chalk.greenBright(`your transaction is successfull new balance is ${balance}`));
            break;
        case "Utility Bills":
            balance = await utility(balance);
            console.log(chalk.greenBright(`your transaction is successfull new balance is ${balance}`));
            break;
        case "Exit":
            anothertran = "No";
            break;
    }
    if(options.menu !== "Exit"){
var anothertran = await otherTransaction();
    }
    if(anothertran == "No"){
        console.log(chalk.blueBright("Thank you for using our services"));
    
    }
    }
    while(anothertran != "No");
}

export default mainscreen;