require("dotenv").config();

const { STRING } = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize({
      host: "127.0.0.1",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

module.exports = sequelize;
