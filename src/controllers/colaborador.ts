import {JsonController, Param, Body, Get, Post, Put, Delete, BadRequestError} from "routing-controllers";
import colaboradorServices from './../services/colaborador';
import { Colaborador } from './../domain/colaborador';

@JsonController()
export class ColaboradorController {

    constructor() { }

    @Get("/colaboradores")
    public async getColaboradores() {
        const result = await colaboradorServices.obterColaboradores();
        return JSON.stringify(result);
    }

    @Get("/colaboradores/:cpf")
    public async obterColaboradorPorCPF(@Param("cpf") cpf: string) {

        const result = await colaboradorServices.obterColaboradorPorCPF(cpf);
        return JSON.stringify(result);
    }
    
    @Post('/colaboradores')
    public async adicionarColaborador(@Body() pColaborador: any) {
        
        const colaborador: Colaborador = {
            cpf: pColaborador.cpf,
            nome: pColaborador.nome,
            telefone: pColaborador.telefone,
            email: pColaborador.email,
            status: pColaborador.status,
            classificacao: pColaborador.classificacao
        }

        const result = await colaboradorServices.adicionarColaborador(colaborador);

        return JSON.stringify(result);        
    }
}