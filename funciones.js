//invocar -> utilizamos la función ejecutando el código
//que se encuentra dentro de ella
//palabra reservada function
//+ Nombre
//+ Paréntesis ()
//+ cuerpo de func {}
// function Suma() {
let a = 135;
// }
console.log("Antes de la creación de la func");
console.log("Invocando a la función");

// let opcion = prompt("Ingrese una opción: 1 - Saludar, 2 - Suma");

// switch (opcion) {
//   case "1":
//     SaludoConUsuario();
//     break;
//   case "2":
//     SumaConUsuario();
//     break;
//   default:
//     break;
// }

//no retornan nada -> void

function SaludarConParametro(nombre, apellido) {
  alert("Hola " + nombre + " " + apellido);
}

function SaludoConUsuario() {
  //scope o ámbito local
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  SaludarConParametro(nombre, apellido);
}

function Suma(a, b) {
  return a + b;
}

function SumaConUsuario() {
  let a = prompt("Ingrese el primero número");
  a = +a;
  let b = prompt("Ingrese el segundo número");
  b = +b;
  alert(Suma(a, b));
}

//30 personas
const array = ["geronimo", "nicolas"];
const arrayDeArrays = [
  [1, 1],
  [0, 0, 0],
  [0, 0, 3, 3],
];
const arrayc = ["geronimo", "hola", "chau", "recreo", "imaginar"];
ReadArrayLength(array);
ReadArrayLength(arrayDeArrays);
ReadArrayLength(arrayc);

function getLength(array, index) {
  return array[index].length;
}

function ReadArrayLength(vector) {
  for (let index = 0; index < vector.length; index++) {
    console.log(vector[index]);
    console.log(getLength(vector, index));
  }
}

// function GetMaxIndex(array) {
//   return array.length - 1;
// }

// GetMaxIndex(arrayDeArrays);

// let s = 2
// switch(s){
//     case 1:
//     case 2:
//         console.log("a");
//         break;
//     default:
//         console.log("s");
//         break;
// }

//strings, numbers, boolean, funciones
//callbacks
let nombreUsuario = prompt("Ingrese su nombre de usuario");
let contraseña = prompt("Ingrese su contraseña");
let mail = prompt("Ingrese su mail");

CrearUsuario(
  nombreUsuario,
  contraseña,
  function (param) {
    if (
      param === "" ||
      param === " " ||
      param === undefined ||
      param === null
    ) {
      return false;
    }

    return true;
  },
  mail
);

function CrearUsuario(nombreUsuario, password, validate, mail) {
  if (validate(nombreUsuario) && validate(password) && validate(mail)) {
    alert(
      "Usuario Creado con éxito \n" +
        "Su nombre de usuario es: " +
        nombreUsuario
    );
    //guardamos en la base de datos
    //enviamos mail de verificación
  } else {
    alert("El nombre de usuario y la contraseña con obligatorios");
  }
}
