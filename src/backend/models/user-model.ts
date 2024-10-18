const { DataTypes, Model } = require('sequelize');
import Database from '../config/database';
class User extends Model {}

const conn = Database.getInstance().getConnection();

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    conn, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
  },
);

export default User;
// the defined model is the class itself
// console.log(User === conn.models.User); // true