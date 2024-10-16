const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('What\'s your name? ', (name: string) => {
    if (typeof name !== 'string' || !name) {
        console.log(`Espero que você morra`);
        readline.close();
        return;
    }
    
    console.log(`Hello ${name}!`);


readline.question("What's your nickname?", (nickname: string) => {
    if (!nickname || typeof nickname !== 'string') {
        console.log('AAAAA seu folgado!');
        readline.close();
        return;  
    };

    console.log(`Então teu sobrenome é: ${nickname}`);
    console.log(`Seja bem-vindo ${name} ${nickname}!`);
    });
});