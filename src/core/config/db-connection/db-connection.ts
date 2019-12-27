
import { Pool } from 'pg';

export abstract class DbConnection {

    private static pool: any;
    private static conString = "postgres://YourUserName:YourPassword@YourHost:5432/YourDatabase";

    public static getPool() {
        if(this.pool){
            return this.pool;
        }
        this.pool = new Pool({
            connectionString: this.conString
        });

        return this.pool;
    }
}