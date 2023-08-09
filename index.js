//    0        n-1  (length)
let numeros = [];
const acciones = [
  "A - Agregar",
  "E - Eliminar",
  "L - Leer",
  "T - Sumatoria Total",
  "O - Ordenar",
  "S - Salir",
];
let continuar = true;

let message = "Seleccione la operación que desea realizar.";

acciones.forEach((accion) => {
  message += "\n" + accion;
});

while (continuar) {
  const eleccion = prompt(message);
  switch (eleccion.toUpperCase()) {
    case "A":
      let numero = prompt("Ingrese un número por favor");
      numero = +numero;
      if (!Number.isNaN(numero)) {
        numeros.push(numero);
      }
      break;
    case "E":
      numeros.pop();
      break;
    case "L":
      alert(numeros);
      break;
    case "T":
      let acumulador = 0;
      numeros.forEach((elemento) => {
        acumulador += elemento;
      });
      alert("La sumatoria total es: " + acumulador);
      break;
    case "O":
      let resp = prompt(
        "Desea ordenar: \n 1- Mayor a menor \n 2 - Menor a Mayor"
      );
      if (resp === "1") {
        alert(
          numeros.sort(function (a, b) {
            return a - b;
          })
        );
      } else if (resp === "2") {
        alert(
          numeros.sort(function (a, b) {
            return b - a;
          })
        );
      }
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

console.log(["Manzana", "Banana", "Pera"].sort());

console.log(numeros);
