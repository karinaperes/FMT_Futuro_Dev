function adicao (num1, num2, funcaoAnonima){ // funcaoAnonima é a variavel
    let soma = num1 + num2;

    funcaoAnonima();
}

adicao(2, 2, (sum)=>{
    console.log("O resultado final é: " + sum);
})

