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


document.getElementById("form-login").addEventListener("submit", function(e){

    e.preventDefault();

    let nome = document.getElementById("userName").value;
    let senha = document.getElementById("userPass").value;
    console.log(nome);
    console.log(senha);

    if (nome == "")
    {

    }

    if (senha.length < 8){
        alert("Senha muito curta!")
        cancel = 1;
    }




})