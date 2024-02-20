// Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.
// Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas

const prompt = require("prompt-sync")();
const frutas = [];

for (i = 0; i < 3; i++) {
    let fruta = prompt(`Digite a ${i + 1}ª fruta: `);
    if (frutas.includes(fruta)){ // includes verifica se a fruta digitada já está na lista
        console.log (`A fruta ${fruta} já foi digitada.`);
        i--; // volta a iteração para nova inserção        
    } 
    else {
        frutas.push(fruta); // push adiciona um novo elemento no final da lista
    }
    
}

console.log(`A segunda fruta inserida na lista é: ${frutas[1]}`);

frutas.push( prompt(`Digite mais uma fruta:`));
 
frutas.shift([0]); // exclui o elemento indicado da lista

console.log("A lista atualizada é: ", frutas);


