// PROJETO 1
/*
Imagine que você abriu uma loja:
1) Crie o nome de 8 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)  * 
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/
const produtos = ["Camiseta", "Calça", "Tênis", "Bermuda", "Boné", "Oculos", "Vestido", "Moletom"]
const valorProdutos = [25 ,      80,     150,       60,      25,      40,      100,       120    ]

function mostrarEstoque() {
    console.log(" ## ESTOQUE ## ")
    let indice = 0
    while(indice < produtos.length){
        console.log(produtos[indice] + " - R$" + valorProdutos[indice])
        indice++
    }
    console.log("-----------------------------")
}
//mostrarEstoque()

//receber os itens
function adicionarProduto(novoproduto, novopreco){
    produtos.push(novoproduto)
    valorProdutos.push(novopreco)
    console.log("Novo produto: " + novoproduto)
    console.log("-----------------------------")
}

//adicionarProduto("Meia", 10)

//mostrarEstoque()

function removerProduto(indiceremovido){
    produtos.splice(indiceremovido, 1)
    valorProdutos.splice(indiceremovido, 1)
    console.log("Produto removido: " + produtos[indiceremovido])
    console.log("-----------------------------")
}


mostrarEstoque()

adicionarProduto("Meia", 10)

mostrarEstoque()

removerProduto(0)

mostrarEstoque()