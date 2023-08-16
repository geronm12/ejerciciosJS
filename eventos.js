//qué es un evento: Es una acción realizada
//por el usuario
//que dispara una lógica

const btn = document.getElementById("display");
const ul = document.querySelector("ul");
let showedList = false;

btn.addEventListener("click", OnDisplayClick);

function OnDisplayClick() {
  //showedList = true
  if (!showedList) {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
  showedList = !showedList;
}
