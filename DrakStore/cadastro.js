bancoUsuario = []

function cadastro(){
    var nome = document.getElementById("nome").value; 
    var usuario = document.getElementById("usuario").value; 
    var email = document.getElementById("email").value; 
    var senha = document.getElementById("senha").value; 
    var novocadastro = {
        nome: nome,
        usuario: usuario,
        email: email,
        senha: senha
    };

    bancoUsuario.push(novocadastro);
    alert("Cadastro realizado com sucesso")
    nome = " ";
    usuario = " ";
    email = " ";
    senha = " ";
}

 console.log(bancoUsuario);