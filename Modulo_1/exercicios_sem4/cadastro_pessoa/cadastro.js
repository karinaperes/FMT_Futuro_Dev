class Pessoa {
    constructor(nome, idade, profissao) {
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    }
}

class Cliente extends Pessoa {
    constructor (nome, idade, profissao, telefone, email, clienteDesde) {
        super (nome, idade, profissao)
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde
    }
}

let cliente = new Cliente ("João", 44, "empresário", "(48)98765-4321", "joao@gmail.com", "2024-03-01")

console.log(cliente)