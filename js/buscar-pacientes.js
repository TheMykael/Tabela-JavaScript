let botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {
        let erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("esconder-elemento");
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("esconder-elemento");
        }
    });
    xhr.send();
});