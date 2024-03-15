let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qntTotalCarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas);
    let qntdTotalCerveja = cervejapp(duracao) * adultos;
    let qntTotalBebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qntTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntdTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalBebidas/2000)} Garrafas de Refrigerante ou água</p>`
}

function carnepp(duracao) {
    if (duracao >= 6) {
        return 650
    }
    else {
        return 400
    }
}

function cervejapp(duracao) {
    if (duracao >= 6) {
        return 2000
    }
    else {
        return 1200
    }
}

function bebidaspp(duracao) {
    if (duracao >= 6) {
        return 1500
    }
    else {
        return 1000
    }
}