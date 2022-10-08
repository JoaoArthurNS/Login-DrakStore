function entrar(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;


    if(usuario == "Joao" && senha == "1234"){
        location.href = "telaprincipal.html";
    }else{
        alert("Usuario ou senha incorretos");
    }
}