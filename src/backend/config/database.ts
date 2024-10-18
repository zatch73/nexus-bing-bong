import { Sequelize, DataTypes } from 'sequelize';


const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

(async function (){ 
    await sequelize.sync();
})();

module.exports = User;

class Database {
    private static instance: Database | null = null;


    constructor(){
        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: 'data/database.sqlite'
        });
    }

    static getInstance() : Database {
        if(Database.instance == null){
            Database.instance = new Database();
        }
        return Database.instance;
    }

}