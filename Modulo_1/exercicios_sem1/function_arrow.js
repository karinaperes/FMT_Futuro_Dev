const media = (numeros) => {
    let soma = 0 // soma inicia em zero para somar cada numero representado em numeros[i]
    for(i = 0; i < numeros.length; i++) { // inicia em i igual a zero, enquanto i for menor que quantidade de itens em numeros, i + i
        let numero = numeros[i]; // variavel numero é igual a cada item da listadeNumeros
        soma = soma + numero; // variavel soma altera seu valor para o resultado de soma mais numero
    }
    return soma / numeros.length;
}
const listadeNumeros = [5, 10, 63, 14];
console.log("A média é: " + media(listadeNumeros));