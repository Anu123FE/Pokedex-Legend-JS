// wrapping the code in an IIFE

const pokemonRepository = (function () {
  function pokemonListFromExternalSource() {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let pokemonList = [];

    fetch(apiURL)
      .then((response) => response.json())
      .then((response) => {
        pokemonList = response.results;
        pokemonList.forEach((pokemon) => {
          const newPokemonList = document.querySelector('.pokemon-list');
          // newPokemonList.classList.add("list-group");
          const listItemPokemon = document.createElement('li');
          const button = document.createElement('button');
          button.innerText = pokemon.name;
          button.classList.add('btn');
          button.classList.add('btn-danger');
          button.classList.add('button-class');
          button.setAttribute('data-toggle', 'modal');
          button.setAttribute('data-target', '#exampleModal');
          button.addEventListener('click', () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              .then((res) => res.json())
              .then((result) => {
                const pokemonDetails = `Height: ${result.height}<br>`;
                $('.modal-title').html(pokemon.name);
                $('.modal-body').html('');
                $('.modal-body').append(`${pokemonDetails}`, `<img src="${result.sprites.front_shiny}">`);
              })
              .catch((err) => {
                //eslint-disable-lin
                console.error(err);
              });

            // alert(pokemonDetails);
          });
          listItemPokemon.appendChild(button);
          newPokemonList.appendChild(listItemPokemon);
        });
      })
      .catch((error) => {
        //eslint-disable-lin
        console.log(error);
      });
  }

  // adding getAll key, with return statement-will return the pokemonList
  function getAll() {
    /* eslint-disable */ 
    return pokemonList;
  }
  // adding add key, will push a new pokemon with new properties into the list
  function add(pokemon) {
    /* eslint-disable */
    pokemonList.push(pokemon);
  }

  function main() {
    pokemonRepository.pokemonListFromExternalSource();
  }

  // adding the return statement
  return {
    getAll,
    add,
    main,
    pokemonListFromExternalSource,
  };
}());

pokemonRepository.main();

