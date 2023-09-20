const container = document.getElementById("characters-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let page = 1;

async function GetCharacters() {
  //GET -> LEER DATOS
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  return await response.json();
}

GetCharacters()
  .then((response) => {
    let htmlString = "";
    response.results.forEach((character) => {
      htmlString += CreateCharacter(character);
    });
    container.innerHTML = htmlString;
  })
  .catch((err) => console.error(err));

function CreateCharacter(character) {
  return `<div class="card" style="width: 18rem;">
    <img src="${character.image}" class="card-img-top" alt="${character.id}">
    <div class="card-body">
      <h5 class="card-title">${character.name}</h5>
      <p class="card-text">
      <span>${character.status} &bull;</span>
      <span>${character.species} &bull;</span>
      <span>${character.gender}  </span>
      </p>
      <a href="./character_id.html?id=${character.id}" class="btn btn-dark">Detalle</a>
    </div>
  </div>`;
}

prev.addEventListener("click", function () {
  page--;

  GetCharacters()
    .then((response) => {
      let htmlString = "";
      response.results.forEach((character) => {
        htmlString += CreateCharacter(character);
      });
      container.innerHTML = htmlString;
    })
    .catch((err) => console.error(err));
});
next.addEventListener("click", function () {
  page++;

  GetCharacters()
    .then((response) => {
      let htmlString = "";
      response.results.forEach((character) => {
        htmlString += CreateCharacter(character);
      });
      container.innerHTML = htmlString;
    })
    .catch((err) => console.error(err));
});
