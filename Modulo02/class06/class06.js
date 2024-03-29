const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

let historico = [];
const numerosInseridos = [];

app.post('/calc', (req, res) => {

    let n1 = req.body.n1;
    let n2 = req.body.n2;
    let r = 0;

    if(req.body.op == "soma" ) {
        r = n1+n2
        historico.push (r)
        res.json(r)

    }

    if(req.body.op == "sub" ) {
        r = n1-n2
        historico.push (r)
        res.json(r)
        
    }

    if(req.body.op == "div" ) {
        r = n1/n2
        historico.push (r)
        res.json(r)
        
    }

    if(req.body.op == "mult" ) {
        
        r = n1*n2
        historico.push (r)
        res.json(r)
        
    } else {
        res.status(400).send({error: "Erro",})
    }


   }

)

app.get('/calculos', (req,res)=>{
    res.json(historico)
})

app.get('/limpar', (req,res)=>{
    historico = [];
    res.send("Historico limpo");
})

app.get('/media', (req, res) => {
    
    let somaValores = 0;

    for(let i = 0; i < historico.length; i++){
       somaValores = somaValores +  historico[i];
    }

    let media =  somaValores / historico.length;

    res.json(media);
})

app.get('/numerosPares', (req,res) => {
    let pares = historico.filter(numero => numero%2 == 0)
    res.json(pares)
    
})

app.get('/numerosImpares', (req,res) => {
    let impares = historico.filter(numero => numero%2 != 0)
    res.json(impares)
    
})

app.get('/maiorNumero', (req,res) => {
    
    if (historico.length == 0){
         res.status(400).send( { error: "Não possui nenhum número no historico",});

    }else {
        let maior = historico[0];

        for(let i=1; i < historico.length; i++ ){
                if (historico[i] > maior){
                    maior = historico[i] 
                }
            
        }
        res.json(maior);
     }
    
})

app.get('/menorNumero', (req,res) => {
    if(historico.length == 0){
        res.status(400).send({error: "Não A historico aqui",})
    }else {
        let menor = historico[0];

        for( i = 1; i < historico.length; i++){
         if( historico[i] < menor) {
          menor = historico[i];
         }
        }
        res.json(menor)
    }
   
})

app.get('/buscarPosicao', (req, res) => {
    
})







app.listen(port, () => {
    console.log("Servidor rodando")
})
