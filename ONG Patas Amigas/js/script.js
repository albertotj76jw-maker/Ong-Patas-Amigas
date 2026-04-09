function doar() {
    alert("Obrigado por querer ajudar! 💚");
}

function adotar() {
    alert("Vamos encontrar um pet para você! 🐾");
}

function voluntario() {
    alert("Obrigado por se voluntariar! ❤️");
}

const form = document.getElementById("form");
const lista = document.getElementById("lista");

// MENU
document.getElementById("menu-btn").onclick = function() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// NAVEGAÇÃO
function irPara(secao) {
    document.getElementById(secao).scrollIntoView({
        behavior: "smooth"
    });
}

// ACESSIBILIDADE
let tamanho = 16;

function aumentarFonte() {
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
}

function diminuirFonte() {
    tamanho -= 2;
    document.body.style.fontSize = tamanho + "px";
}

function contraste() {
    document.body.classList.toggle("contraste");
}

