import fs from "fs";

fs.unlink('./src/module4/textarchive.txt', (err: NodeJS.ErrnoException | null): void => {
    if (err) {
        console.error(err);
        return;
    }; 

    console.log(`The file has been deleted`);

});