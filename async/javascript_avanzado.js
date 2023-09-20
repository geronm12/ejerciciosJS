//Token
//Bases de datos -> 16 millones de objetos

//fetching de datos -> Solicitar datos a un servidor y esperar que retornen

//sincrona -> No espera para continuar

//enumerador
const tipos = {
  MAGIA: "magia",
  MAQUINA: "maquina",
  OSCURO: "oscuro",
  HABIL: "hábil",
  MUTANTE: "mutante",
};

s = {
  MAGIA: "magia",
  MAQUINA: "maquina",
  OSCURO: "oscuro",
  HABIL: "hábil",
  MUTANTE: "mutante",
};

const personajes = [
  {
    id: 1,
    nombre_heroe: "Iron Man",
    super_poder: "Inteligencia",
    hp: 2500,
    mp: 2500,
    tipo: tipos.HABIL,
  },
  {
    id: 2,
    nombre_heroe: "Thor",
    super_poder: "Dios del trueno",
    hp: 2000,
    mp: 3000,
    tipo: tipos.MAGIA,
  },
  {
    id: 3,
    nombre_heroe: "Wolverine",
    super_poder: "Garras Inmortalidad",
    hp: 3500,
    mp: 1200,
    tipo: tipos.HABIL,
  },
  {
    id: 4,
    nombre_heroe: "Dead Pool",
    super_poder: "Inmortalidad",
    hp: 4000,
    mp: 0,
    tipo: tipos.HABIL,
  },
];

function getDataFromDataBaseSync() {
  return personajes;
}

let charactersSinc = getDataFromDataBaseSync();

console.log(charactersSinc);

function getDataFromDataBaseAsyncNoPromise() {
  setTimeout(() => personajes, 2000);
}

let charactersAsyncWithoutPromise = getDataFromDataBaseAsyncNoPromise();
console.log(charactersAsyncWithoutPromise);

console.log("Estoy ejecutandome sin esperar que llegue la información");

async function getDataFromDataBaseAsync() {
  return new Promise(function (resolve, reject) {
    if (personajes.length > 0) {
      setTimeout(
        resolve({
          data: personajes,
          ok: true,
          status: 200,
        }),
        2000
      );
    }

    setTimeout(
      reject({
        ok: false,
        status: 400,
        error_msg: "No existe ningún personaje.",
      }),
      2000
    );
  });
}

// getDataFromDataBaseAsync()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function GetCharacters() {
//   try {
//     const result = await getDataFromDataBaseAsync();
//     return result;
//   } catch (err) {
//     console.error(err);
//   }
// }

// GetCharacters();
