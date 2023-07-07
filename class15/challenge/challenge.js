//Faça um prog. que leia 3 notas de N alunos

let alunosCalculados = 0;

do{
    let nota1 = prompt("Digite a Primeira Nota: ");
    let nota2 = prompt("Digite a segunda Nota: ");
    let nota3 = prompt("Digite a terceira Nota: ");
   
    alunosCalculados = alunosCalculados + 1;
    
    var pergunta = prompt("Gostaria de Avaliar novo Aluno?: Sim | Nao ");
    console.log(alunosCalculados + " Alunos Foram Calculados!");
}
while(pergunta=="sim")


