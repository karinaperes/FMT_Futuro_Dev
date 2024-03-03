let cep;
let endExiste = localStorage.getItem("endereco");

if(endExiste == null){
    consultaCep();
} 
else {
    let substituir;

    do {
    substituir = prompt("Endereço já existe, deseja substituir? (S/N)");
    if(substituir.toLowerCase() == "s") {
        consultaCep();
        break;
    } else if (substituir.toLowerCase() == "n") {
        document.write("Ok, os dados  anteriores serão mantidos.");
        break;
    } else {
        alert("Opção inválida, por favor digite S ou N");               
    }       
    } while (true);
}

function consultaCep(){
    cep = prompt("Digite o CEP: ");
    fetch(`https://viacep.com.br/ws/${cep}/json`, {method: "GET"})

    .then((responseFech) => {
        return responseFech.json();
    })

    .then((dataCep) => {
        alert(`${dataCep.logradouro}, ${dataCep.complemento} - ${dataCep.bairro} - ${dataCep.localidade}/${dataCep.uf}`);    
    
        let confirmacao;
        do {
            confirmacao = prompt("Os dados estão corretos? S/N");
            if (confirmacao.toLowerCase() == "s") {
                localStorage.setItem("endereco", JSON.stringify(dataCep));
                document.write(`As informações foram salvas com sucesso!`);
                break;
            } else if (confirmacao.toLowerCase() == "n") {
                consultaCep();
                break;
            } else {
                alert("Opção inválida, por favor digite S ou N");
            }
        } while (true);
    })
    .catch((erro) => {
        console.log("Erro ao buscar endereço: ", erro);
    })        
}
    



 






