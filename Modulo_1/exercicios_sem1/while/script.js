// entrevista com 4 usuários para avaliação da série "Stranger Things”, 
// opções ruim, bom e excelente 
// verifique quantas pessoas classificaram a série como ruim
// usando While


let contadorRuim = 0; // variável contadorRuim criada com valor 0, pois não houve nenhuma resposta ainda
let pessoa = 1;     // variável pessoa criada com valor 1, indicando a primeira pessoa entrevistada
while (pessoa <= 4){ // pois deverá contar até 4
    let resposta = prompt("Qual a sua avaliação para a serie Stranger Things? bom, ruim ou exelente?"); // variavel resposta é criada como prompt para receber a resposta
    if(resposta && resposta.toLowerCase() === "ruim") { // se a resposta da pesquisa é válida E convertida em minusculas, for exatamente igual a ruim
        contadorRuim++; // será incrementado o contadorRuim
    }

    pessoa++; // e incrementado a variavel pessoa, até chegar na condição do while, que no caso são 4 pessoas
}

document.getElementById("resposta").innerText = `Total de usuários que avaliaram a série como ruim: ${contadorRuim}`; 
// pega o elemento de id "resposta", no documento html, e define o texto que será inserido dentro do elemento e exibido na pagina html