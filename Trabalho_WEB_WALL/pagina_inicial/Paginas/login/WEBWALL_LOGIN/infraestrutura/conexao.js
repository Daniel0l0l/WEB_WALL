const mysql = require("mysql");

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "cadastro" // Nome do banco de dados no MySQL
});

conexao.connect((error) => {
    if (error) {
        console.error("Erro ao conectar com o banco de dados:", error.message);
    } else {
        console.log("Conectado ao banco de dados com sucesso!");
    }
});

module.exports = conexao;
