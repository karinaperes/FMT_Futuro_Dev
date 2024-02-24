const prompt = require("prompt-sync")()
const numeros = []

for (let n = 0; n < 5; n++) {
    let numero = prompt(`Digite o ${n + 1}º número: `);
    if (numero === "") {
        console.log("Digite um número válido!");
        n--;
    } else {
        numeros.push(numero);
    }
}

for (n = 0; n < 5; n++){    
    console.log(`O ${n+1}º número é: ${numeros[n]}`)
}

console.log(`A lista de números é ${numeros}`)

// Soma numeros do array
const soma = numeros.reduce((total, num) => total + parseInt(num), 0) // parseInt para converter em número, se não os números da lista serão concatenados


console.log("A soma dos números da lista é: " + soma)


// Números em ordem crescente
const numerosOrdenados = numeros.sort((a, b) => a - b) // Se o resultado de a - b for negativo, a deve vir antes de b na ordenação (ou seja, a é menor que b)

console.log('Números ordenados em ordem crescente: ' + numerosOrdenados)


// Números pares
const numPares = numeros.filter(num => {
    if(num % 2 == 0){
        return true
    }
})

console.log("Os números pares da lista números são: " + numPares);

// Quadrado de cada número da lista
const quadrados = numeros.map(n => n ** 2);

console.log("O quadrado de cada número da lista números é: " + quadrados)