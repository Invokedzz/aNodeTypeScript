import inquirer from "inquirer";
const ourInquirer = inquirer

ourInquirer.prompt([{
    type: 'input',
    name: 'action',
    message: 'What\'s your name?',
    choices: ['Pablo', 'Pablito', 'Pablon'],
}]).then((answers) => {
    console.log(answers);
}).catch((err: Error | null) => {
    console.error(err);
    return;
});