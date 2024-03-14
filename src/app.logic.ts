import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b:base, l:limit, s:show } = yarg;

let output = '';
const header = `
==============================
        Tabla del ${base}
==============================\n
`;
output += header;
for (let index = 1; index <= limit; index++) {
    output += `${base} x ${index} = ${base * index}\n`
}
if(show) console.log(output);
if(!fs.existsSync('outputs')){
    fs.mkdirSync('outputs');
}
fs.writeFileSync(`outputs/tabla-${base}.txt`, output);
console.log('File created!');