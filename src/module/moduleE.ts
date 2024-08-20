import * as path from 'path';
import * as fs from 'fs';
export class readArchives {
    public readLastname (archive: string): string {
        const external = path.extname(archive);
        return external;
    };

    public readTextFile (archivePath: string): void {

        fs.readFile(archivePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
            if (err) {
                archivePath = '';
                console.error(`Error reading file: ${archivePath}`);
                return false;                
            }

            console.log(data);
            return true;
        });
    };
}

const startFileClass = new readArchives();
console.log(startFileClass.readLastname('hackathon.java'));
startFileClass.readTextFile('./archive/dalvapt3.txt');