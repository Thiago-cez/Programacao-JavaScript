let users = []
let id = 1

const validaUser= require('../Validators/validaUser');

function cad(username, password){
           let newUser = {username,password} // parei aqui
           let validaErro= validaUser(newUser , users )

           if (validaErro.length>0){
            return validaErro
           }
           else{
            let newCad = {
                id,
                username,
                password
            }
            users.push(newCad);
            id++
            return {msg:"Cadastrado com Sucesso"}
           }    
}

function listar(){
 return(users)
}

function editar(id,username, password){
    let index = users.findIndex( u => u.id == id) 

    let objeto = users[index]

    objeto.username = username;
    objeto.password = password;

    return objeto;
}
function excluir(id){
    let index = users.findIndex( u => u.id == id)
    if(index !== -1){
        users.splice(index, 1)
       return "Usuario excluido com sucesso"
    }else {
        return "Uusuario nao encontrado"
    }
}










module.exports = {
    cad,
    listar,
    editar,
    excluir
}