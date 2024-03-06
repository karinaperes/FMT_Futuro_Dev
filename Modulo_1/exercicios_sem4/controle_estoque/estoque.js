class Produto {
    constructor (nome, preco, quantidade) {
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
    }
    Vender(quantidadeVendida) {
        if (quantidadeVendida <= this.quantidade) {
            this.quantidade = this.quantidade - quantidadeVendida
            console.log(`Venda realizada com sucesso, saldo restante do produto ${this.nome} é ${this.quantidade}`)
        }
        else {
            console.log("Estoque insuficiente")
        }
    }
    Repor(quantidadeRepor){
        this.quantidade = this.quantidade + quantidadeRepor
        console.log(`Entrada realizada com sucesso, saldo atualizado do produto ${this.nome} é ${this.quantidade}`)
    }
    MostrarEstoque(){        
        console.log(`Estoque atual do produto ${this.nome} é ${this.quantidade}.`)
    }
    AtualizarPreco(atualizaPreco) {
        this.preco = atualizaPreco
        console.log(`O preço do produto ${this.nome} foi atualizado para ${this.preco}`)
    }
}

let produto = new Produto()
let produto1 = new Produto("TV", 1500, 10)
let produto2 = new Produto("Sofá", 600, 6)

produto.nome = "Mesa";
produto.preco = 500
produto.quantidade = 12

console.log(produto)
console.log(produto1)
console.log(produto2)

produto.Vender(5)
produto1.Vender(2)
produto2.Vender(7)

produto.Repor(3)
produto1.Repor(4)
produto2.Repor(1)

produto.MostrarEstoque()

produto.AtualizarPreco(430)










