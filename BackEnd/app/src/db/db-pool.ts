import mysql = require("mysql");

export const pool = mysql.createPool({
    host:"localhost",
    port:3306,
    database:"Non",
    user:"root",
    password:"1234",
    connectionLimit: 10
});