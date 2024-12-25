const imagens = ["gorro.gif", "rena.gif", "grinch.gif"];
const texto = ["Você vestindo o maior gorro do mundo! Cabeça de globo terrestre hahaha",
    "Você com skin de viada hahahaha com essa reninha aí, deu até vontade de comprar um trenó pra mim",
    "Você toda natalina, e eu peludo verde inimigo do Natal (estou caçando o dingo bel)"
]

let index = 0;
const display = document.querySelector (".carrosel > img");
const descricao = document.querySelector (".container > p");

function avanca() {
    index = (index + 1) % imagens.length;
    display.src = imagens[index];
    descricao.textContent = texto[index];
};

function volta() {
    index = (index - 1) % imagens.length;
    if (index < 0){
        index = imagens.length - 1;
    }
    display.src = imagens[index];
    descricao.textContent = texto[index];
};

const btnAvancar = document.querySelector (".avancar");
const btnVoltar = document.querySelector (".voltar");
btnAvancar.addEventListener("click", avanca);
btnVoltar.addEventListener("click", volta);