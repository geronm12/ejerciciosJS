//    0        n-1  (length)
let numeros = [];
let continuar = true;
while (continuar) {
  const eleccion = prompt(
    "Seleccione la operación que desea realizar. \n A - Agregar  \n E - Eliminar \n L - Leer \n S - Salir"
  );
  switch (eleccion.toUpperCase()) {
    case "A":
      let numero = prompt("Ingrese un número por favor");
      numero = +numero;
      numeros.push(numero);
      break;
    case "E":
      numeros.pop();
      break;
    case "L":
      alert(numeros);
      break;
    case "T":
      alert("Total es:");
      break;
    case "S":
      let respuesta = prompt("Está seguro que desea finalizar? y/n");
      if (respuesta.toUpperCase() === "Y") {
        continuar = false;
      }
    default:
      break;
  }
}

console.log(numeros);
