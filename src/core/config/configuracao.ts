import express from 'express';
import  helmet from 'helmet'; 
import "reflect-metadata"; 
import { useExpressServer } from "routing-controllers";
import cors from 'cors';

import parser from './libs/middlewares';
import { ColaboradorController } from '../../controllers/colaborador';



class Configuracao {
    
    public app: express.Application;

    
    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        this.app.use(parser);
        this.app.use(helmet());
        this.app.use(cors());
        this.app.disable('X-Powered-By');

        useExpressServer(this.app, {
            cors: true,
            routePrefix: "/api/conexao-postgres",
            controllers: [
                ColaboradorController    
            ]
        });  
    }
}
export default new Configuracao().app;