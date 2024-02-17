import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pedropedro01",
    database: "gerenciadorfinanceiro"
})