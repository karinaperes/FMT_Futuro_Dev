const numeros = [10,2,5,3,15];

// numeros.map((numeroAtual) => { // numero atual, valor, depois é o indice, posição no array e lista original (não precisa)
//     console.log("O npumero atual é ", numeroAtual)
// }) 

// const copia = numeros.map((numeroAtual) => { // cria copia para ser alterado
//     return numeroAtual * 2
// }) 

// console.log(copia)
// numeros.sort((a, b) => a - b) // altera o array original
// const copia = numeros.filter(numeroAtual => { // deve ser feito dentro de uma variavel para ser copiado
//     if(numeroAtual >= 5) {
//         return true
//     }
//  }) 

// console.log(copia)

// const nomes = ["Bruno", "Priscilla", "Lucas", "Thiago", "Julia", "Rob"]
// nomes.sort() // coloca em ordem alfabética
// const soNomesFiltrados = nomes.filter(nomeAtual => {
//     if(nomeAtual.toLowerCase().includes("b")) {
//         return true
//     }
// })

// console.log(nomes)
// console.log(soNomesFiltrados)

const nomes = ["Bruno", "Priscilla", "Lucas", "Thiago", "Julia", "Rob"]
nomes.sort() // coloca em ordem alfabética
const soNomesFiltrados = nomes.filter(nomeAtual => {
    if(nomeAtual.toLowerCase().charAt(0).includes("b")) { // nomes que começam com a letra b , charAt(0) indica que é o primeiro caracter
        return true
    }
})

console.log(nomes)
console.log(soNomesFiltrados)