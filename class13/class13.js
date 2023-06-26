/* let sair= "nao"
let c = 0
while (sair=="nao"){
​
    console.log("Estou no loop mais uma vez")
    c++
    sair = prompt("Deseja Sair? sim | nao")
}
​
console.log("O loop foi realizador por "+ c + " vezes")
​
*/

//-------------------------------------------------------------
/** 
 * Faça um programa que leia uma quantidade n de números,  some a quantidade de números pares e ímpares digitados e 
 * exiba no final o resultado 
 */

let sair = "nao";
let c = 0 ;
let par = 0;
let impar = 0;

while (sair == "nao") {
    let num = prompt("digite um numero inteiro")
    if(num%2 == 0){
        console.log("par")
        par += 1;
    }
    else {
        console.log("impar") 
            impar += 1;
    }
    c++
    sair = prompt("deseja sair? sim | nao ")
}
    console.log("o loop foi realizado por " + c + " vezes")
    console.log("o numero par foi impresso " + par + " vezes")
    console.log("o numero impar foi impresso " + impar + "vezes")


   