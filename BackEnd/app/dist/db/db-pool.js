"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
exports.pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    database: "Non",
    user: "root",
    password: "1234",
    connectionLimit: 10
});
