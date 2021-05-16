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
//adding function main to hold the code for DOM Manipulation and forEach function
function main()
{
  //adding a new pokemon-Charizard to the list
  pokemonRepository.add({name: "Charizard", height: 4.2, type: [" land", " poison", " magic"]});
  pokemonRepository.getAll().forEach(function(pokemon){
  let newPokemonList = document.querySelector(".pokemon-list");
  let listItemPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  //adding eventListener property-upon clicking the button, the pokemon's characteristics should display as an alert
  button.addEventListener('click', function() {
    let pokemonDetails = `Name : ${pokemon.name}
    Height: ${pokemon.height}
    Types: ${[...pokemon.type]}`
    alert(pokemonDetails);
  });
  listItemPokemon.appendChild(button);
  newPokemonList.appendChild(listItemPokemon);
});
}

//adding the return statement
return {
  getAll: getAll,
  add: add,
  main: main
  };
})();
pokemonRepository.main();
