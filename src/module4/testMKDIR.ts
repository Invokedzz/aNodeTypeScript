import fs from "fs";

if (!fs.existsSync('testdir')) fs.mkdirSync('./src/module4/testdir', {recursive: true});

// Cria uma pasta :)