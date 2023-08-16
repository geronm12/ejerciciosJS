//PARA QUE FUNCIONE AGREGAR DIVS AL HTML


//DOM de HTML
//Objetos - Tipos de Datos - Datos Complejos y compuestos
//Document Object Model
const elemento = document.getElementById("mensaje");
//Consulta: . clase (usando el punto),
//id (usando el numeral o almoadilla #),
//nombre (colocando el nombre de la etiquieta)
// de selección

const divs = document.querySelectorAll("div");
console.log(divs);
//#region  CONSTANTS
const COLOR_PAR = "aquamarine";
const COLOR_IMPAR = "blue";
const MENSAJE_PAR = "PRESENTE";
const MENSAJE_IMPAR = "AUSENTE";
//#endregion

for (let index = 0; index < divs.length; index++) {
  ModificarDiv(divs[index]);
}

//#region  Functions
function ParOImpar(numero) {
  if (numero % 2 === 0) {
    return [MENSAJE_PAR, COLOR_PAR];
  } else {
    return [MENSAJE_IMPAR, COLOR_IMPAR];
  }
}

function ModificarDiv(htmlDivElement) {
  const array = ParOImpar(htmlDivElement.innerText);
  htmlDivElement.innerText = htmlDivElement.innerText + " " + array[0];
  htmlDivElement.style.color = array[1];
}

//#endregion
