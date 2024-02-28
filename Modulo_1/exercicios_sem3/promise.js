const prompt = require("prompt-sync")()
let numero = prompt("Digite um número: ")

const checkPair = new Promise ((resolve, reject) => {
    if(numero % 2 == 0){
        resolve ("O número validado é par")        
    } else {
        reject ("Error: número informado é ímpar")
    }    
})

checkPair
    .then ((mensagem) => {
        console.log(mensagem)
    })
    .catch ((mensagem) => {
        console.log(mensagem)
    })