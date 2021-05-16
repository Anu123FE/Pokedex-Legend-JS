//wrapping the code in an IIFE

let pokemonRepository = (function () {

let pokemonList = [
{name: "Squirtle", height: 0.5, type: ["water", " dark", " normal"]},
{name: "Arbok", height: 3.5, type: ["poison", " fire", " ice"]},
{name: "Arcanine", height: 1.9, type: [" fire", " fairy", " steel"]},
{name: "Krabby", height: 0.4, type: [" water", " grass", " electric"
]}
];
//adding getAll key, with return statement-will return the pokemonList
function getAll(){
  return pokemonList;
}
//adding add key, will push a new pokemon with new properties into the list
function add(pokemon) {
  pokemonList.push(pokemon);
}

function addListItem(pokemon){
  let newPokemonList = document.querySelector(".pokemon-list");
  let listItemPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  button.addEventListener('click', function() {
    let showDetails = `Name: ${pokemon.name}
    Height: ${pokemon.height}
    Type: ${[...pokemon.type]}`
    console.log(showDetails);
  });
  listItemPokemon.appendChild(button);
  newPokemonList.appendChild(listItemPokemon);
};
//adding the return statement
return {
  getAll: getAll,
  add: add,
  addListItem: addListItem
  };

})();
//adding a new pokemon-Charizard to the list
pokemonRepository.add({name: "Charizard", height: 4.2, type: [" land", " poison", " magic"]});
//printing to console.log
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.add());
//calling function getAll for accessing the variable in pokemonRepository with a forEach loop and printing in the DOM
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
