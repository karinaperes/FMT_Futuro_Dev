let dados = {
    method: "GET"

};
fetch("./data.json", dados)
.then((resposta) => {
    return resposta.json();
})
.then((dados) => {
    let display = document.getElementById("conteudo-json");
    let jsonFormatado = JSON.stringify(dados, null, 2); // converte objeto JS em string JSON. 
    // dados é o objeto dos dados obtidos do arquivo JSON. O argumento, null, é um parâmetro opcional, 
    // especifica uma função de filtragem que pode ser usada para transformar o resultado. 
    // Argumento, 2, é o espaço de recuo usado na formatação da string JSON
    display.textContent = jsonFormatado;
    
})
.catch(() => {

})