async function exibirImagens() {
    const imagens = await fetch("https://api.thecatapi.com/v1/images/search?limit=10", {method: "GET"});
    const dados = await imagens.json();
    
    dados.forEach(responseApi => {
        document.write(`<img src="${responseApi.url}" width="200" /><br />`);
    });
} 

exibirImagens()



