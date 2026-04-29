let mode = 1
// 1 = login
// 2 = cadastro
cancel = 0;

document.getElementById("toggle").onclick = () => {
    if (mode == 2){
        mode = 1;
    } else if (mode == 1){
        mode = 2;
    }
    if (mode == 2){
    
    }
    if (mode == 1){
    
    }
    console.log(mode);
    cancel = 0;
} 

document.getElementById("loginplaceholder").addEventListener("submit", function(e){

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (!email.includes("@")){
        alert("E-mail Inválido")
        cancel = 1;
    }

    if (senha.length < 8){
        alert("Senha muito curta!")
        cancel = 1;
    }
    
})