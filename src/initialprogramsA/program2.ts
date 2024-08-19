const fs = require('fs'); // File System
fs.readFile('./archive/dalva.txt', 'utf8', (err: boolean, data: string): Promise <string> | boolean => {
    if (err) {
        console.log(err);
        return false;
    };

    return new Promise <string> ((response) => {
        setTimeout((): boolean => {
            response('Espera para receber o Carlinhos');
            console.log(data);
            return true;
        }, 3000);
    });

});

// O callback do "fs" recebe primeiro o erro e depois a data. A ordem dos fatores é muito importante!