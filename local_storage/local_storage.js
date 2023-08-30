//local storage
//es una base de datos que se encuentra
//en nuestro navegador
//cap máxima = 10mb
//sólo permite almacenar tipos de datos primitivos
//JSON -> Objeto que posee métodos
//que me permiten convertir un dato completo
//en string y viceversa
//está estructurado por clave - valor
//la clave me permite leer y escribir
//en el local storage

//guardar algo nuevo o modificar en
//el local storage
//se utiliza la "key"
//tipos de datos primitivos -> number, string, boolean
//object y array
// localStorage.setItem("nombre", "geronimo");
// localStorage.setItem("nombre", 123);

//leer la información
// let variable = localStorage.getItem("nombre");

// let array = ["geronimo", "martin"];
// console.log(array)
// const stringed_array = JSON.stringify(array);
// console.log(stringed_array);
// localStorage.setItem("nombre", stringed_array);

// let arrayB = localStorage.getItem("nombre");
// let converted_array = JSON.parse(arrayB);
// converted_array.forEach(element => {
//     console.log(element)
// });

//#region  Inputs
const agendaBody = document.getElementById("agenda");
const btnSubmit = document.getElementById("btn-submit");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const numero = document.getElementById("numero");
const buscar = document.getElementById("buscar");
//#endregion Inputs

//#region Variables
let nom,
  mail,
  num = "";
let agenda = [];
const KEYS = {
  AGENDA_KEY: "agenda",
};
//#endregion Variables

//#region Functional Logic
let localStorageAgenda = localStorage.getItem(KEYS.AGENDA_KEY);
localStorageAgenda = JSON.parse(localStorageAgenda);
if (localStorageAgenda) {
  agenda = localStorageAgenda;
  Refresh(agenda);
}
//#endregion Functional Logic

//#region  Events
nombre.addEventListener("change", function (e) {
  nom = e.target.value;
});

email.addEventListener("change", function (e) {
  mail = e.target.value;
});

numero.addEventListener("change", function (e) {
  num = e.target.value;
});

btnSubmit.addEventListener("click", function (e) {
  Save(e);
  Refresh(agenda);
  Clear();
});

buscar.addEventListener("change", function (e) {
  Refresh(
    agenda.filter((contacto) => contacto.nombre.includes(e.target.value))
  );
});
//#endregion Events
//#region Funciones
function Refresh(array) {
  let htmlString = "";
  array.forEach((contacto) => {
    htmlString += CreateBodyElement(
      contacto.nombre,
      contacto.numero,
      contacto.email
    );
  });
  agendaBody.innerHTML = htmlString;
  CreateModifyButtons();
}

function CreateBodyElement(nombre, numero, email) {
  return `<tr>
            <td>${nombre}</td>
            <td>${numero}</td>
            <td>${email}</td>
            <td><button id='${email}' class="btn btn-primary">M</button> </td>
          </tr> `;
}

function CreateModifyButtons() {
  let emails = [];
  agenda.forEach((contacto) => {
    emails.push(contacto.email);
  });

  emails.forEach((mail) => {
    const btn = document.getElementById(mail);
    btn.addEventListener("click", function () {
      let contacto = agenda.find((contacto) => contacto.email === mail);
      nombre.value = contacto.nombre;
      email.value = contacto.email;
      email.disabled = true;
      numero.value = contacto.numero;
    });
  });
}

function Save(e) {
  e.preventDefault();
  e.stopPropagation();
  agenda.push({
    nombre: nom.toUpperCase(),
    numero: num,
    email: mail,
  });
  localStorage.setItem(KEYS.AGENDA_KEY, JSON.stringify(agenda));
}

function Clear() {
  nombre.value = "";
  email.value = "";
  numero.value = "";
}
//#endregion
