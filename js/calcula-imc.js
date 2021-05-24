let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for (let indice = 0; indice < pacientes.length; indice++) {
    let paciente = pacientes[indice];

    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;
    let imprimeImc = paciente.querySelector(".info-imc");

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        imprimeImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaValida) {
        alturaValida = false;
        imprimeImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if (pesoValido && alturaValida) {
        let imc = calculaImc(peso, altura);
        imprimeImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    let imc = Number(peso / (altura * altura));
    return imc.toFixed(2);
}