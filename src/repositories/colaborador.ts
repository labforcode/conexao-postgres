import { DbConnection } from "../core/config/db-connection/db-connection";
import { Colaborador } from "../domain/colaborador";

class ColaboradorRepository extends DbConnection {

    private static instance: any = null;
    private pool: any;

    private constructor() {
        super();
        this.pool = DbConnection.getPool();
        this.pool.connect();
    }

    public static getInstance() {

        if(this.instance != null) {
            return this.instance;
        }

        this.instance = new ColaboradorRepository();
        return this.instance;
    }

    public async obterColaboradores() {
        try {
            const tQuery = `SELECT colaboradores_id, cpf, nome, telefone, email, status, classificacao
                            FROM colaboradores;`;

            const { rows } = await this.pool.query(tQuery);
            return rows;

        } catch (error) {
            throw error;
        }
    }

    /**
     *
    */
    public async obterColaboradorPorCPF(cpf: string) {

        try {
            const tQuery = `SELECT colaboradores_id, cpf, nome, telefone, email, status, classificacao
                            FROM colaboradores
                            WHERE cpf = $1;`;

            const params = [cpf];

            const { rows } = await this.pool.query(tQuery, params);

            return rows[0];

        } catch (error) {
            throw error;
        }
    }

    /**
    *
    */
    public async adicionarColaborador(colaborador: Colaborador) {
        try {

            const tQuery = `INSERT INTO colaboradores(cpf, nome, telefone, email, status, classificacao) 
                            VALUES($1, $2, $3, $4, $5, $6)`;
            const params = [colaborador.cpf, colaborador.nome, colaborador.telefone, colaborador.email, colaborador.status, colaborador.classificacao];

            const { rows } = await this.pool.query(tQuery, params);
            return rows;
        }
        catch(error) {
            throw error;
        }
    }

}
export default ColaboradorRepository.getInstance();