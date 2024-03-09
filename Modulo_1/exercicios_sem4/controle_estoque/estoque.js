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

const mesa = new Produto("Mesa", 500, 12)
const tv = new Produto("TV", 1500, 10)
const sofa = new Produto("Sofá", 600, 6)

console.log(mesa)
console.log(tv)
console.log(sofa)

mesa.Vender(5)
tv.Vender(2)
sofa.Vender(7)

mesa.Repor(3)
tv.Repor(4)
sofa.Repor(1)

mesa.MostrarEstoque()

mesa.AtualizarPreco(430)










