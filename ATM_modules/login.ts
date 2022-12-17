import users from "./user.js";
import inquirer from "inquirer";
import mainscreen from "./mainscreen.js";
import chalk from "chalk";

async function login(){

    const answer =await inquirer.prompt([{
        name:"AccountNumber",
        type:"number",
        message:"please enter your account Nmber"



    },
    {
        name:"pin",
        type:"password",
        message:"Enter your pin code"
    }

]);

let user = users.find(x => x.AccountNumber == answer.AccountNumber && x.pinCode == answer.pin);

if(typeof user != "undefined"){
    console.log(chalk.yellowBright(`welcome ${user.name}`));
    mainscreen(user.balance);

}else{
    console.log(chalk.redBright("you enter invalid pin or account number"))
}

}

export default login;