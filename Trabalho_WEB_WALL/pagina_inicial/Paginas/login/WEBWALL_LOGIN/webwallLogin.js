document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Isso é feito porque, em vez de enviar o formulário diretamente (como o navegador faria por padrão),
    // nós queremos capturar os dados e enviar via código JavaScript com mais controle.

    const dados = {
        nome: document.querySelector(".loginYn").value, // query selector é a mesma coisa que o documentGetElementById, mas pra class kkkk
        numero: document.querySelector(".loginNumber").value,
        cpf: document.querySelector(".loginCPF").value,
        email: document.querySelector(".loginEmail").value,
        senha: document.querySelector(".loginPassword").value,   //ETAPA 1
    };

    try { 
        //O await faz o código esperar pela resposta do servidor, e, quando a resposta chega, a execução continua.
        const response = await fetch("http://127.0.0.1:3000/api/cadastro", { //fetch ta logando o link da data base             ETAPA 2
            method: "POST", //o post é para enviar algo, GET(para receber), PUT(atualizar), DELETE(deletar).
            headers: { //informações necessárias para a conexão com a API(Caso não informe, é possível que a API não permita a conexão)
                "Content-Type": "application/json", //o content type serve pra informar o tipo de dado(atraves do post) que vai ser enviado
            },
            body: JSON.stringify(dados), //os dados que coletamos atraves do formulario acima "queryselector"                           
            //poderia adcionar um credentials que faria a coleta de dados atraves de cookies
            // mode: "cors",  // Permite requisições entre diferentes origens
        });



        if (!response.ok) {
            throw new Error("Erro ao cadastrar"); //se deu errado           //ETAPA 3
        }


        const resultado = await response.json();//pega as infos passada pelo response e transforma em json      ETAPA 4 para a 5
        alert(resultado.message); // Exibe uma mensagem de sucesso

    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao cadastrar. Tente novamente.");
    }
});

// 1. aqui é feita a coleta de dados atraves dos "query";

// 2. criamos uma api onde enviaremos atraves do post informações que foram coletados do "query" e no body viram json();

// 3. verifica se da erro na api mostrando a mensagem (que esta dentro do if) erro ao cadastrar ;

// 4. caso de certo, o "await" vai fazer com que esperamos essa reposta (da api) e transformamos ela em json, logo dando um alerta que funcionou;

// 5. o response é atribuido a const resultado, que irá ser executada no arquivo "executar.js".

