// (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar pedido
// Selecione o produto
// Quantidade
// opção 6 imprime produto com maior quantidade


const produtos = ["Hortifruti", "Laticínios", "Carnes", "Peixes", "Aves"]; // lista de produtos

const quantidades = {};

// Exibe a lista numerada de produtos
function exibirListaProdutos() {
    let lista = "Selecione o produto desejado:\n";
    for (i = 0; i < produtos.length; i++) {
        lista = lista + `(${i + 1}) ${produtos[i]}\n`; // (${i + 1}) cria uma string que inclui do índice mais 1, pois começa em 0
    }
    lista = lista + "(6) Fechar pedido";
    return lista;
}

function catalogarCompra() {
    const listaPedido = document.getElementById("pedido");
    let itemMaisPedido = "";

    while (true) {
        const escolha = parseInt(prompt(exibirListaProdutos()));
        if (escolha >= 1 && escolha <= produtos.length + 1) {
            if (escolha === 6) {
                document.getElementById("textoMaisPedido").style.display = "block";
                
                break;
            }
            const produtoEscolhido = produtos[escolha -1];
            const quantidade = parseInt(prompt(`Quantos itens de ${produtoEscolhido} você deseja comprar?`));

            const itemLista = document.createElement("li");
            itemLista.textContent = `${quantidade} x ${produtoEscolhido}`;
            listaPedido.appendChild(itemLista);

            if (!quantidades[produtoEscolhido]) { // atualiza o registro de quantidades
                quantidades[produtoEscolhido] = 0;
            }
            quantidades[produtoEscolhido] += quantidade;

            // verifica se é o item mais pedido até agora
            let valorMaximo = 0
            for (let pedido in quantidades) {
                if (quantidades[pedido] >= valorMaximo) {
                    itemMaisPedido = pedido
                    valorMaximo = quantidades[pedido]
                }
            }
            
        } else {
            alert("Opção inválida");
        }
    }

    document.getElementById("maisPedido").textContent = itemMaisPedido;
}

catalogarCompra();