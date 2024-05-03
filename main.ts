import inquirer from "inquirer";
import chalk from "inquirer";


console.log("\n \t Welcome to 'Shuaib' - Currency Convertor\n")
// Deffine a list a currencies and thier exchange rates
let exchange_rate: any = {
    "USD": 1, //Base Currency
    "EUR": 0.9, //European
    "JYP" : 113, //Japenese
    "CAD": 1.3, //Canadian
    "AUD": 1.65, //Australine Dollar
    "PKR": 277.70, //Pakistan Rupees
    // Add more currency and their exchange rates here
}


// Form the user to select currency to convert from and to

let user_answer = await inquirer.prompt(
    [
        {
            name: "from_currency",
            type: "list",
            messageL: "Select the currency to  convert from:",
            choices: ["USD", "EUR", "JYP", "Cad", "AUD", "PKR"]

        },
        {
            name: "to_currency",
            type: "list",
            message: "Select the currency to convert into:",
            choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
        
        },
        {
            name: "amount",
            type: "input",
            message: "Enter the  amount to convert:"
        }
    ]
);


// Perform currency  conversion by using formula

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount


// Display the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);
