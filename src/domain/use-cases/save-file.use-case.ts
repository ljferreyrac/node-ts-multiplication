import fs from 'fs';

export interface SaveFileUseCase {
    execute: ( options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    fileDestination: string;
    fileName: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(){}
    
    execute({ fileContent, fileDestination, fileName}: SaveFileOptions): boolean {
        try {
            if(!fs.existsSync(fileDestination)){
                fs.mkdirSync(fileDestination);
            }
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };
}