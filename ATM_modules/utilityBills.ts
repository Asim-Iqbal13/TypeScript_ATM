import inquirer from "inquirer";

const Electricity = Math.ceil(Math.random()*10000+1);
const Phone = Math.ceil(Math.random()*10000+1);
const Gas = Math.ceil(Math.random()*10000+1);

async function utility(balance:number) {
    const input =await inquirer.prompt([{
        name:"billtype",
        type: "list",
        choices:["Electricity","Phone","Gas"],
        message:"please select your bill type ?"

    }]);

    if(input.billtype == "Electricity"){
        console.log(`your bill amount ${Electricity}`)
        balance -= Electricity;
    } else if(input.billtype == "phone"){
        console.log(`your bill amount ${Phone}`);
        balance -= Phone;

    } else if(input.billtype == "Gas"){
        console.log(`your bill amount is ${Gas}`);
        balance -= Gas;
    }
return balance;
}

export default utility;