import chalk from 'chalk';
import * as readline from 'readline';
const myInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Quer saber algo legal? O interpretador "question" do readline converte TUDO que você mandar pra string :)

myInterface.question("What's your favourite color?", (color: string) => {
    interface Color {
        colorOption: string [];
    };

    const allColors: Color = {
        colorOption: ['Red', 'Blue', 'Green', 'Yellow'],
    };

    if (!allColors.colorOption.includes(color.trim())) {
        console.log(`You must choose a valid color!`);
        myInterface.close();
        return false;
    };

    console.log(`You choose ${color}!`);


    //console.log(`Please insert a valid color!`);
    //myInterface.close();
    //return false;

    myInterface.question("Now, choose another color!", (color2: string): void => {
        interface color {
            colorOption2: string [];
        };
    
        const allColors2: color = {
            colorOption2: ['Orange', 'Light Blue', 'Light Green', 'Pink'],
        };
    
        if (allColors2.colorOption2.includes(color2.trim())) {
            console.log(chalk.greenBright(`Your second favourite color is ${color2}!`));
            return;
        };
    
        console.log("You must choose a valid color!");
        myInterface.close();
    
    })

    },

)


