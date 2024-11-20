const express = require("express");
const cors = require("cors"); //ele permite outras linguagens no codigo
const app = express();
const port = 3000;

const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/mzTabelas");

app.use(cors()); // Permite requisições de outras origens
app.use(express.json()); // Middleware para interpretar JSON

tabelas.init(conexao);

app.post("/api/cadastro", (req, res) => {
    const { nome, numero, cpf, email, senha } = req.body;
    
    const sql = "INSERT INTO usuarios (nome, numero, cpf, email, senha) VALUES (?, ?, ?, ?, ?)";
    conexao.query(sql, [nome, numero, cpf, email, senha], (error, results) => {
        if (error) {
            console.error("Erro ao inserir dados:", error);
            res.status(500).json({ message: "Erro ao cadastrar" });
            return;
        }
        res.status(201).json({ message: "Cadastro realizado com sucesso" });
    });
});

app.listen(port, (error) => {
    if (error) {
        console.log("Erro ao iniciar o servidor");
        return;
    }
    console.log(`Servidor rodando na porta ${port}`);
});
