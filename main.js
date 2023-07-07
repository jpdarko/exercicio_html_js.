document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("meuFormulario");
    form.addEventListener("submit", function(event) {
      var campoA = document.getElementById("campoA").value;
      var campoB = document.getElementById("campoB").value;

      if (campoB > campoA) {
        alert("Formulário válido! Número B é maior que o número A.");
        return true;
      } else {
        alert("Erro: Número B deve ser maior que o número A.");
        return false;
      
      }
    });
  });