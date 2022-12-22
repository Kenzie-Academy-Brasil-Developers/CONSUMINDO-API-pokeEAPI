const getAllPokemons = async () => {
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon", {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            const mainList = document.querySelector(".main__list")
            const loading = createLoading()

            mainList.innerHTML = ""

            mainList.appendChild(loading)

            render(res.results)
            return res
        })

    return pokemons
}
getAllPokemons()

const getPokemonByName = async pokemonName => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            const mainList = document.querySelector(".main__list")
            const loading = createLoading()

            mainList.innerHTML = ""

            mainList.appendChild(loading)

            return res
        })

    return pokemon
}

const renderSearch = () => {
    const input = document.querySelector("input")
    const searchButton = document.querySelector(".search__button")

    searchButton.addEventListener("click", async () => {

        const mainList = document.querySelector(".main__list")

        mainList.innerHTML = ""

        const searchedPokemon = await getPokemonByName(input.value)

        const card = createCardSearched(searchedPokemon)

        mainList.appendChild(card)
    })
}
renderSearch()