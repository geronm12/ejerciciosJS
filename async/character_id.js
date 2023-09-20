const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get("id");
const characterResponse = await fetch(
  `https://rickandmortyapi.com/api/character/${characterId}`
);
const character = await characterResponse.json();

const container = document.getElementById("character-detail");
// const h1 = document.createElement("h1");
// h1.innerText = character.name;
// container.appendChild(h1);

container.innerHTML = `<div class="card text-bg-light h-50">
  <img src="${character.image}" class="card-img" alt="${character.name}">
  <div class="card-img-overlay">
    <h5 class="card-title">${character.name}</h5>
    <p class="card-text">${character.status}</p>
    <p class="card-text"><small>${character.gender}</small>
    <small>${character.species}</small></p>
  </div>
</div>`;

function CreateEpisodes(episodes) {
  let htmlString = `<div class="card" style="width: 18rem;"><div class="card-header">
  Featured</div>
  <ul class="list-group list-group-flush">`;
  episodes.forEach((episode) => {
    htmlString += `
          <li class="list-group-item">${episode}</li>
        `;
  });
  htmlString += `</ul>
  </div>`;
}
