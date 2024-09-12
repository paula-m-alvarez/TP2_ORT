import fs from 'fs';

const texto = fs.readFileSync("texto.txt", "utf-8");

console.log(texto);