let mode = 1
// 1 = login
// 2 = cadastro
let cancel = 0;

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
    cancel = 0;
    let nome = document.getElementById("userName").value;
    let senha = document.getElementById("userPass").value;
    console.log(nome);
    console.log(senha);

    if (nome.length < 1)
    {
        alert("digite o nome")
        cancel = 1
    }

    if (senha.length < 8){
        alert("Senha muito curta!")
        cancel = 1;
    }

if (mode == 2){
        if (cancel == 0){
        localStorage.setItem(nome,senha);
        alert("cadastrado com sucesso");
        cancel = 1
        }
    }
    else{
        let checker = localStorage.getItem(nome);
        if (checker === senha) {
            mensagem.innerHTML = "<div> <p> Login com sucesso </p> </div>"
            window.location.href = 'forum.html';
        }
        else{
             mensagem.innerHTML = "<div> <p> Dados incorretos </p> </div>"
        }
    }



})