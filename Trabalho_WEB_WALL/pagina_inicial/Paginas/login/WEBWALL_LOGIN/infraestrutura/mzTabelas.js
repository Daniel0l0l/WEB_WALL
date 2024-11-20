class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaCadastro();
    }

    criarTabelaCadastro() {
        const sql = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(100) NOT NULL,
            numero VARCHAR(20) NOT NULL,
            cpf VARCHAR(14) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            senha VARCHAR(100) NOT NULL,
            data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro ao criar a tabela 'usuarios':", error.message);
                return;
            }
            console.log("Tabela 'usuarios' criada com sucesso");
        });
    }
}

module.exports = new Tabelas();



