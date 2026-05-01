let time = 120; // se pedirem para "Otimizar o código" nós diminuimos esse número (>ᴗ•)
document.getElementById("togglePresentation").onclick = () => {
time = 120;
let id001 = setInterval(function() {
            if (time >= 1)
            {
            time -= 1;
            } 
            else
            {
            window.location.href = "KirbyApresentacao.html";
            time = 120;
            clearInterval(id001);
            } }, 10);
}
document.getElementById("toggleHistory").onclick = () => {
timer = 120;
let id002 = setInterval(function() {
            if (time >= 1)
            {
            time -= 1;
            } 
            else
            {
            window.location.href = "KirbyHistoria.html";
            time = 120;
            clearInterval(id002);
            } }, 10);
}
document.getElementById("toggleCuriosity").onclick = () => {
time = 120;
let id003 = setInterval(function() {
            if (time >= 1)
            {
            time -= 1;
            } 
            else
            {
            window.location.href = "KirbyCuriosidades.html";
            time = 120;
            clearInterval(id003);
            } }, 10);
}
