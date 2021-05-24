let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    let pacientes = document.querySelectorAll(".paciente");
    //Verifica se tem algo digitado no input
    if (this.value.length > 0) {
        for (let indice = 0; indice < pacientes.length; indice++) {
            let paciente = pacientes[indice];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i");
            
            if (!expressao.test(nome)) {
                paciente.classList.add("esconder-elemento");
            } else {
                paciente.classList.remove("esconder-elemento");
            }
        }
    } else {
        for (let indice = 0; indice < pacientes.length; indice++) {
            let paciente = pacientes[indice];
            paciente.classList.remove("esconder-elemento");
        }
    }
});