export interface CreateTableUseCase{
    execute: ( option: CreateTableOptions ) => string;
}

export interface CreateTableOptions{
    base: number;
    limit: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor(
        /**
         * DI - Dependency Injection
         */
    ){}

    execute({ base, limit }: CreateTableOptions){
        const header = 
`==============================
        Tabla del ${base}
==============================\n`;
        let output = header;    
        for (let index = 1; index <= limit; index++) {
            output += `${base} x ${index} = ${base * index}`;

            if( index < limit) output += '\n';
        }

        return output;
    }
}