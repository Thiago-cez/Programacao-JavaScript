/*
Exercício:

//classificacção das t-shirt
#Preços
precoP = 5
precoM = 5.5
precoG = 6
Faça um programa que leia o numero de t-shirts P, M e G de um número N de compras, enquanto o usuário desejar continuar registrando as compras.
O programa deve calcular o valor total de camisetas P, M e G comprados, a quantidade de cada uma e a média total todos.
//QTD de P: 10
//QTD de M: 5
//QTD de G: 15
exemplo de compras
 P  M  G
 10,5,15    //sim
 1, 1, 1    //sim
 2, 2, 2    //sim
 1, 0, 0     //sim
             //nao
               Valor Total
 Qtd P: 14  =  70 euros
 Qtd M: 8   =  44 euros
 Qtd G: 18  =  108 euros
Media: 74 euros
*/;

function CalcularCompra() {
  const sizeP_ = document.getElementById("sizeP");
  const sizeM_ = document.getElementById("sizeM");
  const sizeG_ = document.getElementById("sizeG");

  let somaP = 0;
  let somaM = 0;
  let somaG = 0;

  let comprar = "sim";

  while(comprar == "sim") {
    if(!sizeP_.value || !sizeM_.value || !sizeG_.value){
        if((!sizeP_.value) && (!sizeM_.value) && (!sizeG_.value)){
          sizeP_.style.border = "2px solid red";
          sizeM_.style.border = "2px solid red";
          sizeG_.style.border = "2px solid red";
        }
        else if((!sizeP_.value) && (!sizeM_.value)) {
          sizeP_.style.border = "2px solid red";
          sizeM_.style.border = "2px solid red";      
        }
        else if((!sizeP_.value) && (!sizeG_.value)) {
          sizeP_.style.border = "2px solid red";
          sizeG_.style.border = " 2px solid red"
        } 
        else {
          sizeM_.style.border = " 2px solid red";
          sizeG_.style.border = " 2px solid red";
        }
    }
    else { 
      somaP = somaP + parseFloat(sizeP_.value);
      somaM = somaM + parseFloat(sizeM_.value);
      somaG = somaG + parseFloat(sizeG_.value);

      console.log("camisas P = "+ somaP);
      console.log("camisas M = "+ somaM  );
      console.log("camisa G = "+ somaG);

      //document.getElementById("saida").innerHTML = `You Bought:${sizeP_} P t-shorts | ${sizeM_} M t-shorts | ${sizeG_} G t-shorts `;
    }
    comprar = prompt("Gostaria de Realizar uma nova Compra? sim | nao ");
  }
  ///


}