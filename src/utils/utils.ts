import { resolve } from 'path';

export class Utils {

    //Recupera o caminho absoluto de um diretorio
    public static getPath(caminho: string): string {
        return resolve(caminho);
    }
}