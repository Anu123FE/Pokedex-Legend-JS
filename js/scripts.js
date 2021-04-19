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
//adding the return statement
return {
  getAll: getAll,
  add: add,
  };

})();
//adding a new pokemon-Charizard to the list
pokemonRepository.add({name: "Charizard", height: 4.2, type: ["land", "poison", "magic"]});
//printing to console.log
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.add());
//calling function getAll for accessing the variable in pokemonRepository with a forEach loop and printing in the DOM
pokemonRepository.getAll().forEach(function(pokemon){
  document.write(pokemon.name+"<br>");
  document.write(pokemon.height+"<br>");
  document.write(pokemon.type+"<br>");
  document.write("<hr>");
});
