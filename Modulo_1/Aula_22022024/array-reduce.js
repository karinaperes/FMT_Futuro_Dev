const numeros = [10,2,5,3,15]

const resultado = numeros.reduce((soma, numeroAtual) => { // variavel soma só existe dentro do loop do reduce, é a acumuladora
   return soma = soma + numeroAtual;
}, 0) // o zero é para iniciar nesse valor para aparecer no debug

console.log(resultado)