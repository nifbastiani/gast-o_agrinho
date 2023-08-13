
var calcular        = document.getElementById("calcular");
var resultado       = document.querySelector("output");
var inputs          = document.querySelectorAll("input");

function calculatePercentage() {
  var fullValue    = parseFloat(document.getElementById("valor1").value);
  var partialValue = parseFloat(document.getElementById("valor2").value);
  var totalPercentage = 100;  
  var partialPercentage =  (totalPercentage * partialValue) / fullValue;
  result.classList.remove("hide");
  result.style.display = "block";
  setTimeout(function(){
    result.classList.add("show")
  }, 100);  
  result.innerHTML = "O segundo valor corresponde à <strong>" + partialPercentage.toFixed(2) + "%</strong> do primeiro valor.";
}