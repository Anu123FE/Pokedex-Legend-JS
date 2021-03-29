// To create a new variable - list of 4 pokemons with their characteristics
let pokemonList = [{name: "Squirtle", height: 0.5, type: ["water", "dark", "normal"]},
{name: "Arbok", height: 3.5, type: ["poison", "fire", "ice"]},
{name: "Arcanine", height: 1.9, type: ["fire", "fairy", "steel"]},
{name: "Krabby", height: 0.4, type: ["water", "grass", "electric"]}];

//adding a for loop to write the Pokemon names in the website's DOM
for (let i = 0; i < pokemonList.length; i++){
document.write("<b>" +pokemonList[i].name + "</b>" + " (height: " + pokemonList[i].height +")<br>");
}
