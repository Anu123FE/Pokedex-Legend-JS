// To create a new variable - list of 4 pokemons with their characteristics
let pokemonList = [{name: "Squirtle", height: 0.5, type: ["water", "dark", "normal"]},
{name: "Arbok", height: 3.5, type: ["poison", "fire", "ice"]},
{name: "Arcanine", height: 1.9, type: ["fire", "fairy", "steel"]},
{name: "Krabby", height: 0.4, type: ["water", "grass", "electric"]}];

//adding a for loop to write the Pokemon names in the website's DOM, also adding html <br> for linebreak after each name and <b></b> to make the names bold
//defining a threshold for the height
let pokemonHeightThreshold = 3;
//adding the for loop for printing the names on DOM with the height
for (let i = 0; i < pokemonList.length; i++){
  //leaving variable pokemonString undefined initially
  let pokemonString = "";
  //setting a condition if height > heightThreshold, defining what should be printed in the pokemonString
  if (pokemonList[i].height > pokemonHeightThreshold)
  {
   pokemonString = "<b>" +pokemonList[i].name + "</b>(height: "
   + pokemonList[i].height +") - Wow! That is big! <br>";
  }
  //adding the else condition, defining what should be printed in the pokemonString if the height < heightThreshold
  else
  {
    pokemonString = "<b>" +pokemonList[i].name + "</b>(height: "
   + pokemonList[i].height +")<br>";
  }
  document.write(pokemonString);
  }
