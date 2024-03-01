// const prompt = require("prompt-sync")();

function cadastroUsuario() {
    const nome = prompt("Digite seu nome: ");
    const idade = prompt("Digite sua idade: ");
    const email = prompt("Digite o seu e-mail: ");

    const userInfo = {
        nome: nome,
        idade: idade,
        email: email
    };

    const usuarioJson = JSON.stringify(userInfo);

    localStorage.setItem("user", usuarioJson) // inclui os dados do usuario no local storage o objeto de chave user

    console.log("Cadastro salvo")
}

cadastroUsuario();