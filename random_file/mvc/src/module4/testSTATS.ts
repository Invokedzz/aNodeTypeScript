import fs from "fs";
fs.stat('./src/module4/textarchive.txt', (err: NodeJS.ErrnoException | null, statst: fs.Stats): boolean => {
    if (err) {
        console.error(err);
        return false;
    };

    if (statst.isFile()) {
        console.log(statst.isDirectory());
        console.log(statst.isFile());
    };

    return false;

});

// Forma de verificar arquivos e componentes!