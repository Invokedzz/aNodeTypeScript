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

    if (allColors.colorOption.includes(color)) {
        console.log(`Your favourite color is ${color}!`);
        myInterface.close();
        return;
    }


    console.log(`Please insert a valid color!`);
    myInterface.close();
    return;


    },

)