import { ErrorRequestHandler } from 'express';
import * as fs from 'fs';
const fileSystem = fs;

export class writingFile {
    private createFile (): void {
        fileSystem.writeFile('./src/module3/archive.txt', 'Carlinhos is a good man', (err: Error | null): void | Promise <void> => {
            if (err) {
                console.error(err);
                return;
            };

            return new Promise <void> ((resolve) => {
                setTimeout((): void => {
                    resolve();
                    console.log("The file has been created");
                }, 3000);
            });
        });
    };

    public async writeFile (): Promise <void> {
        this.createFile();
        console.log("Done.");
    };

}

const startClass = new writingFile();
startClass.writeFile();

export default 1;