function parOuimpar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é par.";
    } else {
        return "O número " + numero + " é ímpar.";
    }
}

console.log(parOuimpar(7));
console.log(parOuimpar(10));