var nombre;
var edad;
var peso;
var pesoInt;
var altura;
var alturaFloat;
var alturaImc;
var imc;
var resultado;

function msg(){

    nombre= document.getElementById("nombre").value;
    edad= document.getElementById("edad").value;
    peso= document.getElementById("peso").value;
    pesoInt=parseInt(peso);
    altura= document.getElementById("altura").value;
    alturaFloat= parseFloat(altura);
    resultado=document.getElementById("resultado")
    alturaImc= (alturaFloat/100)**2;
    imc=pesoInt/ alturaImc;
    resultado.value= imc.toFixed(2); 
    console.log("Buenos días " + nombre + " su IMC es : " + imc.toFixed(2));
  
    return false;
}
function limpiarFormulario() {
    document.getElementById("reset").reset();
  }