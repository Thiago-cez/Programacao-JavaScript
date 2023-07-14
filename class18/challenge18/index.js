let itensCadastrados = [];

function cadastroItem() {
    let nomeItem = document.getElementById("nome").value;
    let precoItem = document.getElementById("preco").value;
    let imgItem = document.getElementById("image").value;

    let novoItem = { 
        nome: nomeItem,
        preco: precoItem,
        image: imgItem 
    };

    itensCadastrados.push(novoItem);
}

function listarItens() {
    let resultado = document.getElementById("resultado");

    for(let i = 0; i < itensCadastrados.length; i++){
        resultado.innerHTML += "Nome: " + itensCadastrados[i].nome + "<br>";
        resultado.innerHTML += "Preço: " + itensCadastrados[i].preco + "<br>";
        resultado.innerHTML += "Imagem: " + itensCadastrados[i].image + "<br>";
        resultado.innerHTML += "<br>";
    }
}

