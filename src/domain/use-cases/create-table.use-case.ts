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

    execute({ base, limit}: CreateTableOptions){
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

        return output;
    }
}