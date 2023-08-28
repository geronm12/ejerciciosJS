//Javascript (NO JAVA) ->
//Paradigma de desarrollo: Programación Funcional
//Programación Orientada a eventos
//Paradigma de desarrollo: Programación Orientada a Objetos
//Objeto ->
//Molde o prototipo

//Si yo no lo creo por programación no lo puedo
//crear != invocar
// function saludar() {
//   console.log("hola");
// }

//instanciar new != crear la clase
//Instanciar -> Crear el objeto
// class Auto {
//   modelo;
//   descripcion;
//   motor;
//   color;
//   cant_puertas;
//   tipo;
//   patente;
//   anti_niebla;
//   auto_andando;
//   obtenerModelo = function () {
//     console.log(this.descripcion + " " + this.modelo + " " + this.color);
//   };
//   arrancar = function () {
//     this.auto_andando = true;
//     console.log("Se inicia el auto");
//   };
//   frenar = function () {
//     this.auto_andando = false;
//     console.log("Se frenó el auto");
//   };
//   //Interno
//   constructor(
//     modelo,
//     descripcion,
//     motor,
//     color,
//     cant_puertas,
//     tipo,
//     patente,
//     anti_niebla
//   ) {
//     this.modelo = modelo;
//     this.descripcion = descripcion;
//     this.motor = motor;
//     this.color = color;
//     this.cant_puertas = cant_puertas;
//     this.tipo = tipo;
//     this.patente = patente;
//     this.anti_niebla = anti_niebla;
//   }
// }

// let auto_nuevo = new Auto(
//   "208",
//   "Peugeot",
//   "2.0",
//   "Rojo",
//   5,
//   "Sedan",
//   "FJ-270-VA",
//   true
// );

// let auto_nuevo_azul = new Auto(
//   "208",
//   "Peugeot",
//   "2.0",
//   "Azul",
//   5,
//   "Sedan",
//   "FJ-270-DA",
//   true
// );

// let auto_nuevo_fiat = new Auto(
//   "uno",
//   "FIAT",
//   "1.2",
//   "Blanco",
//   3,
//   "Hatchback",
//   "123-ABC",
//   false
// );

// //leer y escribir

// console.log("-------------------");
// auto_nuevo.obtenerModelo();
// auto_nuevo.arrancar();
// auto_nuevo.frenar();

// console.log("--------------------");
// auto_nuevo_azul.obtenerModelo();
// auto_nuevo_azul.arrancar();
// auto_nuevo_azul.frenar();

// console.log("--------------------");
// auto_nuevo_fiat.obtenerModelo();
// auto_nuevo_fiat.arrancar();
// auto_nuevo_fiat.frenar();

// class CarritoDeCompras {
//   sumTotal;
//   items;
//   obtenerSumatoriaTotal = function () {
//     this.items.forEach((element) => {
//       this.sumTotal += element.precio;
//     });
//   };
//   obtenerBruto = function () {};
//   obtenerNeto = function () {};
//   constructor(items) {
//     this.items = items;
//   }
// }

class ItemDeCompra {
  descripcion; //playstation 5
  precio_unitario; //500000
  cant; //2
  subTotal = function () {
    return this.precio_unitario * this.cant;
  };
  constructor(descripcion, precio_unitario, cant) {
    this.descripcion = descripcion;
    this.precio_unitario = precio_unitario;
    this.cant = cant;
  }
}

class CarritoDeCompras {
  lista_items;

  obtenerTotal = function () {
    let total = 0;
    this.lista_items.forEach((element) => {
      total += element.subTotal();
    });
    return total;
  };
  constructor(lista_items) {
    this.lista_items = lista_items;
  }
}

{
  /* <span id="span_ps5" >Playstation 5</span>
<label id="lbl_ps5">500000</label>
<label>Cantidad</label>
<input type="number" step="1" id="cant_ps5" />
<button id="add_ps">Agregar</button> */
}

const arrayProductos = [];

const btn_add_ps = document.getElementById("add_ps");
const btn_add_pc = document.getElementById("add_pc");
const btn_facturar = document.getElementById("facturar");
let array_items = [];

const input_cant = document.getElementById("cant_ps5");
let cant_ps5 = 0;

input_cant.addEventListener("change", function (e) {
  cant_ps5 = +e.target.value;
});

btn_add_ps.addEventListener("click", function () {
  const precio = document.getElementById("lbl_ps5");
  const desc = document.getElementById("span_ps5");
  let item = new ItemDeCompra(desc.innerText, +precio.innerText, cant_ps5);
  array_items.push(item);
});

const total = document.getElementById("total");

btn_facturar.addEventListener("click", function () {
  let carrito = new CarritoDeCompras(array_items);
  total.innerHTML = `El monto total que debe abonar es de: ${carrito.obtenerTotal()}`;
});

{
  /* <div>
<span id="span_ps5">Playstation 5</span>
<label id="lbl_ps5">3</label>
<label>Cantidad</label>
<input type="number" step="1" id="cant_ps5" value="0" />
<button id="add_ps">Agregar</button>
</div> */
}

//Consigna
//Calculadora -> DOM
//Clases y objetos
//Suma
//División -> 0 -> Marcar un  error  label con color rojo
class Producto {
  precio;
  descripcion;
  constructor(precio, descripcion) {
    this.precio = precio;
    this.descripcion = descripcion;
  }
}

const array_productos = [];
array_productos.push(new Producto(500000, "Playstation5"));
array_productos.push(new Producto(300000, "PcGamer"));
array_productos.push(new Producto(200000, "Teclado"));

console.log(array_productos);

const produ = document.getElementById("productos");

let htmlString = "";

array_productos.forEach((element) => {
  htmlString += `<h1>${element.descripcion}</h1> <label>${element.precio}</label>`;
});

produ.innerHTML = htmlString;


