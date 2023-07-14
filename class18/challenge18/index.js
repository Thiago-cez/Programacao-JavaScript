let itensCadastrado = [];

function cadastroItem() {

    nomeItem =   document.getElementById("nome").value;
    precoItem = document.getElementById("preco").value;
    imgItem =  document.getElementById("image").value;

    let novoItem = { 
        nome: nomeItem,
        preco: precoItem,
        image: imgItem 
    }
    itensCadastrado.push(novoItem);
}

function listarItens() {

    for(i = 0; i < itensCadastrado.length; i++){
     document.getElementById("resultado").innerHTML = 
     `<ul>
        <li>{arreyItem.nome}</li>
        <li>{arreyItem.preco}</li>
        <li>{arreyItem.imgItem}</li>
     </ul>`
     }
}


