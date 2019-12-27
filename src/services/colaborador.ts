import instance from './../repositories/colaborador';
import { Colaborador } from '../domain/colaborador';

class ColaboradorServices {

    constructor() { }


    public async obterColaboradores() {
        return await instance.obterColaboradores();
    }

    /**
     * Retorna um colaborador a partir do seu CPF
     */
    public async obterColaboradorPorCPF(cpf: string) {        
        return await instance.obterColaboradorPorCPF(cpf);
    }

    /**
     * Adiciona um colaborador
     */
    public async adicionarColaborador(colaborador: Colaborador) {
        
        const col = await instance.obterColaboradorPorCPF(colaborador.cpf);

        if(typeof col === 'undefined' || col === undefined || col === null) {
            
            return await instance.adicionarColaborador(colaborador);
        }        

        return 'Não é permitido a inserção de mais de um registro com o mesmo CPF';        
    }


}

export default new ColaboradorServices();