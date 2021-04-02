import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

var DatabaseConnectionConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

var con = mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error) {
  if (error) {
    console.log("Node DB Connection Failed!");
  } else {
    console.log("Node DB Connection Success!");
  }
});

module.exports = con;
