// entrevista com 4 usuários para avaliação da série "Stranger Things”, 
// opções ruim, bom e excelente 
// verifique quantas pessoas classificaram a série como ruim
// usando While


let totalRuins = 0;
let contador = 1;
while (contador <= 4){
    let resposta = prompt("Qual a sua avaliação para a serie Stranger Things? (bom), (ruim) ou (")
    if(resposta == "ruim") {
        totalRuins++;
    }

    contador++;
}

console.log("Total de usuarios que avaliou a série como")