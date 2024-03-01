import { Sequelize } from "sequelize";
const sequelize = new Sequelize('empresa', 'santiago', '1234', {
    host: 'localhost',
    dialect: 'mysql',
});



export default sequelize;