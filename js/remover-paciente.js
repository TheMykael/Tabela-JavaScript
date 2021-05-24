let pacientesTr = document.querySelectorAll(".paciente");
let tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fade-out");
    //Espera 500 milissegundos para remover o elemento
    setTimeout(function() {
        event.target.parentNode.remove();
    },500);
});