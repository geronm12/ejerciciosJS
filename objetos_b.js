class Inmueble {
  id;
  direccion;
  paga_cisi;
  incluye_servicios;
  entre_calles;
  tipo;
}

//JSON -> Javascript Object Notation
//clave, valor -> propiedades = claves
//todas las propiedades van dentro de llaves

const inmueble = new Inmueble();
inmueble.id = 1;
inmueble.direccion = "Gral Paz 576";
inmueble.paga_cisi = true;
inmueble.incluye_servicios = false;
inmueble.entre_calles = "Una calle y otra calle";
inmueble.tipo = "Casa";
//Objeto de tipo inmueble

const alquiler = {
  id_inmueble: 1,
  monto_incial: 10000,
  aumentos: [],
  monto_actual: 10000,
  dias_act: 365,
  fecha_ingreso: Date.now(),
  aumentar: function (porcentAumento) {
    this.aumentos.push(porcentAumento);
    this.monto_actual = this.monto_actual * porcentAumento;
    console.log(this.monto_actual);
  },
};

alquiler.aumentar(1.2);
alquiler.aumentar(1.2);
alquiler.aumentar(1.2);
console.log(alquiler);
//Si el día de hoy es = a dias_act + fecha_ingreso

const listaEstudiantes = [];

const tbody = document.getElementById("body");

window.onload = function () {
  Refresh();
};

function FirstLetterToUpperCase(texto) {
  return texto[0].toUpperCase() + texto.substring(1);
}

function Refresh() {
  tbody.innerHTML = "";
  listaEstudiantes.forEach((estudiante) => {
    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.innerText = FirstLetterToUpperCase(estudiante.nombre);
    const tdNota = document.createElement("td");
    tdNota.innerText = estudiante.nota;

    tr.appendChild(tdNombre);
    tr.appendChild(tdNota);
    tbody.appendChild(tr);
  });
}

const txt = document.getElementById("nombre");
const nota = document.getElementById("nota");
const btnAgregar = document.getElementById("btnAgregar");

//Enumerador
const posiblesNotas = {
  APROBADO: "A",
  DESAPROBADO: "D",
  ValidarNota: function (nota) {
    if (nota !== this.APROBADO || nota !== this.DESAPROBADO) {
      return false;
    }

    return true;
  },
};

let nombre, aprobado;

txt.addEventListener("change", function (e) {
  nombre = e.target.value;
});

nota.addEventListener("change", function (e) {
  aprobado = e.target.value;
});

btnAgregar.addEventListener("click", function () {
  //   if (!nombre) {
  //     alert("El nombre es obligatorio");
  //     return;
  //   }
  //   console.log(aprobado);
  //   if (!posiblesNotas.ValidarNota(aprobado)) {
  //     alert("La nota debe ser si o si A o D");
  //     return;
  //   }

  listaEstudiantes.push({
    nombre: nombre,
    nota: aprobado,
  });

  Refresh();
});
