//removing the other array of pokemons and adding an empty array and adding the external source of pokemons (API)
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
//adding add function-then push feature
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  //getAll function will return the pokemonList (loaded from API)
  function getAll() {
    return pokemonList;
  }
  //addListItem is for adding HTML elements and appending the button, also to insert the addEventListener -upon clicking the details of the pokemon will be logged
  //onto the console log
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }
//loadList will fetch the data from the API then pass it onto the 1st .then function as a response, if this promise is resolved, a json data format is returned
//which is then passed onto the 2nd .then function. The json data is stored under results key in the API,so passing a forEach function for each item
//and then logging in what is needed (item.name and item.url) on the console log. Also the .catch function catches any errors (if the promise is not resolved)
  function loadList(item) {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
//loadDetails function is to determine what details are needed to be fetched just like the loadList function (except for the change in parameter(item))
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
