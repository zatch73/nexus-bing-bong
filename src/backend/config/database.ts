import { Sequelize } from 'sequelize';

class Database {
    private static instance: Database | null = null;
    private sequelize: Sequelize;

    private constructor() {
        this.sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: 'data/database.sqlite'
        });
    }

    public static getInstance(): Database {
        if (Database.instance === null) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public getConnection(): Sequelize {
        return this.sequelize;
    }
}

export default Database;
