let mode = 1
// 1 = login
// 2 = cadastro
let cancel = 0;
let time = 120;
if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", "1234");
}
document.getElementById("toggle").onclick = () => {
    if (mode == 2) {
        mode = 1;
    } else if (mode == 1) {
        mode = 2;
    }
    if (mode == 2) {
        document.getElementById("LoginText").innerHTML = "Cadastro";
        document.getElementById("ButtonLogin").innerHTML = "Cadastrar-se";
    }
    if (mode == 1) {
        document.getElementById("LoginText").innerHTML = "Login";
        document.getElementById("ButtonLogin").innerHTML = "Entrar";
    }
    console.log(mode);
    cancel = 0;
}
document.getElementById("form-login").addEventListener("submit", function (e) {

    e.preventDefault();
    cancel = 0;
    let nome = document.getElementById("userName").value;
    let senha = document.getElementById("userPass").value;

    if (nome.length < 1) {
        alert("digite o nome")
        cancel = 1
    }

    if (senha.length < 8) {
        alert("Senha muito curta!")
        cancel = 1;
    }
    if (mode == 2) {
        if (cancel == 0) {
            localStorage.setItem(nome, senha);
            mensagem.innerHTML = "<div> <p> Cadastro com sucesso </p> </div>"
            cancel = 1;
        }
    }
    else {
        let checker = localStorage.getItem(nome);
        if (checker === senha) {
            mensagem.innerHTML = "<div> <p> Login com sucesso </p> </div>"
            let id000 = setInterval(function () {
                if (time >= 1) {
                    time -= 1;
                }
                else {
                    window.location.href = "forum.html";
                    clearInterval(id000)
                    time = 120;
                }
            }, 10);
        }
        else {
            mensagem.innerHTML = "<div> <p> Dados incorretos </p> </div>"
        }
    }
});